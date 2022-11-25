const { default: axios } = require("axios");
const { expect } = require("chai");
require('dotenv').config()
const url=process.env.DOMAIN_ENDPOINT;
var  fetchtoken=require("../utils/utility")
const {start1,end1,typeOfTime,operationType}=require("../utils/utility")
const hour_ar=[];
const days=[];

describe("validate bag closed",async()=>{

    it("hour Copy",async()=>{
        const res=await fetchtoken.get_method1(`/cb/dashboard/v1/analytics/getClosedBagsByTime?startTime=${start1}&endTime=${end1}&typeOfTime=${typeOfTime}&operationType=${operationType}`);
        //console.log(await res)
        //const r1=JSON.stringify(res.data);Object.keys(myObj).length
        var sum=0;
        var index=0;
        
        console.log(await Object.keys(res.data.data).length)
        for(let i=0;i<=Object.keys(res.data.data).length-1;i++){
           // console.log(Object.keys(res.data.data)[i])
            var n1=Object.keys(res.data.data)[i];
            var n2=res.data.data[n1].length;
            for(let j=0;j<=n2-1;j++)
            {
                //console.log(await Object.values(res.data.data[n1][j])[0])
                sum=Object.values(res.data.data[n1][j])[0]+sum;
                //console.log(sum)
            }
            console.log("the sum is "+sum)
            hour_ar[index++]=sum;
            sum=0;
        }
        console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")
        console.log("the sum of all users "+hour_ar)
        
        expect(res.status).eq(201);
    })

    it("day Copy",async()=>{
        var d=0;
        var s1=0;
        const res=await fetchtoken.get_method1(`/cb/dashboard/v1/analytics/getClosedBagsByTime?startTime=${start1}&endTime=${end1}&typeOfTime=day&operationType=${operationType}`);
       // console.log(await res)
        const r1=JSON.stringify(res.data);
        console.log(await Object.keys(res.data.data).length)
        for(let i=0;i<=Object.keys(res.data.data).length-1;i++){
            // console.log(Object.keys(res.data.data)[i])
             var n1=Object.keys(res.data.data)[i];
             //console.log(Object.keys(res.data.data)[i])
             var n2=res.data.data[n1].length;
            for(let j=0;j<=n2-1;j++)
            {
                //console.log(await Object.values(res.data.data[n1][j])[0])
                console.log(Object.values(res.data.data[n1][j])[0]);
                s1=Object.values(res.data.data[n1][j])[0]+s1;
                days[d++]=Object.values(res.data.data[n1][j])[0]
                //console.log(sum)
            }
        }
        console.log("the value of users in day is "+days)
        console.log("yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy"+s1)
        expect(res.status).eq(201);
    })
})

