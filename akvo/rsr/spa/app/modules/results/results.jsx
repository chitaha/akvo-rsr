/* global window */
import React, { useState, useEffect, useRef } from 'react'
// import { createPortal } from 'react-dom'
import { connect } from 'react-redux'
import { Input, Icon, Collapse, Button, Select, Checkbox } from 'antd'
import { cloneDeep } from 'lodash'
import { useTranslation } from 'react-i18next'
import classNames from 'classnames'
import Portal from '../../utils/portal'
import './styles.scss'
import api from '../../utils/api'
import Period from './period'
import * as actions from '../editor/actions'
import { resultTypes } from '../../utils/constants'

const { Panel } = Collapse
const Aux = node => node.children

const Results = ({ userRdr, results, setResults, id}) => {
  const { t } = useTranslation()
  const [src, setSrc] = useState('')
  const [selectedPeriods, setSelectedPeriods] = useState([])
  const [activeResultKey, setActiveResultKey] = useState()
  const [periodFilter, setPeriodFilter] = useState(null)
  const [allChecked, setAllChecked] = useState(false)
  const [statusFilter, setStatusFilter] = useState(null)
  const [treeFilter, setTreeFilter] = useState({ resultIds: [], indicatorIds: [], periodIds: [], updateIds: [] })
  const mainContentRef = useRef()
  const periodSetters = useRef({})

  const toggleSelectedPeriod = (period, indicatorId) => {
    if(selectedPeriods.findIndex(it => it.id === period.id) === -1){
      setSelectedPeriods([...selectedPeriods, {id: period.id, indicatorId, resultId: period.result, locked: period.locked}])
    } else {
      setSelectedPeriods(selectedPeriods.filter(it => it.id !== period.id))
    }
  }
  const selectedLocked = selectedPeriods.filter(it => it.locked)
  const selectedUnlocked = selectedPeriods.filter(it => !it.locked)
  const handleChangeResult = (key) => {
    setActiveResultKey(key)
  }
  const periodOpts = []
  results.forEach(res => {
    res.indicators.forEach(ind => {
      ind.periods.forEach(per => {
        const item = {start: per.periodStart, end: per.periodEnd}
        if(periodOpts.findIndex(it => it.start === item.start && it.end === item.end) === -1){
          periodOpts.push(item)
        }
      })
    })
  })
  const handleStatusFilterChange = (val, ev, _results) => {
    if(_results == null) _results = results
    setStatusFilter(val)
    setPeriodFilter(null)
    const filtered = {
      resultIds: [],
      indicatorIds: [],
      periodIds: [],
      updateIds: []
    }
    if (val === 'need-reporting') {
      _results.forEach(result => {
        let filterResult = false
        result.indicators.forEach(indicator => {
          let filterIndicator = false
          indicator.periods.forEach(period => {
            const canAddUpdate = period.locked ? false : indicator.measure === '2' /* 2 == percentage */ ? period.updates.length === 0 : true
            if (canAddUpdate) {
              filterResult = true
              filterIndicator = true
              filtered.periodIds.push(period.id)
            }
          })
          if (filterIndicator) {
            filtered.indicatorIds.push(indicator.id)
          }
        })
        if (filterResult) {
          filtered.resultIds.push(result.id)
        }
      })
    }
    else if (val === 'pending') {
      _results.forEach(result => {
        let filterResult = false
        result.indicators.forEach(indicator => {
          let filterIndicator = false
          indicator.periods.forEach(period => {
            const pending = period.updates.filter(it => it.status === 'P')
            if (pending.length > 0) {
              filterIndicator = true
              filterResult = true
              filtered.periodIds.push(period.id)
              filtered.updateIds = pending.map(it => it.id)
            }
          })
          if (filterIndicator) {
            filtered.indicatorIds.push(indicator.id)
          }
        })
        if (filterResult) {
          filtered.resultIds.push(result.id)
        }
      })
    }
    else if (val === 'approved') {
      _results.forEach(result => {
        let filterResult = false
        result.indicators.forEach(indicator => {
          let filterIndicator = false
          indicator.periods.forEach(period => {
            const pending = period.updates.filter(it => it.status === 'A')
            if (pending.length > 0) {
              filterIndicator = true
              filterResult = true
              filtered.periodIds.push(period.id)
              filtered.updateIds = pending.map(it => it.id)
            }
          })
          if (filterIndicator) {
            filtered.indicatorIds.push(indicator.id)
          }
        })
        if (filterResult) {
          filtered.resultIds.push(result.id)
        }
      })
    }
    setTreeFilter(filtered)
    setActiveResultKey(filtered.resultIds)
  }
  const updatePeriodsLock = (periods, locked) => {
    let indicatorIds = periods.map(it => it.indicatorId);
    indicatorIds = indicatorIds.filter((it, ind) => indicatorIds.indexOf(it) === ind)
    indicatorIds.forEach(indicatorId => {
      const subset = periods.filter(it => it.indicatorId === indicatorId)
      if(periodSetters.current[indicatorId]) periodSetters.current[indicatorId](subset, locked)
    })
    setSelectedPeriods(selectedPeriods.map(it => ({...it, locked})))
    api.post(`/set-periods-locked/${id}/`, {
      periods: periods.map(it => it.id),
      locked
    })
    // update results
    const _results = cloneDeep(results)
    periods.forEach(period => {
      _results.find(it => it.id === period.resultId)
        .indicators.find(it => it.id === period.indicatorId)
        .periods.find(it => it.id === period.id)
        .locked = locked
    })
    setResults(_results)
  }
  const handleUnlock = () => {
    updatePeriodsLock(selectedLocked, false)
  }
  const handleLock = () => {
    updatePeriodsLock(selectedUnlocked, true)
  }
  const handleSetPeriodsRef = (indicatorId) => (setPeriods) => {
    periodSetters.current[indicatorId] = setPeriods
  }
  const resultsFilter = it => {
    const srcFilter = it.indicators.filter(ind => src.length === 0 || ind.title.toLowerCase().indexOf(src.toLowerCase()) !== -1).length > 0
    if(srcFilter) return treeFilter.resultIds.length === 0 ? true : treeFilter.resultIds.indexOf(it.id) !== -1
    return false
  }
  const indicatorsFilter = it => {
    const srcFilter = src.length === 0 || it.title.toLowerCase().indexOf(src.toLowerCase()) !== -1
    if(srcFilter) return treeFilter.indicatorIds.length === 0 ? true : treeFilter.indicatorIds.indexOf(it.id) !== -1
    return false
  }
  const indicatorTitle = (title) => {
    if(src.length === 0) return title
    const findex = title.toLowerCase().indexOf(src.toLowerCase())
    return [title.substr(0, findex), <b>{title.substr(findex, src.length)}</b>, title.substr(findex + src.length)]
  }
  const filteredResults = results.filter(resultsFilter)
  const toggleSelectAll = () => {
    let allPeriods = []
    filteredResults.forEach(res => {
      res.indicators.filter(indicatorsFilter).forEach(ind => {
        allPeriods = [
          ...allPeriods,
          ...ind.periods.filter(it => {
            if (!periodFilter) return true
            const dates = periodFilter.split('-')
            return it.periodStart === dates[0] && it.periodEnd === dates[1]
          }).map(it => ({ id: it.id, locked: it.locked, indicatorId: ind.id }))
        ]
      })
    })
    if (selectedPeriods.length < allPeriods.length) {
      setSelectedPeriods(allPeriods)
      setAllChecked(true)
    } else {
      setSelectedPeriods([])
      setAllChecked(false)
    }
  }
  const handlePeriodFilter = (value) => {
    setPeriodFilter(value)
    setStatusFilter(null)
    setTreeFilter({
      resultIds: [],
      indicatorIds: [],
      periodIds: [],
      updateIds: []
    })
    let allPeriods = []
    filteredResults.forEach(res => {
      res.indicators.filter(indicatorsFilter).forEach(ind => {
        allPeriods = [
          ...allPeriods,
          ...ind.periods.filter(it => {
            if (!value) return true
            const dates = value.split('-')
            return it.periodStart === dates[0] && it.periodEnd === dates[1]
          }).map(it => ({ id: it.id, locked: it.locked, indicatorId: ind.id }))
        ]
      })
    })
    if(value){
      setSelectedPeriods(allPeriods)
      setAllChecked(true)
    } else {
      setSelectedPeriods([])
      setAllChecked(false)
    }
  }
  const pushUpdate = (newUpdate, periodId, indicatorId, resultId) => {
    const _results = cloneDeep(results)
    _results.find(it => it.id === resultId)
      .indicators.find(it => it.id === indicatorId)
      .periods.find(it => it.id === periodId)
      .updates.push(newUpdate)
    setResults(_results)
  }
  const patchPeriod = (period, indicatorId, resultId) => {
    const _results = cloneDeep(results)
    const _period = _results.find(it => it.id === resultId)
      .indicators.find(it => it.id === indicatorId)
      .periods.find(it => it.id === period.id)
    _period.locked = period.locked
    Object.keys(period).forEach((key) => {
      _period[key] = period[key]
    })
    setResults(_results)
  }
  const handleSearchInput = (ev) => {
    setSrc(ev.target.value)
  }
  useEffect(() => {
    if(src.length > 0){
      setActiveResultKey(filteredResults.map(it => it.id))
    }
  }, [src])
  return (
    <div className="mne-view">
      <div className="main-content filterBarVisible" ref={ref => { mainContentRef.current = ref }}>
        <div className="filter-bar">
          <Checkbox checked={allChecked} onClick={toggleSelectAll} />
          <Select value={periodFilter} onChange={handlePeriodFilter} dropdownMatchSelectWidth={false}>
            <Option value={null}>All periods</Option>
            {periodOpts.map(opt => <Option value={`${opt.start}-${opt.end}`}>{opt.start} - {opt.end}</Option>)}
          </Select>
          <Button type="ghost" className="unlock" icon="unlock" disabled={selectedLocked.length === 0} onClick={handleUnlock}>Unlock {selectedLocked.length} periods</Button>
          <Button type="ghost" className="lock" icon="lock" disabled={selectedUnlocked.length === 0} onClick={handleLock}>Lock {selectedUnlocked.length} periods</Button>
          <div className="src">
            <Input value={src} onChange={handleSearchInput} placeholder="Find an indicator..." prefix={<Icon type="search" />} allowClear />
          </div>
          <StatusFilter {...{ results, handleStatusFilterChange, statusFilter }} />
          <Portal>
            <div className="beta">
              <div className="label">
                <Icon type="experiment" />
                New view (beta)
              </div>
              <a href={`/${userRdr.lang}/myrsr/my_project/${id}/`}><Button type="danger">Older version</Button></a>
            </div>
          </Portal>
        </div>
        <Collapse
          accordion={statusFilter == null || statusFilter === 'approved'}
          bordered={false} className="results-list" expandIcon={({ isActive }) => <ExpandIcon isActive={isActive} />}
          activeKey={activeResultKey}
          onChange={handleChangeResult}
        >
          {filteredResults.map(result => (
            <Panel header={[
              <div className="text">
                <span>{result.title}</span>
                <div>
                  <small>{t(resultTypes.find(it => it.value === result.type)?.label)}</small>
                  <i>{t('{{count}} indicators', { count: result.indicators.length })}</i>
                </div>
              </div>
            ]} key={result.id}>
              <Collapse className="indicators-list" destroyInactivePanel bordered={false} defaultActiveKey={treeFilter.indicatorIds}>
                {result.indicators.filter(indicatorsFilter).map(indicator => (
                <Panel header={indicatorTitle(indicator.title)} key={indicator.id}>
                  <Indicator {...{ indicator, treeFilter, statusFilter, toggleSelectedPeriod, selectedPeriods, userRdr, periodFilter, pushUpdate, patchPeriod, getSetPeriodsRef: handleSetPeriodsRef(indicator.id) }} projectId={id} indicatorId={indicator.id} resultId={result.id} measure={indicator.measure} />
                </Panel>
              ))}
              </Collapse>
            </Panel>
          ))}
        </Collapse>
      </div>
    </div>
  )
}

