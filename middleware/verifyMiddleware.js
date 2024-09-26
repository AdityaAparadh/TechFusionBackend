const validateEmail = require('./validators/validateEmail')
const validatePhone = require('./validators/validatePhone')
const validateEvents = require('./validators/validateEvents')
const validateEverything = require('./validators/validateEverything')
const logger = require('../config/logger')

const verifyRegistration = (req, res, next) => {

    try{
        const [ everythingAlright, missing] = validateEverything(req)
        if ( !everythingAlright  ){
            res.status(400)
            res.json(({"message" : "Incomplete request", "missing" : missing}))
            res.send()
        }else if (!validateEmail(req.body.email)){
            res.status(400)
            res.json(({"message" : "Incorrect Email",}))
            res.send()
        }else if (!validatePhone(req.body.phone)){
            res.status(400)
            res.json(({"message" : "Incorrect Phone Number",}))
            res.send()
        }else if( !validateEvents(req.body.events)){
            console.log("HERE:", req.body)
            res.status(400)
            res.json({ 
                "message" : "Incorrect Events Array. Check below array of Valid Events. Length shouldn't exceed 3 with no duplicates ", 
                "events" : ["CodeCrush", "CodeDuet", "Bid2Build"]
             })
            res.send()
        }
        else{
            next()
        }
        


    }catch(error){
        console.log("An Error Occured : verifyMiddleware")
        console.log(error)
        logger.writeLog(error)
        res.status(500)
        res.json({"message" : "Internal Server Error"})
        res.send()
    }



}

module.exports = verifyRegistration