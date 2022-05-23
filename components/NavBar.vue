<template>
  <div class="nav">
    <div class="mobileLogo">
      <FontAwesomeIcon
        class="fa-lg bar"
        @click.stop="toggleMobileSidebar"
        icon="fa-solid fa-bars"
      />
  <nuxt-link :to="{name: 'index'}">  <div class="logo"> <img src="~/assets/logo.svg" width="125px" /></div> </nuxt-link>
    </div>

     <nuxt-link :to="{ name: 'index' }" >   <div class="desktopLogo logo">
   <img src="~/assets/logo.svg" width="125px" /> 
   </div> </nuxt-link>

    <div class="items">
      <ul>
        <li><SelectCurrency /></li>
        <li><SelectLanguage /></li>
        <li>Host</li>
        <li><img width="20px" src="~/assets/svg/help.svg" /></li>
        <li><nuxt-link :to="{ name: 'SignIn' }">Log in</nuxt-link></li>
        <li class="sign-up">
          <nuxt-link :to="{ name: 'SignUp' }">Sign Up</nuxt-link>
        </li>
      </ul>

      <div class="mobile-hamburger">
        <FontAwesomeIcon @click.stop="toggleSettings" class="fa-lg" icon="fa-solid fa-gear" />
     
        <FontAwesomeIcon  class="fa-lg" icon="fa-solid fa-circle-question" />
        <FontAwesomeIcon  @click.stop="toggleProfile" class="fa-lg" icon="fa-solid fa-circle-user" />
      </div>
               <div v-click-outside="toggleSettings"   v-if="settings === 'settings'"  :class="settings">
        <div><SelectCurrency :mobile="true" /></div>
        <div><SelectLanguage :mobile="true" /></div>
      </div>

        <div v-click-outside="toggleProfile"  v-if="profile === 'profile'"  :class="profile">
        <div><ul><nuxt-link :to="{ name: 'SignIn' }"> <li>Log in</li></nuxt-link>
          <nuxt-link :to="{ name: 'SignUp' }"> <li>
       Sign Up
        </li></nuxt-link>  <nuxt-link :to="{ name: 'SignUp' }"> <li>Become a Host</li></nuxt-link>
       </ul></div>
      </div>
    </div>
    
  </div>
</template>

<script>
import SelectCurrency from "./SelectCurrency.vue";
import SelectLanguage from "./SelectLanguage.vue";
export default {
  components: { SelectCurrency, SelectLanguage },
  data() {
    return {
      settings: "settings not-active",
      profile: 'profile not-active'
    };
  },
  computed: {
    mobileSidebarStatus() {
      return this.$store.state.activeMobileSidebar;
    },
  },
  methods: {
    toggleMobileSidebar() {
      this.$store.commit("setMobileSidebar", !this.mobileSidebarStatus);
    },
    toggleSettings(){
     this.profile = 'profile not-active'
      if(this.settings === 'settings not-active'){
      this.settings = 'settings'
      }
      else{
        this.settings = 'settings not-active'
      }
    },
      toggleProfile(){
        this.settings = 'settings not-active'
      if(this.profile === 'profile not-active'){
      this.profile = 'profile'
      }
      else{
        this.profile = 'profile not-active'
      }
    }
  },
};
</script>
