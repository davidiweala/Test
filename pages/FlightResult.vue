<template>
  <div class="container">

    <div class="section">
      <FlightsBooking />
    </div>

    <div class="section">
        <h3 class="section-title">Flight Result</h3>
    </div>


    <div class="section-result result-row">
      <div class="filter">
        <FlightFilter/>
      </div>
      <div class="flight-options">
        <FlightOption/>
        <FlightOption/>
        <FlightOption/>
        <FlightOption/>
        <FlightForm/>
      </div>

    </div>

    

    
    
    <Footer/>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Affiliations from "~/components/Affiliations.vue";

export default Vue.extend({
  components: {Affiliations},
});
</script>

<style scoped>
.section {
  margin: 0 auto;
  width: calc(100% - 6rem);
  margin-bottom: 60px;
}
.section-result{
  margin: 0 auto;
  width: calc(100% - 1.8rem);
  margin-bottom: 60px;
}

.result-row{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
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

  .popular-trip:last-child {
  @apply mr-0;
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






.section-title {
  font-size: 33px;
  font-weight: 700;
}

.advert {
  width: 100%;
  border-radius: 6px;
}
</style>
