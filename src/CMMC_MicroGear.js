/* eslint-disable no-console */
let CMMC_MicroGear = {}

let state = { msg: 'not connected.' }
let microgear = window.Microgear.create({
  key: 'LoJF2BTyh9acUnd',
  secret: 'mDqWi9zJ34V60wFXxVXx7sbN7',
  alias: 'vueapp',
})

let cb = {}

microgear.on('message', (topic, msg) => {
  console.log(`on_message arrived`, topic, msg)
})

microgear.on('connected', () => {
  console.log(`on_connected to netpie.`)
  state.msg = 'connected.'
  microgear.setAlias('hello-vue1')
  console.log(`subscribed.`)
  let name = 'VueJS'
  microgear.subscribe('/#')
  microgear.publish('/gearname/chat', 'I\'m new#' + name)
  microgear.publish('/chat', 'Hi#' + name)
  //cb['on_connected'].forEach(fn => {
  //  fn()
  //})
})

microgear.on('present', event => {
  console.log(`on_present`, event)
})

microgear.on('closed', function () {
  console.log('closed')
})

microgear.on('error', function (err) {
  console.log('Error: ' + err)
})

microgear.on('disconnect', event => {
  console.log(`disconnect`, event)
})

microgear.on('absent', event => {
  console.log(`on_absent`, event)
})

console.log(`hello vuejs.`)

CMMC_MicroGear = {
  microgear,
  connect: () => {
    //microgear.connect('vuejs')
  },
  register: (event, fn) => {
    if (cb[event]) {
      cb[event].push(fn)
    } else {
      cb[event] = []
      cb[event].push(fn)
    }

  },
}

microgear.useTLS(false)
microgear.connect('papersignal')
console.log(`microgear=`, microgear)

export default CMMC_MicroGear
