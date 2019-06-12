<template>
    <div>
        <div class="flex mb-1 mx-auto">
            <div class="w-full text-center">
                <Microphone :on-listen="onListen"/>
            </div>
        </div>
        <div class="flex mb-4">
            <div class="w-1/2 text-center">
                <img src="../../assets/logo-green.png">
            </div>
        </div>
    </div>
</template>

<script>
  import Microphone from './Microphone'

  export default {
    name: 'PaperSignal',
    components: { Microphone },
    data: function () {
      return {}
    },
    props: ['on-listen', 'src'],
    methods: {
      onListen: function (message) {
        console.log(`on listen = `, message)
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
