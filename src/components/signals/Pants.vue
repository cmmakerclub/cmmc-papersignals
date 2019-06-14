<template>
    <div>
        <div class="flex mb-1 mx-auto">
            <div class="w-full text-center">
                <Microphone :on-listen="onListen" :command="command"/>
            </div>
        </div>
        <div class="flex mb-4">
            <div class="w-1/1 text-center">
                <img src="../../assets/pants.jpg">
            </div>
        </div>
    </div>
</template>

<script>

  import Microphone from './Microphone'

  export default {
    name: 'Pants',
    components: { Microphone },
    data: function () {
      return {
        text: '',
        command: {
          topic: 'pants/$/command',
          start: 'ON',
          stop: 'OFF',
        },
      }
    },
    methods: {
      onListen: function (message) {
        this.text = message
        if (this.text === 'ขายาว') {
          this.$microgear.microgear.chat('pants/$/command', 'ON')
        } else if (this.text === 'ขาสั้น') {
          this.$microgear.microgear.chat('pants/$/command', 'OFF')
        }
      },
    },
    mounted () {
    },
    watch: {
      //$route (to, from) { },
    },
  }
</script>
