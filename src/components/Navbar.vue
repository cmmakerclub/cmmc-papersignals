<template>
    <nav class="hidden flex items-center justify-between flex-wrap bg-indigo-500 p-6">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
            <img src="../assets/logo-green.png" style="width: 60px">
            <span style="width: 4px"></span>
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
                    <i class="fas fa-rocket"></i>
                    Rocket
                </router-link>

                <router-link
                        href="#stretch"
                        to="/stretch"
                        class="block mt-4 lg:inline-block lg:mt-0 text-white font-bold hover:text-red-300 mr-4"
                        exact-active-class="text-red-300">
                    <i class="fas fa-tshirt"></i>
                    Stretch
                </router-link>

                <router-link
                        to="/arrow"
                        class="block mt-4 lg:inline-block lg:mt-0 text-white font-bold hover:text-red-300 mr-4"
                        exact-active-class="text-red-300">
                    <i class="fas fa-arrow-circle-up"></i>
                    Arrow
                </router-link>

                <router-link
                        to="/pants"
                        class="block mt-4 lg:inline-block lg:mt-0 text-white font-bold hover:text-red-300 mr-4"
                        exact-active-class="text-red-300">
                    <i class="fas fa-child"></i>
                    Pants
                </router-link>

                <router-link
                        to="/countdown"
                        class="block mt-4 lg:inline-block lg:mt-0 text-white font-bold hover:text-red-300 mr-4"
                        exact-active-class="text-red-300">
                    <i class="fas fa-clock"></i>
                    Countdown
                </router-link>
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
        // if (to.path === '/signals/sta') {
        //   this.isTabToggle = false
        // } else {
        //   this.isTabToggle = true
        // }
      },
    },
  }
</script>
