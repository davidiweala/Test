<template>
  <div class="mobileNav">
    <div class="items">
      <ul>
        <li><SelectCurrency /></li>
        <li><SelectLanguage /></li>
        <li>Host</li>
        <li><img width="20px" src="~/assets/svg/help.svg" /> </li>
        <li><nuxt-link :to="{ name: 'SignIn' }">Log in</nuxt-link></li>
        <li class="sign-up"><nuxt-link :to="{ name: 'SignUp' }">Sign Up</nuxt-link></li>
      </ul>

        <div class="mobile-hamburger" @click="mobileMenu">
       <FontAwesomeIcon  class="fa-xl" icon="fa-solid fa-close" />
       
        </div>

    </div>

  </div>
</template>

<script>
export default {
 methods:{
   mobileMenu(){
            this.$store.dispatch('setMobileMenu', false)
   }
 }

  
}
</script>
