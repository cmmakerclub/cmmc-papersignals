<template>
    <div>
        <div class="flex mb-1 mx-auto">
            <div class="w-full text-center">
                <Microphone/>
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
