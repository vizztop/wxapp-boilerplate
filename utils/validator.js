/**
 * validator校验配置
 * 
 * @date 2020/06/05
 * @author Li Yujie <liyujie@vizz.top>
 */

import schema from 'async-validator'
import utils from './util.js'

const pattern = {
  mobilePhone: /^1[3456789]\d{9}$/
}
const validator = function (rules, data) {
  const validator = new schema(rules)
  const cn = {
    default: 'Validation error on field %s',
    required: '请输入%s',
    enum: '%s must be one of %s',
    whitespace: '%s cannot be empty',
    date: {
      format: '%s date %s is invalid for format %s',
      parse: '%s date could not be parsed, %s is invalid ',
      invalid: '%s date %s is invalid',
    },
    types: {
      string: '%s is not a %s',
      method: '%s is not a %s (function)',
      array: '%s is not an %s',
      object: '%s is not an %s',
      number: '%s is not a %s',
      date: '%s is not a %s',
      boolean: '%s is not a %s',
      integer: '%s is not an %s',
      float: '%s is not a %s',
      regexp: '%s is not a valid %s',
      email: '%s is not a valid %s',
      url: '%s is not a valid %s',
      hex: '%s is not a valid %s',
    },
    string: {
      len: '%s must be exactly %s characters',
      min: '%s must be at least %s characters',
      max: '%s cannot be longer than %s characters',
      range: '%s must be between %s and %s characters',
    },
    number: {
      len: '%s must equal %s',
      min: '%s cannot be less than %s',
      max: '%s cannot be greater than %s',
      range: '%s must be between %s and %s',
    },
    array: {
      len: '%s must be exactly %s in length',
      min: '%s cannot be less than %s in length',
      max: '%s cannot be greater than %s in length',
      range: '%s must be between %s and %s in length',
    },
    pattern: {
      mismatch: (f, n, p) => { return `请输入正确的${f}` },
    }
  }
  validator.messages(cn)
  return new Promise((resolve, reject) => {
    validator.validate(data).then(() => resolve()).catch(({ errors, fields }) => {
      wx.showToast({
        title: errors[0].message,
        icon: 'none'
      });
      // reject({errors, fields})
    })
  })
}
module.exports = { validator, pattern }
