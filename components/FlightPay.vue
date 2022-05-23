<template>
  <div class="container">
      <h6>Payment Details</h6>
      <div class="detail-container">

        <div class="pay">
            <div class="details-body">
                <h2>Adult (1x) Base Fare</h2>
                <h4>₦10,1900</h4>
            </div>

            <div class="details-body">
                <h2>Fee & Surcharges</h2>
                <h4>₦14,047</h4>
            </div>

            <div class="details-body">
                <h2>Discounts</h2>
                <h4>₦0</h4>
            </div>
        </div>

        <hr>

        <div class="extra">
            <div class="details-body">
                    <h2>Total Fare</h2>
                    <h4>₦12,627</h4>
            </div>

            <div class="details-body">
                    <h2>Add Ons</h2>
                    <h4>₦0</h4>
            </div>
        </div>

        <div class="coupon">
            <h2>Promo Code/Coupon Code</h2>
            <input type="text" placeholder="Enter coupon code">
        </div>

        <hr>

        <div class="total extra">
            <div class="details-body">
                <h2>Price You Pay</h2>
                <h3>₦120,627</h3>
            </div>
        </div>

        <div class="total extra">
            <div class="details-body">
                <div class="icons">
                    <FontAwesomeIcon icon="fa-solid fa-check" class="check"/>
                </div>
                <h5>Making payment now to prevent increase in fare</h5>
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
.container {
  background: #FFFFFF;
/* margin-left: 20px; */
/* background: #FFECE2; */
box-sizing: border-box;

border-radius: 15px;
}
.container h6{
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 23px;
    display: flex;
    align-items: center;
    color: #333333;
    margin-bottom: 5px;
}
.pay{
    border: 2px solid #FFECE2;
    width: 100%;
    padding: 7px 10px;
    padding-bottom: 0 !important;
    border-radius: 10px;
}
.extra{
    width: 100%;
    padding: 7px 7px;
    border-radius: 10px;
    /* margin-top: 30px; */
}
.detail-container h2{
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 17px;
    color: #333333;
}
.detail-container h4{
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 17px;
    color: #333333;
}

.detail-container{
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 25px 12px;
    position: static;
    background: #FFFFFF;
    border: 0.787031px solid rgba(255, 236, 226, 0.5);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
    border-radius: 10px;
}

.details-header, .details-body{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

hr{
    width: 90%;
    height: 0px;
    margin: 20px 0px;
    display: grid;
    justify-self: center;
    border: 0.5px solid rgba(20, 20, 20, 0.1);
}
.icons{
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: #FF5E0D;
    display: flex;
    justify-content: center;
    align-items: center;
}

.check{
    color: #FFFFFF;
    font-size: 10px;
}

.total h5{
    font-family: 'Lato';
font-style: italic;
font-weight: 500;
font-size: 9.5px;
line-height: 19px;
margin-left: 10px;
}
.total h3{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 22.0369px;
    line-height: 27px;

    /* identical to box height */
    display: flex;
    align-items: center;
    text-align: right;

    color: #FF5E0D;
}








.details-body h6{
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    margin-right: 30px;
    margin-top: 10px;
    color: #2F2C2C;
}

.details-body h6:last-child{
    margin-right: 0;
}
h4{
    font-family: 'Lato';
font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 29px;
margin-bottom: 14px;
color: #2F2C2C;
}












@media (min-width: 768px) {
  
}

@media (max-width: 768px) {
  
}


</style>
