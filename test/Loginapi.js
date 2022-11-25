require('dotenv').config()
const loginurl=process.env.LOGINURL;
const { default: axios } = require("axios");
const { expect } = require("chai");

describe("Login api ",async()=>{

    it("validate login with username and password ",async()=>{
      
        const payload={"username":"ubr_test","password":"ubr_test@123"};
        const res=await axios.post(loginurl,payload)
        //console.log(await res.data.data.token)
        expect(await res.status).eql(200)
        
    })

})
