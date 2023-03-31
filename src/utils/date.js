const moment = require('moment')
const { TZ } = require('../config/app')

const DATE_FORMAT_INDO = 'DD MMM YYYY, H:mm:ss'
const LOG_FORMAT = 'DD-MM-YYYY'

exports.fullDateFormatIndo = (date, format = DATE_FORMAT_INDO) => {
  const dateManipualte = moment(new Date(date).getTime()).format(
    format
  )
  const getNameDay = moment(date).locale('id').format('dddd')

  return `${getNameDay}, ${dateManipualte}`
}
exports.nowWithUtc = (date = Date.now(), formatDate = LOG_FORMAT) => {
  const format = moment(new Date(date).getTime()).utc(TZ).format(formatDate)
  return format
}

exports.todayFormat = (format, date = new Date().toISOString()) => {
  const newDate = moment(new Date(date)).format(format)
  return newDate
}
