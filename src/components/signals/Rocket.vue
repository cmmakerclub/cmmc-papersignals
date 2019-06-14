<template>
    <div>
        <div class="flex mb-1 mx-auto">
            <div class="w-full text-center">
                <Microphone :on-listen="onListen" :command="command"/>
            </div>
        </div>
        <div class="flex mb-4">
            <div class="w-1/1 text-center">
                <img src="../../assets/rocket.jpg">
            </div>
        </div>
    </div>
</template>

<script>

  import Microphone from './Microphone'

  export default {
    name: 'Rocket',
    components: { Microphone },
    data: function () {
      return {
        text: '',
        command: {
          topic: 'rocket/$/command',
          start: 'ON',
          stop: 'OFF',
        },
      }
    },
    methods: {
      onListen: function (message) {
        this.text = message
        if (this.text === 'ปล่อยยาน') {
          this.$microgear.microgear.chat('rocket/$/command', 'ON')
        } else if (this.text === 'ลงจอด') {
          this.$microgear.microgear.chat('rocket/$/command', 'OFF')
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
