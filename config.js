'use strict'

const config = {
  timestamp: TIMESTAMP,
  commithash: 'unknown',
  scheduleUrl: 'https://fosdem.loomchild.net/2018/schedule/xml',
  roomStateUrl: 'https://fosdem.loomchild.net/listrooms'
}

module.exports = Object.assign(config, process.env.NODE_ENV === 'production'
  ? require('./config.prod.js')
  : require('./config.dev.js'))
