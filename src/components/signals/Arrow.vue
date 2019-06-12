<template>
    <div>
        <ul class="flex border-b">
            <Microphone/>
        </ul>
    </div>
</template>

<script>
  import Arrow from './Arrow'
  import Microphone from './Microphone'

  export default {
    name: 'Countdown',
    components: { Microphone },
    data: function () {
      return {}
    },
    methods: {},
    mounted () {
    },
    watch: {
      $route (to, from) {
      },
    },
  }
</script>
