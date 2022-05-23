<template>
  <div id="app">
      <div class="load" v-show="isLoading">  <GeneralLoading /> </div>
      <div>
    <NavBar />
    <mobile-sidebar :class="activeMobileSidebar ? 'activeMobileSidebar' : 'notActiveMobileSidebar'" v-click-outside="closeSidebar" />
    <div class="wrapper">
    
      <div class="side"><SideBar /></div>
      <div class="r-view">
        <nuxt />
      </div>
    </div>
  </div>
  </div>
</template>
<script>
import MobileSidebar from "~/components/MobileSidebar.vue";
export default {
  components: { MobileSidebar },
  computed: {
    activeMobileMenu() {
      return this.$store.state.activeMobileMenu;
    },
    activeMobileSidebar() {
      return this.$store.state.activeMobileSidebar;
    },
    isLoading(){
      return this.$store.getters.generalLoading;
    }
  },
  methods: {
    closeSidebar(el){
            if((!el.target.classList.contains('fa-bars') || el.target.classList.contains('mobileLogo') ) ){
            this.$store.commit("setMobileSidebar", false);
            }
    }
  },
};
</script>

