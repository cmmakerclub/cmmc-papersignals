<template>
    <div>
        <ul class="flex border-b">
            <div>
                {{ text }}
            </div>
            <div>
                <Microphone :on-listen="onListen"/>
            </div>
        </ul>

    </div>
</template>

<script>

  import Microphone from './Microphone'

  export default {
    name: 'Rocket',
    components: { Microphone },
    data: function () {
      return { text: '' }
    },
    methods: {
      onListen: function (message) {
        this.text = message
        this.$microgear.microgear.chat('rocket/$/command', message)
        this.$microgear.microgear.chat('rocket/$/command', message)
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
