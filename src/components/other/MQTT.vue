<template>
    <div class="pt-8">

        <form class="w-full max-w-100 mx-auto">
            <div class="flex justify-end">
                <p class="text-2xl text-gray-500">MQTT Configuration</p>
            </div>
            <br>

            <div class="max-w-lg mx-auto">
                <div class="flex flex-wrap">
                    <div class="md:w-1/3">
                        <label for="host"
                               class="block text-indigo-500 font-bold md:text-right mb-1 md:mb-0 pr-4 pt-2">
                            Host
                            <i class="fab fa-connectdevelop text-red-400 pl-2"></i>
                        </label>
                    </div>
                    <div class="md:w-2/3">
                        <input class="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                               id="host" type="text" value="" placeholder="Host">
                    </div>
                </div>
            </div>
            <div class="max-w-lg mx-auto mt-4">
                <div class="flex flex-wrap">
                    <div class="md:w-1/3">
                        <label for="port"
                               class="block text-indigo-500 font-bold md:text-right mb-1 md:mb-0 pr-4 pt-2">
                            Port
                            <i class="fas fa-exchange text-red-400 pl-2"></i>
                        </label>
                    </div>
                    <div class="md:w-2/3">
                        <input class="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                               id="port" type="text" value="" placeholder="Port">
                    </div>
                </div>
            </div>
            <div class="max-w-lg mx-auto mt-4">
                <div class="flex flex-wrap">
                    <div class="md:w-1/3">
                        <label for="client-id"
                               class="block text-indigo-500 font-bold md:text-right mb-1 md:mb-0 pr-4 pt-2">
                            ClientID
                            <i class="fas fa-address-card text-red-400 pl-2"></i>
                        </label>
                    </div>
                    <div class="md:w-2/3">
                        <input class="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                               id="client-id" type="text" value="" placeholder="ClientID">
                    </div>
                </div>
            </div>
            <div class="max-w-lg mx-auto mt-4">
                <div class="flex flex-wrap">
                    <div class="md:w-1/3">
                        <label for="username"
                               class="block text-indigo-500 font-bold md:text-right mb-1 md:mb-0 pr-4 pt-2">
                            Username
                            <i class="fas fa-user text-red-400 pl-2"></i>
                        </label>
                    </div>
                    <div class="md:w-2/3">
                        <input class="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                               id="username" type="text" value="" placeholder="Username">
                    </div>
                </div>
            </div>
            <div class="max-w-lg mx-auto mt-4">
                <div class="flex flex-wrap">
                    <div class="md:w-1/3">
                        <label for="password"
                               class="block text-indigo-500 font-bold md:text-right mb-1 md:mb-0 pr-4 pt-2">
                            Password
                            <i class="fas fa-key text-red-400 pl-2"></i>
                        </label>
                    </div>
                    <div class="md:w-2/3">
                        <input class="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                               id="password" type="password" value="" placeholder="Password">
                    </div>
                </div>
            </div>
            <div class="max-w-lg mx-auto mt-4">
                <div class="flex flex-wrap">
                    <div class="md:w-1/3">
                        <label for="prefix"
                               class="block text-indigo-500 font-bold md:text-right mb-1 md:mb-0 pr-4 pt-2">
                            Prefix
                            <i class="fab fa-autoprefixer text-red-400 pl-2"></i>
                        </label>
                    </div>
                    <div class="md:w-2/3">
                        <input class="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                               id="prefix" type="text" value="" placeholder="Prefix">
                    </div>
                </div>
            </div>
            <div class="max-w-lg mx-auto mt-4">
                <div class="flex flex-wrap">
                    <div class="md:w-1/3">
                        <label for="device-name"
                               class="block text-indigo-500 font-bold md:text-right mb-1 md:mb-0 pr-4 pt-2">
                            Device Name
                            <i class="fas fa-id-card text-red-400 pl-2"></i>
                        </label>
                    </div>
                    <div class="md:w-2/3">
                        <input class="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                               id="device-name" type="text" value="" placeholder="Device Name">
                    </div>
                </div>
            </div>
            <div class="max-w-lg mx-auto mt-4">
                <div class="flex flex-wrap">
                    <div class="md:w-1/3">
                        <label for="publish-every-second"
                               class="block text-indigo-500 font-bold md:text-right mb-1 md:mb-0 pr-4 pt-2">
                            Publish Every Second
                            <i class="fas fa-hourglass-half text-red-400 pl-2"></i>
                        </label>
                    </div>
                    <div class="md:w-2/3">
                        <input class="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                               id="publish-every-second" type="number" min="1" value="1" placeholder="Publish Every Second">
                    </div>
                </div>
            </div>

            <div class="max-w-lg mx-auto mt-4">
                <div class="flex flex-wrap">
                    <div class="md:w-1/3">
                    </div>
                    <div class="md:w-2/3">
                        <div class="flex">
                            <button class="mr-1 w-full shadow bg-green-500 hover:bg-green-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                                    type="button">
                                Save
                            </button>
                            <button class="ml-1 w-full shadow bg-red-500 hover:bg-red-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                                    type="button">
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </form>

    </div>
</template>

<script>
  export default {
    name: 'MQTT',
  }
</script>
