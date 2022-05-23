<template>
  <div class="container">

    <div class="staging">
      <FlightStage/>
    </div>
      <div class="place">
          <h2>Lagos - Abuja</h2>
      </div>


    <div class="section-result result-row">

        <div class="flight-options">
        <FlightRoute/>
        <FlightForm/>
      </div>

      <div class="details">
        <FlightPay/>
      </div>

    </div>

    <div class="section section-row">
       <div class="check-finish">
            <input type="checkbox" id="confirm" name="confirm" value="yes">
            <label for="confirm" class="confirms">By Proceeding, i acknowledge that i have read & agree to Tramango.com flight booking terms & conditions.</label>
        </div>
        <a href="" class="continue">Continue</a>
    </div>

    
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
.place{
    position: relative;
    width: 100%;
    padding: 25px;
    background: #FFECE2;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
}
.check-finish label{
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 22px;
  color: #424950;
  margin-right: 80px;
}
.continue{
  background: #FF5E0D;
  border-radius: 5px;
  padding: 10px;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #FFFFFF;
  padding-left: 30px;
  padding-right: 30px;
}
.section-row{
  display: flex;
  justify-content: left;
  flex-direction: row;
  width: 30%;
}

.place h2{
    font-family: 'Lato';
    font-style: normal;
    font-weight: 500;
    font-size: 48px;
    line-height: 58px;
    color: #2F2C2C;
}

.flight-options{
  /* margin: 10px 40px; */
  box-sizing: border-box;
  width: 70%;
}
.staging{
  margin-top: -20px;
}




.section {
  margin: 0 auto;
  width: calc(100% - 6rem);
  margin-top: -10px;
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
  .place h2{
    font-size: 23px;
    line-height: 20px;
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
