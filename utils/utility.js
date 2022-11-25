const axios=require('axios');
require('dotenv').config();
const loginurl=process.env.LOGINURL;
const url1=process.env.DOMAIN_ENDPOINT;
var t6=' ';


 async function get_token(){
      
    const payload={"username":"ubr_test","password":"ubr_test@123"};
   const res=await axios.post(loginurl,payload);
   console.log("get token4903850938450348509348")
   t6=await res.data.data.token;
   return  await res.data.data.token
    //console.log(await res.data.data.user)
    //const token1=(res.data.data.token)
    //console.log( token1)
    
    //return await res.data.data.token;
}

async function get_method1(url2) {
    try {
      console.log("-------------get_method------------------")
      if(t6==' '){
      t6=await get_token()
      }
      console.log(t6)
       const res=await axios.get(url1+url2, {
        headers: {
          "content-type": "application/json",
         Authorization: "Bearer "+t6,
        }
        
      });
      return  await res;
      //console.log("get method ",response)
      
    } catch (error) {
      return error;
    }
  }


var start1=Date.parse('23 Oct 2022 07:00:00 GMT +05:30');
var end1= Date.parse('24 Oct 2022 07:00:00 GMT +05:30');
var typeOfTime="day";
var dataType="count";
var operationType="entityWise";


module.exports= {get_token,get_method1,start1,end1,typeOfTime,dataType,operationType};




