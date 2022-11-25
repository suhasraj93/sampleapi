const { expect } = require("chai");
require('dotenv').config()
const url=process.env.DOMAIN_ENDPOINT;
var  fetchtoken=require("../utils/utility")
const {start1,end1,typeOfTime,dataType,operationType}=require("../utils/utility")

describe("vaerify parcelscanner ",async()=>{

    it("Hour",async()=>{
      
        const res=await fetchtoken.get_method1(`/cb/dashboard/v1/analytics/getParcelSystemByTime?startTime=${start1}&endTime=${end1}&typeOfTime=${typeOfTime}&dataType=${dataType}&operationType=${operationType}`)
        const r1=JSON.stringify(res.data);
        //console.log(res)
        expect(res.status).eq(201)

    })


    it("day",async()=>{
        const res=await fetchtoken.get_method1(`/cb/dashboard/v1/analytics/getParcelSystemByTime?startTime=${start1}&endTime=${end1}&typeOfTime=day&dataType=${dataType}&operationType=${operationType}`)
        console.log(res)
        expect(res.status).eq(201)
    })

    it("acceptedparcelreport",async()=>{
        const res=await fetchtoken.get_method1(`/cb/dashboard/v1/reports/shipment-details?scanStatus=accepted&parcelStatus=sorted&dataPushStatus=all&type=view&lowTime=${start1}&upTime=${end1}`)
        console.log(res)
        expect(res.status).eq(200)
    })

    it("rejectedParcelReport",async()=>{
        const res=await fetchtoken.get_method1(`/cb/dashboard/v1/reports/shipment-details?scanStatus=rejected&parcelStatus=all&dataPushStatus=all&type=view&lowTime=${start1}&upTime=${end1}`)
        console.log(res)
        expect(res.status).eq(200)
    })

    it("refeedparcelreport",async()=>{
        const res=await fetchtoken.get_method1(`/cb/dashboard/v1/reports/shipment-details?scanStatus=accepted&parcelStatus=refeed&dataPushStatus=all&type=view&lowTime={{start1}}&upTime={{end1}}`)
        console.log(res)
        expect(res.status).eq(200)
    })


})