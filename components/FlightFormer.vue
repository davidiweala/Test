<template>
  <div class="container">
      <!-- flight form -->
      <form action="" method="post">
        <div class="form-section">
            <div class="form-row">
                <!-- <label for="title">Title</label> -->
                <select class="title" id="title" required> 
                    <option value="mr">Mr</option>
                    <option value="mrs">Mrs</option>
                </select>

                <input type="text" placeholder="First Name" required/>
            </div>

            <div class="form-row">
                <input type="text" placeholder="Last Name" required/>
                <input type="text" placeholder="Middle Name" />
            </div>

            <div class="form-row">
                <input type="email" placeholder="Email" required/>
                <input type="text" placeholder="Phone" required/>
            </div>

            <div class="form-row">
                <input type="text" placeholder="Date of birth" required/>
                
                <select class="gender" id="gender" required>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>

                <select class="nationality" id="nationality" required>
                    <option value="">Nationality</option>
                    <option value="nigeria">Nigeria</option>
                    <option value="ghana">Ghana</option>
                </select>
            </div>

            <div class="form-row">
                <input type="text" placeholder="Passport Number" required/>
                <input type="text" placeholder="Passport Expiry Date" required/>

                <select class="passport-issuing-authority" id="passport-issuing-authority" required>
                    <option value="">Passport Issuing Authority</option>
                    <option value="nigeria">Nigeria</option>
                    <option value="ghana">Ghana</option>
                </select>
            </div>
            
            <input type="submit" class="submit" value="Done">
            

        


            
            

        </div>
    </form>
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
.submit{
    padding: 5px 17.5px 5px 17.5px;
    background-color: #ff5e0d;
    color: #ffffff;
    width: 150px;
    border-radius: 4px;
    margin-right: 0;
}
.form-row{
    display: flex;
    flex-direction: row;
}
.title{
    width: 30%;
}
.form-section{
    display: flex;
    flex-direction: column;
    /* margin: 0 auto;
    width: calc(100% - 1.8rem);
    margin-bottom: 60px; */
}
input,select{
    border: 1px solid #ff5e0d;
    margin: 5px;
    width: 100%;
    height: 52px;
    border-radius: 5px;
    padding: 5px;
    background-color: #FFFFFF;
}
.container {
  background: #FFFFFF;
box-shadow: 0px 4px 60px rgba(66, 73, 80, 0.05);
border-radius: 15px;
margin-bottom: 10px;
margin-left: 15px;
box-sizing: border-box;
padding: 10px 10px 10px 10px;
}
.center{
    text-align: center;
}
@media (min-width: 768px) {
  
}

@media (max-width: 768px) {
  
}


</style>
