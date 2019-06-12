<template>
    <div>
        <div class="flex mb-1 mx-auto">
            <div class="w-full text-center">
                <Microphone on-listen="onListen"/>
            </div>
        </div>
        <div class="flex mb-4">
            <div class="w-1/1 text-center">
                <img src="../../assets/countdown.jpg">
            </div>
        </div>
    </div>
</template>

<script>
  import Microphone from './Microphone'

  export default {
    name: 'Countdown',
    components: { Microphone },
    data: function () {
      return {}
    },
    methods: {
      onListen: function (message) {
        this.$microgear.microgear.chat('pants/$/command', message)
        this.$microgear.microgear.chat('pants/$/command', message)
      },
    },
    mounted () {
    },
    watch: {
      $route (to, from) {
      },
    },
  }
</script>
