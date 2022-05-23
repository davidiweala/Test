<template>
  <div class="sidebar">
    <div class="side-items">
      <ul>
        <li
          @mouseover="svgFlights(1)"
          :class="active === 'flights' ? 'active' : ''"
          @mouseleave="svgFlights(0)"
        >
          <div v-html="require(`~/assets/svg/${svgArray[flights]}.svg?raw`)" />
          Flights
        </li>
        <li @mouseover="stays = 3" @mouseleave="stays = 2">
          <div v-html="require(`~/assets/svg/${svgArray[stays]}.svg?raw`)" />
          Stays
        </li>
        <li @mouseover="visa = 5" @mouseleave="visa = 4">
          <div v-html="require(`~/assets/svg/${svgArray[visa]}.svg?raw`)" />
          Visa
        </li>
        <li @mouseover="aTransfers = 7" @mouseleave="aTransfers = 6">
          <div
            v-html="require(`~/assets/svg/${svgArray[aTransfers]}.svg?raw`)"
          />
          Airport Transfers
        </li>
        <li @mouseover="cRentals = 9" @mouseleave="cRentals = 8">
          <div v-html="require(`~/assets/svg/${svgArray[cRentals]}.svg?raw`)" />
          Car Rentals
        </li>
        <li @mouseover="insurance = 11" @mouseleave="insurance = 10">
          <div
            v-html="require(`~/assets/svg/${svgArray[insurance]}.svg?raw`)"
          />
          Insurance
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      svgArray: [
        "flights",
        "flights-orange",
        "stays",
        "stays-orange",
        "visa",
        "visa-orange",
        "airport-transfers",
        "airport-transfers-orange",
        "car-rental",
        "car-rental-orange",
        "insurance",
        "insurance-orange",
      ],
      flights: 0,
      flight: "flights",
      stays: 2,
      visa: 4,
      aTransfers: 6,
      cRentals: 8,
      insurance: 10,
      active: "flights",
    };
  },
  mounted() {
    this.svgFlights(0);
  },
  methods: {
    svgFlights(a) {
      this.flights = this.active === "flights" ? 1 : a;
    },
  },
};
</script>
