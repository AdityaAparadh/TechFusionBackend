const generateQR = require('../utils/qr')


generateQR("bcabe817-f83a-4a04-91f6-dc28330f0bb0",".qr")
.then((result)=>{
    console.log("GENERATED SUCCESSFULLY")
    console.log(result)
})
.catch(function(err){
  console.log(err)
})