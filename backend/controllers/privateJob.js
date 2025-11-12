const PrivateJob = require("../models/PrivateJob");
const mailSender = require("../utils/mailSender")
const jobTemp = require("../mailTemplate/jobTemplate")

// create api(POST) for new private job

exports.createPrivateJob = async (req, res) => {
    try {
        const {email, title, description, minSalary, maxSalary, city, applyLink, skills, company, jobType, workType, disabilityType,experience,inv_mode,job_id,address} = req.body;


        if (!email || !title || !description || !minSalary || !maxSalary || !city || !applyLink || !skills || !jobType || !company || !workType || !disabilityType || !experience || !inv_mode || !job_id || !address ) {
            return res.status(401).json({
                success: false,
                message: "Please provide necessary details"
            })
        }

        const newPvtjob = await PrivateJob.create({
            email:email,title: title, description: description, jobType: jobType, minSalary: minSalary, maxSalary: maxSalary, city: city, applyLink: applyLink ,company: company, workType: workType, experience:experience,inv_mode: inv_mode,job_id:job_id,address:address,skills: skills,disabilityType: disabilityType
        })


        // Send MAIL here
        async function sendJobEmail(email) {

            try {
              const mailResponse = await mailSender(
                email,
                "New Job posted Email",
                jobTemp()
              );
              console.log("Email sent successfully: ", mailResponse.response);
            } catch (error) 
            {
              
              console.log("Error occurred while sending email: ", error);
              throw error;
            }
          }

          sendJobEmail(email)



        return res.status(200).json({
            success: true,
            message: "New pvt job created",
            newPvtjob
        });
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({
            success: false,
            message: "Pvt job cant be created",
        })
    }
}

//Getting all jobs (GET REQUEST)


exports.getAllPrivateJob = async (req, res) => {
    try {
        const pvtjobs = await PrivateJob.find({});
        //send json res with success flag
        res.status(200).json({
            success: true,
            pvtjobs,
            message: 'All Private Jobs fetched succesfully'
        });
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({
            success: false,
            message: "Pvt job cant be Fetched",
        })
    }
}

exports.deletePrivateJob = async (req, res) => {
    try {
        // first we fetch the id to be deleted
        const id = req.params.id;
        const Pvtjob = await PrivateJob.findByIdAndDelete(id);
        res.status(200).json({
            success: true,
            message: 'Private Job deleted succesfully'
        });
    }
    catch (err) {
        console.error(err);
        console.log(err);
        res.status(500).json({
            success: false,
            data: "internal server error",
            message: err.message,
        });
    }
}