// const mongoose = require("mongoose");

// const PrivateSchema = new mongoose.Schema({
//     title:{
//         type:String,
//         required:true
//     },
//     description:
//     {
//         type: String,
//         required:true,
//     },
//     minSalary:{
//         type:Number,
//     },
//     maxSalary:{
//         type:Number,
//     },
//     city:{
//         type:String,
//     },
//     jobType:{
//         type:String,
//     },
//     workType:{
//         type:String,
//     },
//     applyLink:{
//         type:String,
//         required:true,
//     },
//     company:{
//         type:String,
//         required:true,
//     },
//     skills:{
//         type:String,
//     },
//     disabilityType:{
//         type:String,
//     }, 

// },
// {
//     timestamps: true,
//  }
// );

// module.exports = mongoose.model("PrivateJob", PrivateSchema);


const mongoose = require("mongoose");
const jobTemp = require ("../mailTemplate/jobTemplate")

const PrivateSchema = new mongoose.Schema({

    email:
    {
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    description:
    {
        type: String,
        required:true,
    },
    minSalary:{
        type:Number,
    },
    maxSalary:{
        type:Number,
    },
    city:{
        type:String,
    },
    jobType:{
        type:String,
    },
    workType:{
        type:String,
    },
    applyLink:{
        type:String,
        required:true,
    },
    company:{
        type:String,
        required:true,
    },
    skills:{
        type:String,
    },
    experience:{
        type:String,
    },
    job_id:{
        type:String,
    },
    address:{
        type:String,
    },
    inv_mode:{
        type:String,
    },
    disabilityType:{
        type:String,
    },
},
    {
        timestamps: true,
    }
);


module.exports = mongoose.model("PrivateJob", PrivateSchema);