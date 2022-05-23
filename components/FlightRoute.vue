<template>
  <div class="container">
    <FlightCheckPoint/>

    <div class="center">
        <StopOver/>
    </div>
    
    <FlightCheckPoint/>
     
     <div class="right">
         <a class="change-button">Change Flights</a>
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
.container {
    background: #FFFFFF;
    box-shadow: 0px 2px 60px rgba(0, 0, 0, 0.05);
    /* border: 0.787031px solid rgba(255, 236, 226, 0.8); */
    border-radius: 15px;
    margin-bottom: 45px;
    margin-right: 15px;
    box-sizing: border-box;
    padding: 15px 15px 15px 15px;
}
.row{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}
.change-button{
    padding: 5px 7px;
    border: 1px solid #FF5E0D;
    border-radius: 5.08509px;
    margin-right: 0;
}
.center{
    display: flex;
    justify-content: center;
    align-items: center;
}
.right{
    display: flex;
    text-align: right;
    justify-content: right;
    margin: 0 35px;
}

@media (min-width: 768px) {
  
}

@media (max-width: 768px) {
  
}


</style>
