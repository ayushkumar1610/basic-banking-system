const express = require('express');
const {Employee} = require('../model/employee');
const {History} = require('../model/history');
const router = express.Router();

// get all employee
router.get('/employee', (req, res, next)=>{
    Employee.find({}).then((emp)=>{
        res.send(emp);
        console.log("GET all Employees");
    }).catch(next);
});

// get employee by id
router.get('/employee/:id', (req, res)=>{
    Employee.findById(req.params.id, (err, data)=>{
        if(!err){res.send(data)}
    });
})

// post a employee
router.post('/employee', function(req, res){
   const emp = new Employee({
       name: req.body.name,
       email: req.body.email,
       amount: req.body.amount,
       age: req.body.age,
       ac_number: req.body.ac_number,
       address: req.body.address,
   });
   emp.save((err,data) =>{
       if(!err){
           res.send(data)
        }
       else{
            console.log("error in db", err)        
        }
   }

   )
});

// edit a employee
router.put('/employee/:id', (req, res, next)=>{
    Employee.findOneAndUpdate({_id: req.params.id}, req.body).then((emp)=>{
        Employee.findOne({_id: req.params.id}).then((emp)=>{
            res.send(emp);
            console.log("PUT",emp);
        });
    });
});

// delete a employee
router.delete('/employee/:id', (req, res, next)=>{
    Employee.findOneAndDelete({_id: req.params.id}).then((emp)=>{
        res.send(emp);
        console.log("DELETE",emp);
    });
});

// get all history
router.get('/history', (req, res, next)=>{
    History.find({}).then((his)=>{
        res.send(his);
        console.log("GET all History");
    }).catch(next);
});

// update history
router.post('/history', function(req, res){
    const his = new History({
        sender_name: req.body.sender_name,
        receiver_name: req.body.receiver_name,
        amount: req.body.amount
    });
    his.save((err,data) =>{
        if(!err){
            res.send(data)
         }
        else{
             console.log("error in db", err)        
         }
    }
 
    )
 });

module.exports = router;