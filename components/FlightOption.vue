<template>
  <div class="container flight-option">
      <div class="flight-top-button">
          <a href="http://" class="top-button">Economy</a>
      </div>
    <div class="flight-row">
        <div class="airline">
            <img class="airline self-center" src="images/airlines/turkish.png" />
        </div>

        <div class="flight-info">
            <h5>Tramango Airlines</h5>
            <h5>FE504</h5>
        </div>
        <div class="flight-info">
            <h5></h5>
            <h5>
               
            </h5>
        </div>
        <div class="flight-info center">
            <h5>22h 05min</h5>
            <hr>
            <h5>Stopover: 45 mins</h5>
        </div>
        <div class="flight-info">
            <h5>13:40</h5>
            <h5>DXB Dubai</h5>
        </div>
        <div class="flight-info">
            <h5>NGN70,000</h5>
            <h5>Per Traveller</h5>
        </div>

    </div>

    <div class="flight-button">
        <div class="weight">
            <FontAwesomeIcon class="fa-xs" icon="fa-solid fa-cart-flatbed" />
            <h5>2x23kg</h5>
            </div>
        <a href="http://" class="bottom-button">Book</a>
    </div>
    {{flight}}
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  props:
  {
      flight: Object,
      required: true,
  }
    ,
    mounted(){
        window.console.log(this.flight);
    }
};
</script>
