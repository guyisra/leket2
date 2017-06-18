import _ from 'lodash'

const translation = require('./translations/he.yml')

export const t = key => _.get(translation, key)
