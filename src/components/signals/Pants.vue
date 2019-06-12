<template>
    <div>
        <ul class="flex border-b">
            <li class="-mb-px mr-1">
                <span>hello Pants</span>
            </li>
        </ul>
    </div>
</template>

<script>

  export default {
    name: 'WiFiConfig',
    components: {},
    data: function () {
      return {
        isTabToggle: this.$store.state.tabs.wifi.isTabToggle,
      }
    },
    methods: {
      tabToggle: function () {
        this.isTabToggle = !this.isTabToggle
        this.$store.dispatch('switchWiFiTabs', this.isTabToggle)
      },
    },
    mounted () {
      if (this.$route.path == '/signals/sta') {
        this.isTabToggle = false
      }
    },
    watch: {
      $route (to, from) {
        if (to.path === '/signals/sta') {
          this.isTabToggle = false
        } else {
          this.isTabToggle = true
        }
      },
    },
  }
</script>
