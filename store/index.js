export const state = () => ({
  activeMobileMenu: false,
  activeMobileSidebar: false, //from here
  pricing: "",
  dataCitySearch: [],
  dataCitySearchArrival: [],
  generalLoading: false,
  flightList: null,
  miniFlights: true,
});

export const mutations = {
  setMobileMenu(state, activeMobileMenu) {
    state.activeMobileMenu = activeMobileMenu;
  },
  setMobileSidebar(state, activeMobileSidebar) {
    state.activeMobileSidebar = activeMobileSidebar;
  },
  toggleMiniFlights(state, miniFlights)
  {
    state.miniFlights = miniFlights
  },
   //from here
   change(state, flavor) {
    state.flavor = flavor;
  },
  changePricing(state, pricing) {
    state.pricing = pricing;
  },
  toggleGeneralLoading(state, data)
  {
    state.generalLoading = data
  },
  setFlightList(state, flightList){
    state.flightList = flightList
  },
  dataCitySearchMute(state, dataCitySearch) {
    state.dataCitySearch = dataCitySearch;
  },
  dataCitySearchArrival(state, dataCitySearchArrival) {
    state.dataCitySearchArrival = dataCitySearchArrival;
  },
};

export const actions = {
  setMobileMenu(context, activeMobileMenu) {
    context.commit("setMobileMenu", activeMobileMenu);
  },
  setMobileSidebar(context, activeMobileSidebar) {
    context.commit("setMobileSidebar", activeMobileSidebar);
  },
  toggleGeneralLoading(context, data)
  {
    context.commit('toggleGeneralLoading', data);
  },
  setFlightList(context, flightList){
    context.commit('setFlightList', flightList)
  },
  toggleMiniFlights(context, miniFlights){
    context.commit('toggleMiniFlights', miniFlights)
  },
};

export const getters = {
  getActiveMobileMenu: (state) => {
    return state.activeMobileMenu;
  },
  getActiveMobileSidebar: (state) => {
    return state.activeMobileSidebar;
  },
  dataCitySearch: (state) => {
    return state.dataCitySearch;
  },
  dataCitySearchArrival: (state) => {
    return state.dataCitySearchArrival;
  },
  generalLoading: (state) =>
  {
    return state.generalLoading;
  },
  getFlightList: (state) => {
    return state.flightList
  },
  miniFlights: (state) => {
    return state.miniFlights
  }
};
