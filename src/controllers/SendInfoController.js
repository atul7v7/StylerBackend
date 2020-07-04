const postSendEmail = (req, res) => {
    // here the code begins to send the data
    //const {emailId,subject} = req.body 
    res.send("successfully email send")
}

const postSendSMS = (req, res) => {
    // code to send the sms
    res.send("sms send successfully " )
}

module.exports  ={
    postSendEmail,
    postSendSMS
}