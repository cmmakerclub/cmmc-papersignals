<template>
    <nav class="flex items-center justify-between flex-wrap bg-indigo-500 p-6">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
            <svg class="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54"
                 xmlns="http://www.w3.org/2000/svg">
                <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/>
            </svg>
            <span class="font-semibold text-xl tracking-tight">CMMC Paper Signals</span>
        </div>
        <div class="block lg:hidden">
            <button class="flex items-center px-3 py-2 border rounded text-white border-teal-400 hover:text-red-300 hover:border-white">
                <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>
                    Menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                </svg>
            </button>
        </div>
        <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div class="text-sm lg:flex-grow">
                <router-link class="block mt-4 lg:inline-block lg:mt-0 text-white font-bold hover:text-red-300 mr-4"
                             to="/rocket" exact-active-class="text-red-300">
                    <i class="fas fa-wifi"></i>
                    Rocket
                </router-link>

                <router-link
                        to="/stretch"
                        class="block mt-4 lg:inline-block lg:mt-0 text-white font-bold hover:text-red-300 mr-4"
                        exact-active-class="text-red-300">
                    <i class="fas fa-cog"></i>
                    Stretch
                </router-link>

                <a href="#arrow"
                   to="/arrow"
                   class="block mt-4 lg:inline-block lg:mt-0 text-white font-bold hover:text-red-300 mr-4">
                    <i class="fas fa-code-merge"></i>
                    Arrow
                </a>
                <a href="#pants"
                   to="/pants"
                   class="block mt-4 lg:inline-block lg:mt-0 text-white font-bold hover:text-red-300 mr-4">
                    <i class="fas fa-cloud-upload-alt"></i>
                    Pants
                </a>
                <a href="#countdown"
                   to="/count"
                   class="block mt-4 lg:inline-block lg:mt-0 text-white font-bold hover:text-red-300 mr-4">
                    <i class="fas fa-bed"></i>
                    Countdown
                </a>
            </div>
        </div>
    </nav>
</template>

<script>
  export default {
    name: 'Navbar',
    mounted () {

    },
    watch: {
      $route (to, from) {
        // console.log(to)
        // if (to.path === '/wifi/sta') {
        //   this.isTabToggle = false
        // } else {
        //   this.isTabToggle = true
        // }
      },
    },
  }
</script>
