const express = require('express')
const app = express()
const cors= require('cors')
const  bodyParser = require('body-parser');
const pool= require('./db')

app.use(cors())
app.use(express.json())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// post the new blogs 
app.post('/addblog',async(req,res)=>{
    try{
        const {name,title,description} = req.body;
        const time =  new Date()
        const newBlog= await pool.query('INSERT INTO bloguser (name,title,time,description) VALUES ($1,$2,$3,$4) RETURNING * ' ,[name,title,time,description])
        res.json(newBlog.rows[0])

    }
    catch(err){
        res.json(err.message)

    }
    
    
   
})

// fetching or geting the blog of the user and pushing them to the blogs page
// using get request
app.get('/addblog',async(req,res)=>{
    try{
        
        const fetchingBlogs= await pool.query('SELECT * FROM bloguser')
        res.json(fetchingBlogs.rows)

    }
    catch(err){
        res.json(err.message)

    }
    
    
   
})
//geting the user blogs (admin) by filtering all the blogs from db using where
// get request
app.get('/adminblog',async(req,res)=>{
    try{
        const {name}= req.body
        
        const adminBlog= await pool.query('SELECT * FROM bloguser WHERE  name=$1 ',[name])
        res.json(adminBlog.rows)

    }
    catch(err){
        res.json(err.message)

    }
    
    
   
})
// editing the user from the admin part 
// using app put request
app.put("/adminblog/:id",async(req,res)=>{
    try{
        const {id}= req.params;
        
        const {title,description}= req.body;
        const updateBlog = await pool.query('UPDATE bloguser SET title =$1 , description =$2 WHERE todo_id = $3',[title,description,id])
        res.json(updateBlog.rows)
    }
    catch(err){
        console.log(err)

    }
})
// deleting item from the admin products
// using delete request
app.delete('/adminblog/:id',async(req,res)=>{
    const {id}= req.params;
    const deletingBlog= await pool.query('DELETE FROM bloguser where todo_id= $1',[id])
    res.json('deleted successfull')
    try{

    }
    catch{
        console(err)
    }
})

app.listen(6000,()=>{
    console.log('server is working')

})