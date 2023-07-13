const connectDB= ()=>{
    mongoose.connect(process.envMongoDB_URI
      .then ( ()=>{
        console.log("MongoDB connecté");
      }).catch ((error)=>{
        console.log(error);
      })  
      )}

      module.exports=connectDB