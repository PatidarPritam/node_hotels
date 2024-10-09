const express = require('express');
const app = express();
 const db = require('./db');

//  const Person = require('./models/Person');
//  const MenuItem = require('./models/Menu');

 const bodyParser = require('body-parser');
 app.use(bodyParser.json());

// app.use(express.json());  // this can also used instead of bodyPArser


app.get('/',function(req,res){
    res.send('Welcome to my hotel');
})

// old 
// app.post('/person',(req,res)=>{
//   const data = req.body   // assuming the request body contains the person data

//   // create a new person document using te mongoose model
//   const newPerson = new Person(data);   // here we pass data that is like below commneted part 
// //   newPerson.name = data.name;
// //   newPerson.age = data.age;
// //   newPerson.work = data.work;
// //   newPerson.mobile = data.mobile;
// //   newPerson.email = data.email;
// //   newPerson.address = data.address;
// //   newPerson.salary = data.salary;

//   newPerson.save((error,savedperson)=>{
//     if(error){
//       console.log('Error saving person',error);
//       res.status(500).json({error:'Internal server error'});
//     }else{
//           console.log('data saved successfully');
//           res.status(200).json(savedperson);
//     }
//   })

// })

  // we transfer all the route in personal file like for person we transfer in personRoutes.js
// new   
//    app.post('/person', async (req,res)=>{
//      try{
//         const data = req.body 
//         const newPerson = new Person(data);

//         const response = await newPerson.save();

//         console.log('data saved');
//         res.status(200).json(response);

//        }catch(err){
//         console.log(err);
//         res.status(500).json({error:"Internal Server Error"});

//      }   
 
//  })

    // app.get('/person',async(req,res)=>{
    //     try{
    //         const data = await Person.find();
    //         console.log("data fetched");
    //         res.status(200).json(data);
    //     }
    //     catch(err){
    //         console.log(err);
    //         res.status(500).json({error:"Internal Server Error"});
    //     }
    // })

    // app.post('/menuItem',async (req,res)=>{
    //     try{
    //         const data = req.body;
    //         const newMenuItem = new MenuItem(data);
    //         const response = await newMenuItem.save();
    //         console.log('data saved');
    //         res.status(200).json(response);
    //     }
    //     catch(err){
    //         console.log(err);
    //         res.status(500).json({error:"Internal Server Error"});
    //     }
    // })

    // app.get('/menuItem', async (req,res)=>{
    //     try{
    //         const data = await MenuItem.find();
    //         console.log('data fetched');
    //         res.status(200).json(data);
    //       }
    //     catch(err){
    //         console.log(err);
    //         res.status(500).json({error:"Internal Server Error"});
    //     }
    // })

    // app.get('/person/:workType', async(req,res)=>{
    //     try{
    //         const workType = req.params.workType;
    //     if(workType == 'chef' || workType == 'waiter' || workType== 'manager'){
    //         const response = await Person.find({work: workType});
    //         console.log("response fetched");
    //         res.status(200).json(response);
            
    //     }
    //     else{
    //         console.log('Invalid work type');
    //         res.status(404).json({error:'Invalid work type'});
            
    //     }
    //    } catch(err){
    //         console.log(err);
    //         res.status(500).json({error:'Internal Server Error'});
    //     }

    // })


const personRoutes = require('./routes/personRoutes');
app.use('/person',personRoutes);

const menuRoutes = require('./routes/menuRoutes');
app.use('/menuItem',menuRoutes);

app.listen(3001,(req, res)=>{
    console.log('Server is running on port 3001');
})