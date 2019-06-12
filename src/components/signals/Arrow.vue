<template>
    <div>
        <div class="flex mb-1 mx-auto">
            <div class="w-full text-center">
                <Microphone :on-listen="onListen"/>
            </div>
        </div>
        <div class="flex mb-4">
            <div class="w-1/1 text-center">
                <img src="../../assets/arrow.jpg">
            </div>
        </div>
    </div>
</template>

<script>

  import Microphone from './Microphone'

  export default {
    name: 'Arrow',
    components: { Microphone },
    data: function () {
      return {
        text: '',
      }
    },
    methods: {
      onListen: function (message) {
        this.text = message
        if (this.text === 'หมุนขึ้น') {
          this.$microgear.microgear.chat('arrow/$/command', 'ON')
        } else if (this.text === 'หมุนลง') {
          this.$microgear.microgear.chat('arrow/$/command', 'OFF')
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
