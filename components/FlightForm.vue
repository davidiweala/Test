<template>
  <div class="container flight-form">
    <!-- flight form -->
    <form @submit.prevent="makePayment">
      <div class="form-section">
        <div class="form-row">
          <!-- <label for="title">Title</label> -->
          <select class="title" id="title" required>
            <option value="mr">Mr</option>
            <option value="mrs">Mrs</option>
          </select>

          <input type="text" placeholder="First Name" required />
        </div>

        <div class="form-row">
          <input type="text" placeholder="Last Name" required />
          <input type="text" placeholder="Middle Name" />
        </div>

        <div class="form-row">
          <input type="email" v-model="email" placeholder="Email" required />
          <input type="text" placeholder="Phone" required />
        </div>

        <div class="form-row">
          <input type="text" placeholder="Date of birth" required />

          <select class="gender" id="gender" required>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>

          <select class="nationality" id="nationality" required>
            <option value="">Nationality</option>
            <option value="Nigeria">Nigeria</option>
            <option value="Ghana">Ghana</option>
          </select>
        </div>

        <div class="form-row">
          <input type="text" placeholder="Passport Number" required />
          <input type="text" placeholder="Passport Expiry Date" required />

          <select
            class="passport-issuing-authority"
            id="passport-issuing-authority"
            required
          >
            <option value="">Passport Issuing Authority</option>
            <option value="Nigeria">Nigeria</option>
            <option value="Ghana">Ghana</option>
          </select>
        </div>

        <input type="submit" class="submit" value="Make Payment" />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    flight: Object,
    required: true,
  },
  data() {
    return {
      email: "",
    };
  },
  methods: {
    makePayment() {
      this.$store.commit("setEmail", this.email);
      this.$paystack.payWithPaystack(
        this.email,
        this.$store.getters.getFlightPrice
      );
    },
  },
};
</script>

