const fs = require('fs');
const mongoose = require('mongoose');

const dotenv = require('dotenv');
// const app = require('./app');
const Tour = require('./../../models/tourModel');
dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);


mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log('DB Connectionn Successfully Connected !'));
 
  //Read json filesystem

  const tours = JSON.parse(fs.readFileSync(`${__dirname}/tours-simple.json`, 'utf-8'));

  //Import data into db 

  const importData = async ()=>{
      try{
     await Tour.create(tours);
     console.log('Data successfully loaded!');
     process.exit();
      }catch(err){
          console.log(err);
      }
  };
 

  // delete all data from collection 
    
  const deleteData = async () =>{
    try{
        await Tour.deleteMany();
        console.log('Data successfully Deleted!');
        // process.exit();
         }catch(err){
             console.log(err);
         }
         process.exit();
  };
  if(process.argv[2] === '--import'){
      importData();
  }else if(process.argv[2]=== '--delete'){
      deleteData();
  }

//   console.log(process.argv);