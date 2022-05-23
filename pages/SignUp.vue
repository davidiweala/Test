<template>
  <div class="flex flex-col h-screen sign-up">
    <div class="flex flex-1">
      <div class="w-2/5 flex side-image bg-black"></div>
      <div class="flex flex-1 w-3/5 flex-col">
          <div class="return-fromAccount">
        <nuxt-link :to="{ name: 'index' }"> 
     <FontAwesomeIcon class="fa-xl" icon="fa-solid fa-close" />
        </nuxt-link>
     </div>
        <form class="my-20 mx-20">
          <h1 class="font-bold text-4xl">Create Account</h1>
          <p class="mt-2 mb-5">
            Create an account and enjoy amazing travel deals at discounted
            rates.
          </p>
          <SocialSignIn />
          <div class="form-input half-input">
            <div class="one-half"><label>First Name</label> <input /></div>
            <div class="one-half"><label>Last Name</label> <input /></div>
          </div>
          <div class="form-input">
            <label>Email Address</label>
            <input />
          </div>
          <div class="form-input half-input">
            <div class="one-half"><label>Password</label> <input /></div>
            <div class="one-half">
              <label>Confirm Password</label> <input />
            </div>
          </div>
          <div class="content">
            <div class="checkbox">
              <input type="checkbox" />
              <span class="ticker"></span>
              <span class="checktest">
                Please send me
                <span class="orange-link">Tramango.com</span> emails with travel
                deals, special offers & other information
              </span>
            </div>
            <div class="checkbox">
              <input type="checkbox" />
              <span class="ticker"></span>
              <span class="checktest">
                I have read & agreed to the
                <span class="orange-link">terms of use</span> and
                <span class="orange-link">privacy policy</span>.
              </span>
            </div>
          </div>

          <CustomButton text="Create Account" />
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
