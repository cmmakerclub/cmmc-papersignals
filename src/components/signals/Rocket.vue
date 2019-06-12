<template>
    <div>
        <ul class="flex border-b">
            <Microphone/>
        </ul>

    </div>
</template>

<script>

  import Microphone from './Microphone'

  export default {
    name: 'Rocket',
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
