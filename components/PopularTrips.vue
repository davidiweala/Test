<template>
  <div class="popular-trip">
   
   <div class="location-image">
    <vue-content-loading :speed="3"  v-if="loading" :height="500">
      <rect x="0" y="0" width="100%" height="100%" />  
    </vue-content-loading>
    <template v-else>
      <img class="location-image" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" />
    </template>
</div>

    <div class="info">
      <h3 class="title">London</h3>
      <p class="date">Mar 26, 2022 - Apr 10, 2022</p>
      <div class="flex">
        <img class="airline self-center" src="images/airlines/turkish.png" />
        <p class="additional-info">1 stop. 9 Hours</p>
      </div>
      <p class="price">₦231,543</p>
      <p class="clear"></p>
    </div>
  </div>
</template>

<script>

   import { VueContentLoading } from 'vue-content-loading';

export default {
  data() {
    return {
      loading: true
    };
  },
  components:
  {
    VueContentLoading,
  }
};
</script>

