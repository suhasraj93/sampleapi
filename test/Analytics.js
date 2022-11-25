const { default: axios } = require("axios");
const { expect } = require("chai");
require('dotenv').config()
const url=process.env.DOMAIN_ENDPOINT;
var  fetchtoken=require("../utils/utility")
const {start1,end1}=require("../utils/utility")
//var getmethod=require("../test/utils/utility")
// import utility from "./utils/utility";
// const utlitity1=new utility();

var token="";

describe("verify analytics ",async()=>{

    // before(function(){
    //      token =  fetchtoken()
    //     return token});

    it("getSystemThroughput",async()=>{

        //const res=await axios.get(`${url}/cb/dashboard/v1/analytics/getSystemThroughput?startTime=1668994200000&endTime=1669080600000&type=with_refeed`,
        
        const res=await fetchtoken.get_method1(`/cb/dashboard/v1/analytics/getSystemThroughput?startTime=${start1}&endTime=${end1}&type=with_refeed`)
        //console.log("throughput method")
        //console.log(res.data)
        expect(res.status).eq(200)
        expect(res.data.response[0].throughPut).to.exist;
        expect(res.data.response[0].end).to.exist;
        
    })


    it("getSessionThroughPutbyHour",async()=>{

        const res=await fetchtoken.get_method1(`/cb/dashboard/v1/analytics/getSessionThroughPutByHour?startTime=${start1}&endTime=${end1}`)
        const r1=JSON.stringify(res.data);
        expect(await res.status).eq(200)
        expect(res.data.data[0].data).to.exist;
        expect(r1).to.contains("time")
        
        
    })


    it("sessionThroughPutTimes",async()=>{

        const res=await fetchtoken.get_method1(`/cb/dashboard/v1/analytics/sessionThroughPutTimes?startTime=${start1}&endTime=${end1}&typeOfTime=day`)
        //console.log(await res)
        expect(res.status).eq(200)
        expect(res.data.data.tb[0].data).to.exist;
        expect(res.data.data.tb[0].time).to.exist;

    })

    it("getRobotByTime",async()=>{
        const res=await fetchtoken.get_method1(`/cb/dashboard/v1/analytics/sessionThroughPutTimes?startTime=${start1}&endTime=${end1}&typeOfTime=day`)
       // console.log(await res)
       const r1=JSON.stringify(res.data);
        expect(res.status).eq(200)
        expect(r1).to.contains("data")
        expect(r1).to.contains("time")
    })


    it("ErrorWise Count",async()=>{

        const res=await fetchtoken.get_method1(`/cb/dashboard/v1/analytics/getRobotByTime?startTime=${start1}&endTime=${end1}&typeOfTime=day`)
       console.log(await res)
       const r1=JSON.stringify(res.data);
        expect(res.status).eq(201)
        expect(r1).to.contains("data")
        expect(r1).to.contains("time")
        
    })


    it("totalErrorCountVsTime",async()=>{

        const res=await fetchtoken.get_method1(`/cb/dashboard/v1/analytics/totalErrorCountVsTime?startTime=${start1}&endTime=${end1}&typeOfTime=day`)
        //console.log(await res.data)
        expect(res.status).eq(200)
        expect(res.data.data[0].data).to.exist;
        expect(res.data.data[0].time).to.exist;
    })


})


