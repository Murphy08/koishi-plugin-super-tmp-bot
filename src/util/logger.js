const { Logger } = require('koishi')

const globalKey = '__superTmpBotLogger'

if (!globalThis[globalKey]) {
  globalThis[globalKey] = new Logger('super-tmp-bot')
}

if (!globalThis.logger) {
  globalThis.logger = globalThis[globalKey]
}

module.exports = globalThis[globalKey]
