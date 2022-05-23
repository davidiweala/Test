<template>
  <div class="container flights-results">
    <div :class="`${miniFlights}`">
    <div class="section section-mini">
      <MiniFlightsBooking />
    </div>
    </div>

    <div class="section flex">
    <div class="filters">
         <FlightFilter />
    </div>

   <div class="options flex-1 pl-5">
       <div v-for="(flight, index) in flightList" :key="flight.id">
       <template v-if="index < 10">  <FlightOption :flight="flight"  /> </template> 
       </div>
   </div>

   </div>
   
    
  
        <Footer/>

   
  </div>
</template>

<script>

export default{
  components: {},


 
  data(){
    return{
        
    }},
    computed: {
            flightList(){
                return this.$store.getters.getFlightList || null;
            },
            miniFlights(){
              return this.$store.getters.miniFlights ?  'mini-flights compress' : 'mini-flights expand'
            }
    },
    
  
}
</script>