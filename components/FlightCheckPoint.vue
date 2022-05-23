<template>
  <div class="content">

    
     <div class="change-button">
         <div class="airline-row">
             <img src="~/assets/svg/airline-logo.svg" alt="">
             <h6>Qatar airways (Boeing 787-8 Dreamliner)</h6>
         </div>
        <div class="row">

            <div class="flight-info">
                <h2>LOS</h2>
                <h3>(9:25am)</h3>
                <h4>Friday, Sep 3</h4>
            </div>

            <div class="circle"></div>
            <hr>
            <h2>6h 20m</h2>
            <hr>
            <div class="circle"></div>


            <div class="flight-info">
                <h2>FRA</h2>
                <h3>(3:45pm)</h3>
                <h4>Friday, Sep 3</h4>
            </div>

        </div>

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
.content {
    background: transparent;
    border-radius: 15px;
    margin-bottom: 10px;
    box-sizing: border-box;
    padding: 10px 10px 10px 10px;
}
.row{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}
.airline-row{
    display: flex;
    flex-direction: row;
    padding-left: 25px;
    margin-bottom: 5px;
}
.airline-row h6{
    text-align: left;
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 178%;
    letter-spacing: -0.3px;
    color: #181818;
}
.airline-row img{
    height: 20px;
    width: 20px;
    border-radius: 0px;
    margin-right: 5px;
}
.flight-info{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    width: 200px;
    height: 26px;
    margin: 0px 5px;
}
.flight-info h2{
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    color: #181818;
}
.flight-info h3, h4{
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #181818;
}
.circle{
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #FE5E00;
    display: flex;
    align-self: center;
    justify-self: center;
}
hr{
    width: 50px;
    height: 0px;
    display: flex;
    align-self: center;
    justify-self: center;
    border: 1.25px dashed #7A7A7A;
}

@media (min-width: 768px) {
  
}

@media (max-width: 768px) {
  
}


</style>
