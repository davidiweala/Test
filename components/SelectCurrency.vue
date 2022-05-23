<template>
  <div  :class="mobile===true ? 'isMobile' : ''">
    NGN
    <FontAwesomeIcon class="fa-xs" icon="fa-solid fa-chevron-down" />
  </div>
</template>

<script>
export default {
  props:{
    mobile:{
      type: Boolean,
      required: false,
      default: false
    }
  }

};
</script>

<style scoped>
div {
  font-weight: bold;
  font-size: 13.5px;
}



.isMobile{
   border: 1px solid #ff5e0d;
  padding: 10px 0px ;
  border-radius: 6px;
  text-align: center;
}

.isMobile:hover{
  background-color: #ff5e0d;
  color: #ffffff;
}

.isMobile .svg-inline--fa{
  margin-left: 2px;
}
</style>
