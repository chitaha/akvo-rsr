import * as yup from 'yup'
import { validationType, transformUndefined } from '../../../../utils/validation-utils'

const RSR = yup.object().shape({
  url: yup.string().transform(transformUndefined).required().when('document', {
    is: value => value !== undefined && value !== '',
    then: yup.string().notRequired()
  }),
  title: yup.string().transform(transformUndefined).required(),
  document: yup.string()
})

const DGIS = RSR.clone().shape({
  categories: yup.array().of(yup.object().shape({ category: yup.string() }))
})

const IATI = DGIS.clone().shape({
  documentFormat: yup.string().required(),
  titleLanguage: yup.string(),
  documentLanguage: yup.string(),
  documentDate: yup.string()
})

const EUTF = IATI.clone()

const DFID = IATI.clone()

const NLR = RSR.clone().shape({
  documentLanguage: yup.string(),
  documentDate: yup.string()
})

const Gietrenk = IATI.clone()


const output = {}
output[validationType.RSR] = yup.array().of(RSR)
// output[validationType.IATI_BASIC] = yup.array().of(IATI_BASIC).min(1)
output[validationType.IATI] = yup.array().of(IATI)
output[validationType.DGIS] = yup.array().of(DGIS)
output[validationType.EUTF] = yup.array().of(EUTF)
output[validationType.DFID] = yup.array().of(DFID)
output[validationType.NLR] = yup.array().of(NLR)
output[validationType.Gietrenk] = yup.array().of(Gietrenk)

export default output