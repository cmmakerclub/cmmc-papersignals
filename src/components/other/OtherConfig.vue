<template>
    <div class="min-h-screen pb-8">
        <ul class="flex border-b">
            <li class="-mb-px mr-1">
                <span class="bg-white inline-block py-2 px-4 text-blue-700 font-semibold border-l border-t border-r rounded-t"
                      style="cursor: pointer">MQTT</span>
            </li>
        </ul>

        <MQTT/>

    </div>
</template>

<script>
  import MQTT from './MQTT'

  export default {
    name: 'OtherConfig',
    components: {
      MQTT,
    },
  }
</script>
