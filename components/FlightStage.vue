<template>
  <div class="line">
      <div class="flight-stage">
          <span class="stage">Choose Flight Option</span>
          <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
          <span class="stage active">Travellers Info</span>
          <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
          <span class="stage">Overview and Payment</span>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
*{
    box-sizing: border-box;
}
.line {
  background: #FFFFFF;
/* margin-left: 20px; */
/* background: #FFECE2; */
box-sizing: border-box;
border-radius: 15px;
margin: 10px;
}
.flight-stage{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
.flight-stage span{
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 29px;
    color: #000000;
    margin: 0 50px;
}
.flight-stage span.active{
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 29px;
    color: #FF5E0D;
}

@media (min-width: 768px) {
  
}

@media (max-width: 768px) {

  .flight-stage{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
  }
  .flight-stage span{
    font-style: normal;
    font-weight: 600;
    font-size: 11px;
    line-height: 14px;
    color: #000000;
    margin: 0 10px;
    text-align: center;
 }
 .flight-stage span.active{
    font-style: normal;
    font-weight: 600;
    font-size: 11px;
    line-height: 14px;
    color: #FF5E0D;
}

}


</style>
