const Participant = require('../models/Participant')
const db = require('../db/db')
const qr = require('../utils/qr')

const cloudinary = require('../utils/cloudinary')
const sendEmail = require('./nodemail')
const format = require('./format')


const SendInvites = async () => {

    try{
        db()
        const all = await Participant.find()

        await CreateQRs(all);

        for( const participant of all ){
            if( participant.verified){
                let qrURL = ""
                try {
                    const result = await cloudinary(`.qr/${participant.UUID}.png`);
                    console.log(result);
                    qrURL = result; 
                  } catch (err) {
                    console.log("Cloudinary Upload Failed");
                    console.log(err);
                    return
                }
                const mailhtml = format(participant.name,participant.PID ,participant.events, "https://res.cloudinary.com/ds2uyuydp/image/upload/v1726946746/j2e13lzvrgsvbgw7vjjp.webp", qrURL )
                
                await sendEmail( participant.email, mailhtml)


            }
        }

    }catch(err){
        console.log(err)
    }
}

const CreateQRs = async ( all ) =>{

    try{
        
        for( const participant of all){

            if( participant.verified ){

                await qr( participant.UUID, "./.qr")
                console.log(`QR Generated for Participant : ${participant.name}`)
            }else{
                console.log(`Rejected : ${participant.name}`)
            }

        }
    }catch(err){
        console.log(err)
    }

}


SendInvites()