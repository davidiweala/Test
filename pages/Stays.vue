<template>
  <div class="container">
    <div class="section">
      <FlightsBooking />
    </div>
    <div class="section">
        <h3 class="section-title">Popular Locations</h3>
      <p class="section-subheading">Find affordable accommodation in these locations</p>

      <div class="popular-trips flex">
        <PopularTrips />
        <PopularTrips />
        <PopularTrips />
        <PopularTrips />
      </div>
    </div>

    <div class="section adverts">
      <img class="advert" src="images/advert.png" />
    </div>

    <div class="section">
      <PopularLinks />
    </div>

    <div class="section subs-section">
      <SubscribeSection />
    </div>

    <div class="section">
      <div class="affliation"></div>
      <div class="media"></div>
    </div>
    <Affiliations/>
    <Footer/>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  components: {},
});
</script>

<style scoped>
.section {
  margin: 0 auto;
  width: calc(100% - 6rem);
  margin-bottom: 60px;
}



.popular-trip {
  @apply mx-3;
}
@media (min-width: 768px) {
  .popular-trip:first-child {
  @apply ml-0;
  }

  .section-title {
  @apply mt-20;
}

.section-subheading {
  @apply mb-10;
}
}

@media (max-width: 768px) {
  .subs-section{
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
  }
  .section-subheading, .section-title {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  
}




.popular-trip:last-child {
  @apply mr-0;
}


.section-title {
  font-size: 33px;
  font-weight: 700;
}

.advert {
  width: 100%;
  border-radius: 6px;
}
</style>
