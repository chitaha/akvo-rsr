import React from 'react'
import { FormSpy } from 'react-final-form'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { cloneDeep, isEmpty } from 'lodash'
import {diff} from 'deep-object-diff'
import * as actions from '../modules/editor/actions'
import fieldSets from '../modules/editor/field-sets'

const debounce = 1000

const customDiff = (oldObj, newObj) => {
  const difference = diff(oldObj, newObj)
  // override deep diff to take the entire updated array
  Object.keys(difference).forEach((key) => {
    if(typeof difference[key] === 'object'){
      difference[key] = newObj[key]
    }
  })
  return difference
}

const getRootValues = (values, sectionKey) => {
  const ret = {...values}
  if(fieldSets.hasOwnProperty(sectionKey)){
    fieldSets[sectionKey].forEach(set => {
      delete ret[set]
    })
  }
  return ret
}

class AutoSave extends React.Component {
  componentWillMount(){
    const { setName, sectionIndex } = this.props
    if(setName !== undefined){
      this.lastSavedValues = cloneDeep(this.props.values[setName])
    } else {
      this.lastSavedValues = getRootValues(this.props.values, `section${sectionIndex}`)
    }
  }
  componentWillReceiveProps() {
    if (this.timeout) {
      clearTimeout(this.timeout)
    }
    this.timeout = setTimeout(this.save, debounce)
  }

  save = () => {
    const { values, setName, itemIndex, sectionIndex } = this.props

    if(setName !== undefined && itemIndex !== undefined){
      // if item was added or removed, it is handled from <ItemsArray>
      if(this.lastSavedValues.length !== values[setName].length){
        return
      }
      const difference = customDiff(this.lastSavedValues[itemIndex], values[setName][itemIndex])
      if(!isEmpty(difference)){
        this.props.editSetItem(sectionIndex, setName, itemIndex, difference)
        this.lastSavedValues[itemIndex] = {
          ...this.lastSavedValues[itemIndex],
          ...difference
        }
      }
    } else {
      const rootValues = getRootValues(values, `section${sectionIndex}`)
      const difference = diff(this.lastSavedValues, rootValues)
      if(!isEmpty(difference)){
        this.props.saveFields(difference, sectionIndex)
        this.lastSavedValues = {
          ...this.lastSavedValues,
          difference
        }
      }
    }
  }

  render() {
    return null
  }
}
AutoSave.propTypes = {
  itemIndex: PropTypes.number,
  setName: PropTypes.string,
  sectionIndex: PropTypes.number
}

export default props => (
  <FormSpy {...props} subscription={{ values: true }} component={connect(null, actions)(AutoSave)} />
)