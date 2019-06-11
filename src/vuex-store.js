const initState = {
  tabs: {
    wifi: {
      isTabToggle: true,
    },
  },
}

const vuexStore = {
  state: initState,
  mutations: {
    switchWiFiTabs (state, data) {
      state.tabs.wifi.isTabToggle = data
    },
  },
  actions: {
    switchWiFiTabs (context, tab) {
      context.commit('switchWiFiTabs', tab)
    },
  },
}

export default vuexStore
