<template>
  <div class="flights-booking">
    <div class="header">Search and Book Affordable Flights</div>
    <div class="options">
      <div>
        <li @click="oneWay()" :class="tripType === 'oneWay' ? 'active' : ''">
          One Way
        </li>
        <li
          @click="roundTrip()"
          :class="tripType === 'roundTrip' ? 'active' : ''"
        >
          Round Trip
        </li>
        <li
          @click="multiTrip()"
          :class="tripType === 'multiTrip' ? 'active' : ''"
        >
          Multi-trip
        </li>
      </div>

      <div class="float-right">
        <li class="traveler traveler-dd">
          {{ traveler }} {{traveler > 1 ? 'Travelers' : 'Traveler' }}
          <font-awesome-icon
            class="fa-xs traveler-dd ml-1.5"
            :icon="
              activateTraveler
                ? 'fa-chevron-up fa-solid'
                : 'fa-chevron-down fa-solid'
            "
          />
          <div
            v-click-outside="travelerDropdown"
            class="as"
            v-show="activateTraveler"
          >
            <ul class="grid grid-cols-2">
              <li class="py-2">
                <div>Adults</div>
              </li>
              <li>
                <div class="">
                  <button
                    class="adultButton mr-2"
                    :disabled="adults == 0 || traveler == 1"
                    @click.stop="adults -= 1"
                  >
                    <FontAwesomeIcon icon="fa-solid fa-minus" />
                  </button>
                  {{ adults }}
                  <button
                    class="adultButton ml-2"
                    :disabled="traveler > 8"
                    @click.stop="adults += 1"
                  >
                    <FontAwesomeIcon icon="fa-solid fa-plus" />
                  </button>
                </div>
              </li>

              <li class="py-2">
                <div>Children</div>
              </li>
              <li>
                <div>
                  <button
                    class="adultButton mr-2"
                    @click.stop="children -= 1"
                    :disabled="children == 0 || traveler == 1"
                  >
                    <FontAwesomeIcon icon="fa-solid fa-minus" />
                  </button>
                  {{ children }}
                  <button
                    class="adultButton ml-2"
                    @click.stop="children += 1"
                    :disabled="traveler > 8"
                  >
                    <FontAwesomeIcon icon="fa-solid fa-plus" />
                  </button>
                </div>
              </li>

              <li class="py-2">
                <div>Infants</div>
              </li>
              <li>
                <div class="">
                  <button
                    class="adultButton mr-2"
                    :disabled="infants == 0 || traveler == 1"
                    @click.stop="infants -= 1"
                  >
                    <FontAwesomeIcon icon="fa-solid fa-minus" />
                  </button>
                  {{ infants }}
                  <button
                    class="adultButton ml-2"
                    :disabled="traveler > 8"
                    @click.stop="infants += 1"
                  >
                    <FontAwesomeIcon icon="fa-solid fa-plus" />
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </li>

        <li class="economy economy-dd">
          {{ticketType}}
          <font-awesome-icon
            class="fa-xs economy-dd ml-1.5"
            :icon="
              activateEconomy
                ? 'fa-chevron-up fa-solid'
                : 'fa-chevron-down fa-solid'
            "
          />
          <div
            v-click-outside="economyDropdown"
            class="as as-1"
            v-show="activateEconomy"
          >
            <ul class="grid grid-cols-1">
              <li @click="ticketTypeChange('Economy')" class="py-2">
                <div>Economy</div>
              </li>

              <li @click="ticketTypeChange('Premium Economy')" class="py-2">
                <div>Premium Economy</div>
              </li>

              <li @click="ticketTypeChange('Business')" class="py-2">
                <div>Business</div>
              </li>

              <li @click="ticketTypeChange('First Class')" class="py-2">
                <div>First Class</div>
              </li>
            </ul>
          </div>
        </li>
      </div>
    </div>

    <div v-for="(trip,index) in trips" v-bind:key="trip.tripId" class="individual-trip">
   
     <div class="trip-info" v-if="tripType === 'multiTrip'"> <div class="trip-number">Trip {{index + 1}}</div>

      <div class="float-right">      <button
      @click="removeTrip(trip,index)"
        class="removeTripMobile"
    v-if="trips.length > 2 && index > 0 "
      >
   Remove trip
      </button></div> 
      </div>
 <div class="flight-engine"  >
      <div class="f-input">
        <img src="~/assets/svg/location.svg" />
        <input placeholder="From where ?" 
        v-click-outside="departureDropdownToggle"
         @input="searchCity(index)"
          @click="toggleD(index)"
          :class="`d-input-${index}`"
          v-model="selectedCountryDeparture[`${convert(index)}`]" />

        <div :class="`des departing depart-${index}`" v-show="(Object.values(departureDropdown)[index] && selectedCountryDeparture.one)">

          <div v-show="loading" class="grid place-items-center h-full w-full mb-2"> 
          <Loading />
          </div>
          <ul class="grid grid-cols-1">
            <li
              class="py-2"
              v-for="item in selectedCountryDepartureResults"
              :key="item.id"
              @click="selectDeparture(item, index)"
            >
              <div>{{ item.name }}  ({{ item.iataCode }})</div>
            </li>
          </ul>
        </div>
      </div>
      <div class="switch">
        <div class="inner-switch">
          <img src="~/assets/svg/switch.svg" @click="toggleSwitch(index)"/>
        </div>
      </div>
      <div class="f-input">
        <img src="~/assets/svg/location.svg" />

        <input placeholder="To where ?"
         v-click-outside="arrivalDropdownToggle"
    :class="`a-input-${index}`"
         @input="searchCity2(index)"
          @click="toggleA(index)"
          v-model="selectedCountryArrival[`${convert(index)}`]" />
           <div :class="`des arriving arrival-${index}`" v-show="(Object.values(arrivalDropdown)[index] && selectedCountryArrival.one)">
              <div v-show="loading" class="grid place-items-center h-full w-full mb-2"> 
          <Loading />
          </div>
          <ul class="grid grid-cols-1">
            <li
              class="py-2"
              v-for="item in selectedCountryArrivalResults"
              :key="item.id"
              @click="selectArrival(item,index)"
            >
              <div>{{ item.name }} ({{ item.iataCode }})</div>
            </li>
          </ul>
        </div>
      </div>
      <div class="f-input date">
        <img src="~/assets/svg/calender.svg" />
       
        <VueCtkDateTimePicker noClearButton :minDate="checkDate(index)" :maxDate="checkNextDate(index)" format="YYYY-MM-DD" formatted="ll" :range="tripType=== 'roundTrip'" :no-value-to-custom-elem="(tripType === 'roundTrip')"  only-date no-shortcuts no-button :label="tripType=== 'roundTrip'? 'Departing - Returning' : 'Departing'"	auto-close v-model="date[`${convert(index)}`]" />
     
      </div>
      <button class="search" @click="findFlights" v-if="trips.indexOf(trip) + 1 === 1">
        <img src="~/assets/svg/search.svg" />
      </button>
      <button
        @click="removeTrip(trip,index)"
        class="search"
        v-if="
          (trips.indexOf(trip) + 1 > 1 &&
            trips.indexOf(trip) + 1 < tripsLength) ||
          trips.indexOf(trip) + 1 === 5
        "
      >
        <img src="~/assets/svg/minus.svg" />
      </button>
      <button
        @click="addTrip"
        class="search"
        v-if="
          trips.indexOf(trip) + 1 === tripsLength &&
          trips.indexOf(trip) + 1 > 1 &&
          trips.indexOf(trip) + 1 < 5
        "
      >
        <img src="~/assets/svg/plus.svg" />
      </button>
    </div>
    </div>
      <button
      @click="addTrip"
        class="addTripMobile"
    v-if="trips.length < 5 && tripType === 'multiTrip'"
      >
   + Add a trip
      </button>

     <button
        @click="findFlights"
        class="searchMobile"
      >
     Search
      </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      multi: false,
      tripType: "oneWay",
      trips: [{ tripId: this.uuid() }],
      adults: 1,
      children: 0,
      infants: 0,
      activateTraveler: false,
      activateEconomy: false,
      ticketType: 'Economy',
      date: {
        one: null,
        two: null,
        three: null,
        four: null,
        five: null
      },
      activateDeparture: false,
      activateArrival: false,
      selectedCountryDeparture:  { one: null,
        two:  null,
        three: null,
        four: null,
        five: null},
      selectedCountryArrival:  { one: null,
        two:  null,
        three: null,
        four: null,
        five: null},
      selectedCountryDepartureIATA:  { one: null,
        two:  null,
        three: null,
        four: null,
        five: null},
      selectedCountryArrivalIATA:  { one: null,
        two:  null,
        three: null,
        four: null,
        five: null},
      arrivalDropdown: {
        one: false,
        two: false,
        three: false,
        four: false,
        five: false,
      },
      departureDropdown: {
        one: false,
        two: false,
        three: false,
        four: false,
        five: false,
      },
      loading: false,
      info2: '',
      workindex: null
     
    };
  },
  computed: {
    tripsLength() {
      return this.trips.length;
    },
    traveler() {
      return this.adults + this.children + this.infants;
    },
 /*   yesterdayDate(){
        var date = new Date();

    var dateString = new Date(date.getTime() - (date.getTimezoneOffset() * 60000 ))
                    .toISOString()
                    .split("T")[0];
    
    return  dateString
    }, */
    selectedCountryDepartureResults() {
      let dResults = this.$store.getters.dataCitySearch;
     
      return this.$store.getters.dataCitySearch;
    },
    selectedCountryArrivalResults() {
      return this.$store.getters.dataCitySearchArrival;
    },
    selectedDateDeparture() {
      if(!(this.tripType === 'roundTrip'))
      {
      return this.date.one
    }
    else{
        return this.date.one['start']
    }
  }, selectedDateArrival() {
      if(!(this.tripType === 'roundTrip'))
      {
      return null
    }
    else{
      return this.date.one['end']
    }
  },
  },
  methods: {
    addTrip() {
      let tripIds = this.uuid();
      if (this.trips.length < 5) {
          let keys = Object.keys(this.selectedCountryDeparture);
      this.selectedCountryDeparture[`${keys[this.trips.length]}`] = this.selectedCountryArrival[`${keys[this.trips.length-1]}`]
      this.selectedCountryDepartureIATA[`${keys[this.trips.length]}`] = this.selectedCountryArrivalIATA[`${keys[this.trips.length-1]}`]
        this.trips.push({ tripId: tripIds });
    
      } else {
      }
    },
    removeTrip(trip, a) {
      let keys = Object.keys(this.date);
      for(let check = a; check < keys.length; check++){
      this.date[`${keys[check]}`] =  this.date[`${keys[check+1]}`]
      this.selectedCountryDeparture[`${keys[check]}`] = this.selectedCountryDeparture[`${keys[check+1]}`]
      this.selectedCountryArrival[`${keys[check]}`] = this.selectedCountryArrival[`${keys[check+1]}`]
      this.selectedCountryDepartureIATA[`${keys[check]}`] = this.selectedCountryDepartureIATA[`${keys[check+1]}`]
      this.selectedCountryArrivalIATA[`${keys[check]}`] = this.selectedCountryArrivalIATA[`${keys[check+1]}`]
      }
      const index = this.trips.indexOf(trip);
      if (index > -1) {
        this.trips.splice(index, 1);
      }
    },
    oneWay() {
       this.date.one = null;
      this.tripType = "oneWay";
      this.trips = [{ tripId: this.uuid() }];
    },
    toggleD(index){
     let keys = Object.keys(this.departureDropdown);
     this.departureDropdown[keys[index]] =  !(Object.values(this.departureDropdown)[index])
    },
    toggleA(index){
     let keys = Object.keys(this.arrivalDropdown);
     this.arrivalDropdown[keys[index]] =  !(Object.values(this.arrivalDropdown)[index])
    },
    convert(number){
      let mappedNumbers = ['one','two','three','four','five']
      return mappedNumbers[number]
    },
    checkDate(index){
         var date = new Date();

    var dateString = new Date(date.getTime() - (date.getTimezoneOffset() * 60000 ))
                    .toISOString()
                    .split("T")[0];
    
        if(index > 0)
    {

       for (let a = index; a > 0; a--){
        if (Object.values(this.date)[a-1]){
            return Object.values(this.date)[a-1]
        }
    }
    }
    return  dateString
    },
      checkNextDate(index){
    
        if(index < 4)
    {
      for (let a = index; a < 4; a++){
        if (Object.values(this.date)[a+1]){
            return Object.values(this.date)[a+1]
        }
    
      }
       
    }

    return  null
    },
    roundTrip() {
      this.date.one = {'start': null, 'end': null};
      this.tripType = "roundTrip";
      this.trips = [{ tripId: this.uuid() }];
    },
    multiTrip() {

       Object.keys(this.date).forEach(key => {
  this.date[key] = null;
    }); 

      this.tripType = "multiTrip";
       
      this.trips = [{ tripId: this.uuid() }, { tripId: this.uuid() }];
          let keys = Object.keys(this.selectedCountryDeparture);
          
      this.selectedCountryDeparture[`${keys[this.trips.length-1]}`] = this.selectedCountryArrival[`${keys[this.trips.length-2]}`]
      this.selectedCountryDepartureIATA[`${keys[this.trips.length-1]}`] = this.selectedCountryArrivalIATA[`${keys[this.trips.length-2]}`]
    
      
    },
    toggleActivateTraveler(activateTraveler) {
      this.activateTraveler = !activateTraveler;
    },
    toggleActivateEconomy(activateEconomy) {
      this.activateEconomy = !activateEconomy;
    },
    uuid() {
      return Math.random().toString(16).slice(2);
    },
    travelerDropdown() {
      if (
        this.activateTraveler === false &&
        !event.target.classList.contains("traveler-dd")
      ) {
      } else {
        this.toggleActivateTraveler(this.activateTraveler);
      }
    },
    economyDropdown() {
      if (
        this.activateEconomy === false &&
        !event.target.classList.contains("economy-dd")
      ) {
      } else {
        this.toggleActivateEconomy(this.activateEconomy);
      }
    },
    ticketTypeChange(ticket){
      this.ticketType = ticket;
      this.activateEconomy = false;
    },
    departureDropdownToggle(el){

    let index = Object.keys(this.departureDropdown).length;
    for(let v = 0; v < index; v++){

        if((!el.target.classList.contains(`depart-${v}`)) && (!el.target.classList.contains(`d-input-${v}`)))
      {
      let keys = Object.keys(this.departureDropdown)
          this.departureDropdown[keys[v]] =  false
      }
    }
    },
     arrivalDropdownToggle(el){
        let index = Object.keys(this.arrivalDropdown).length;
    for(let v = 0; v < index; v++){

        if((!el.target.classList.contains(`arrival-${v}`)) && (!el.target.classList.contains(`a-input-${v}`)))
      {
      let keys = Object.keys(this.arrivalDropdown)
          this.arrivalDropdown[keys[v]] =  false
      }
    }
    },
     /*  arrivalDropdownToggle(el){
        
           if((!el.target.classList.contains('arriving')) ){
              console.log(this.arrivalDropdown[index]);
            this.arrivalDropdown[index] = false;
            } 
    },*/
    toggleSwitch(index){
       let depart = Object.keys(this.selectedCountryDeparture)
       let arrival = Object.keys(this.selectedCountryArrival)
         
      let switchStore =   this.selectedCountryArrival[arrival[index]];

       this.selectedCountryArrival[arrival[index]] =   this.selectedCountryDeparture[depart[index]];

     this.selectedCountryDeparture[depart[index]] = switchStore;
      
    },
    selectDeparture(item, index) {
   let depart = Object.keys(this.selectedCountryDeparture)

   this.selectedCountryDeparture[depart[index]] = `${item.name}  (${item.iataCode})`;

   this.selectedCountryDepartureIATA[depart[index]] =  item.iataCode;
  this.departureDropdown[depart[index]] = false;
  
 
    },
    selectArrival(item,index) {
     let arrival = Object.keys(this.selectedCountryArrival)

   this.selectedCountryArrival[arrival[index]] = `${item.name}  (${item.iataCode})`;

   this.selectedCountryArrivalIATA[arrival[index]] =  item.iataCode;
  this.arrivalDropdown[arrival[index]] = false;
    },
    searchCity(index) {
     
      this.loading = true;
        let depart = Object.keys(this.selectedCountryDeparture)
      var urlSend = "keyword=" + this.selectedCountryDeparture[depart[index]];

      async function postUrlEncoded() {
        const response = await fetch(
          "http://localhost:2800/citySearch?" + urlSend,
          {
            method: "GET", 
            mode: "cors", 
            cache: "no-cache", 
            credentials: "same-origin", 
            headers: {  
              "Content-Type": "application/x-www-form-urlencoded",
            },
            redirect: "follow", 
            referrerPolicy: "no-referrer", 
          }
        );
        return response.json(); 
      }

      postUrlEncoded()
        .then((responseData) => {
          const data = responseData.data || [];
          this.countryList = data;
          this.$store.commit("dataCitySearchMute", data);
        })
        .finally(() => this.loading = false);
    },
    searchCity2(index) {
      this.loading = true;
      let arrival = Object.keys(this.selectedCountryArrival)
      var urlSend = "keyword=" +  this.selectedCountryArrival[arrival[index]];

      async function postUrlEncoded() {
        const response = await fetch(
          "http://localhost:2800/citySearch?" + urlSend,
          {
            method: "GET", 
            mode: "cors", 
            cache: "no-cache", 
            credentials: "same-origin",
            headers: {
           
              "Content-Type": "application/x-www-form-urlencoded",
            },
            redirect: "follow",
            referrerPolicy: "no-referrer", 
        
          }
        );
        return response.json(); 
      }

      postUrlEncoded()
        .then((responseData) => {
          const data = responseData.data || [];
          this.countryList = data;
          this.$store.commit("dataCitySearchArrival", data);
        })
        .finally(() => this.loading = false);
    },

    findFlights(index){
      if (
        (!this.selectedCountryArrival) || (!this.selectedCountryDeparture) ||
        (this.tripType === 'roundTrip' && (!this.selectedCountryDeparture && !this.selectedCountryArrival)) || (!this.selectedCountryDeparture)
      ) {
        this.loading = false;
        alert("Incomplete parameters supplied. Please check your search information.")
        return null;
      }

      this.$store.commit("toggleGeneralLoading", true);

      let dateDeparture = this.selectedDateDeparture
        
      let dateArrival = this.selectedDateArrival
      
      let bodyDate =
        "departure=" +
        dateDeparture +
        "&arrival=" +
        dateArrival +
        "&locationDeparture=" +
        this.selectedCountryDepartureIATA[index] +
        "&locationArrival=" +
        this.selectedCountryArrivalIATA[index];

      window.console.log(bodyDate);

      async function postUrlEncoded() {
        const response = await fetch('http://localhost:2800/' + "date?" + bodyDate, {
          method: "POST",
          mode: "cors", 
          cache: "no-cache",
          credentials: "same-origin", 
          headers: {          
            "Content-Type": "application/x-www-form-urlencoded"
          },
          redirect: "follow", 
          referrerPolicy: "no-referrer", 
          body: bodyDate
        });
        return await response.json();
      }

      postUrlEncoded()
        .then(data => {
          this.info2 = data.data;
              window.console.log(this.info2);
            this.$store.commit("toggleGeneralLoading", false);
          this.$store.commit('setFlightList', this.info2);
          
         this.$router.push({name:'FlightsResults'})
         
            this.$store.commit("toggleGeneralLoading", false);
        })
        .catch(function(error) {
          window.console.error(error);
        });
   
    },
  },
};
</script>

