let CMMC_MicroGear = {}

let microgear = window.Microgear.create({
  key: '301bT7j6D1lkIq9',
  secret: 'QWhZCzsre0ggXdtuH7Jy0xU8w',
})

microgear.on('message', (topic, msg) => {
  console.log(`on_message arrived`, topic, msg)
})
microgear.on('connected', () => {
  //microgear.setAlias(ALIAS);
  console.log(`on_connected to netpie.`)
})
microgear.on('present', event => {
  console.log(`on_present`, event)
})
microgear.on('absent', event => {
  console.log(`on_absent`, event)
})

CMMC_MicroGear = Object.assign({}, microgear)

export default CMMC_MicroGear