const ExpandIcon = ({ isActive }) => (
  <div className={classNames('expander', { isActive })}>
    <Icon type="down" />
  </div>
)

const StatusFilter = ({ statusFilter, handleStatusFilterChange, results }) => {
  let needsReporting = 0
  let pending = 0
  let approved = 0
  results.forEach(result => {
    result.indicators.forEach(indicator => {
      indicator.periods.forEach(period => {
        const canAddUpdate = period.locked ? false : indicator.measure === '2' /* 2 == percentage */ ? period.updates.length === 0 : true
        if (canAddUpdate) {
          needsReporting += 1
        }
        period.updates.forEach(update => {
          if (update.status === 'P') {
            pending += 1
          }
          else if (update.status === 'A') {
            approved += 1
          }
        })
      })
    })
  })
  return [
    <Select className="value-filter" value={statusFilter} dropdownMatchSelectWidth={false} onChange={handleStatusFilterChange}>
      <Option value={null}>All indicators</Option>
      <Option value="need-reporting">Values to be reported ({needsReporting})</Option>
      <Option value="pending">Values pending approval ({pending})</Option>
      <Option value="approved">Approved values ({approved})</Option>
    </Select>
  ]
}

const {Option} = Select

const Indicator = ({ indicator, treeFilter, statusFilter, pushUpdate, patchPeriod, toggleSelectedPeriod, selectedPeriods, indicatorId, resultId, projectId, measure, userRdr, periodFilter, getSetPeriodsRef }) => {
  const [periods, setPeriods] = useState(null)
  const [activeKey, setActiveKey] = useState(-1)
  const periodsRef = useRef()
  const _setPeriods = (_periods) => {
    setPeriods(_periods)
    periodsRef.current = _periods
  }
  const setPeriodsLocked = (subset, locked) => {
    const _periods = cloneDeep(periodsRef.current)
    subset.forEach(period => {
      const item = _periods.find(it => it.id === period.id)
      if(item){
        item.locked = locked
      }
    })
    _setPeriods(_periods)
  }
  useEffect(() => {
    if (getSetPeriodsRef) getSetPeriodsRef(setPeriodsLocked) // to allow parent to setPeriods
    _setPeriods(indicator.periods)
  }, [])
  useEffect(() => {
    if(treeFilter.periodIds.length > 0 && statusFilter !== 'need-reporting'){
      const filtered = periodsRef.current.filter(it => treeFilter.periodIds.length === 0 ? true : treeFilter.periodIds.indexOf(it.id) !== -1)
      setActiveKey(filtered.map(it => it.id))
    }
  }, [treeFilter])
  const editPeriod = (period, index) => {
    _setPeriods([...periods.slice(0, index), period, ...periods.slice(index + 1)])
    patchPeriod(period, indicatorId, resultId)
  }
  return (
    <Aux>
      <Collapse accordion className="periods" bordered={false} activeKey={activeKey} onChange={key => { setActiveKey(key) }}>
        {periods && periods.filter(it => {
          if(!periodFilter) return true
          const dates = periodFilter.split('-')
          return it.periodStart === dates[0] && it.periodEnd === dates[1]
        }).filter(it => treeFilter.periodIds.length === 0 ? true : treeFilter.periodIds.indexOf(it.id) !== -1)
          .map((period, index) => <Period {...{ period, measure, index, activeKey, key: period.id, indicatorId, resultId, projectId, indicator, treeFilter, statusFilter, pushUpdate, baseline: { year: indicator.baselineYear, value: indicator.baselineValue }, userRdr, editPeriod, toggleSelectedPeriod, selectedPeriods}} />
        )}
      </Collapse>
    </Aux>
  )
}

export default connect(
  ({ userRdr }) => ({ userRdr })
)(Results)
