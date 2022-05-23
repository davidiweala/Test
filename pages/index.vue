<template>
  <div class="container index">
    <div class="section">
      <FlightsBooking />
    </div>
    <div class="section">
      <h3 class="section-title">Popular Trips</h3>
      <p class="section-subheading">Affordable flights from Lagos</p>

      <div class="popular-trips flex">
        <v-skeleton-loader  loading="true" type="table"></v-skeleton-loader>
        <PopularTrips />

        <PopularTrips />
        <PopularTrips />
        <PopularTrips />
      </div>
    </div>

    <div class="section">
  <nuxt-link :to="{ name: 'FlightsResults' }">    <img class="advert" src="images/advert.png" /> </nuxt-link>
    </div>

    <div class="section">
      <PopularLinks />
    </div>

    <div class="section">
      <SubscribeSection />
    </div>

    <div class="section">
    <Affiliations/>
    </div>
    
  
        <Footer/>

   
  </div>
</template>

<script>
import Vue from "vue";

export default {
  components: {},
  data(){
    return{
    
    }
  }
}
</script>
