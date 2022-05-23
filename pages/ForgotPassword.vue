<template>
  <div class="flex flex-col h-screen forgot-password">
    <div class="flex flex-1">
      <div class="w-2/5 flex side-image bg-black"></div>
      <div class="flex flex-1 w-3/5 flex-col">
          <div class="return-fromAccount">
        <nuxt-link :to="{ name: 'index' }"> 
     <FontAwesomeIcon class="fa-xl" icon="fa-solid fa-close" />
        </nuxt-link>
     </div>
        <form class="my-20 mx-20">
          <h1 class="font-bold text-4xl">Forgot Password</h1>
          <p class="mt-2 mb-5">
            Welcome back! Sign in with your data that you entered druring
            registration.
          </p>
          <SocialSignIn />

          <div class="form-input">
            <label>Email Address</label>
            <input />
          </div>

          <CustomButton text="Recover Password" />
          <nuxt-link class="forgot-link" :to="{ name: 'SignIn' }"
            >Back to Sign In</nuxt-link
          >
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import SocialSignin from '~/components/SocialSignIn'

export default {
  components: {
    SocialSignin,
  },
  layout: 'fullscreen',
}
</script>
