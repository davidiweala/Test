<template>
  <div class="button">
     <h2>4h 12m</h2>
     <span>layover at Frankfurt</span>
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
.button {
    background: #FFF0E7;
    width: 200px;
    border-radius: 7.5px;
    margin: 0px 26px;
    padding: 5px 7px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    justify-self: center;
    align-self: center;
}
.button h2, span{
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    display: flex;
    align-items: center;
    letter-spacing: -0.375px;
    color: #181818;
}
.button span{
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: -0.3px;
    color: #181818;
}

@media (min-width: 768px) {
  
}

@media (max-width: 768px) {
  
}


</style>
