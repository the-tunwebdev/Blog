import React, { useState,useEffect } from 'react'
import Blog from './Blog'
import './BlogPosts.css'
import {
    
    useParams
  } from "react-router-dom";
import EditTodo from './EditBlog';
function AdminBlog() {
    const name =window.location.pathname.split('/')[2]
    const [adminblog,setAdminblog]= useState([])
    const [input,setInput]= useState('')
    const wrongname=  []
    
    
    
    const getAdminBlog=async()=>{
        
        
        const response = await fetch(`http://localhost:5000/adminblog/${name}`,{
            // manghir hata chaty kenha get ttetsama
            
        })
        const jsonData= await  response.json()
       if(jsonData.length===0){
            wrongname.push('feragh')
           
           
       }else{
           setAdminblog(jsonData)
       }
        

    }
    const deleteTodo =async(id)=>{
        try{
            const deleteToDo= await fetch(`http://localhost:5000/adminblog/${id}`,{
                method:"delete"
            })
            // console.log(deleteToDo)
            setAdminblog(adminblog.filter(blog=>blog.blog!==id))
            window.location.reload(false)

        }
        catch(err){
            console.log(err)
        }
    }
    
    useEffect(()=>{
        getAdminBlog()

    },[])
    return (
        <div>
            
            
            
               
               <div class="leftcolumn">
            
                    {
                        adminblog.map((blog)=>(
                            <div class="card">
                                <Blog  key={blog.todo_id} title={blog.title} image={blog.image} name={blog.name} time={blog.time} description={blog.description} />
                                <div style={{display:'flex',justifyContent: 'space-between'}}>

                                    <button type="button" style={{width:'35%'}}  class="btn btn-danger" onClick={()=>deleteTodo(blog.todo_id)} >delete</button>

                                </div>

                            </div>

                            
                        ))
                    }
                    
            
                </div>
            
            
            
            
            
        </div>
    )
}
{/* <div>
                <div className="header">
                <h2>Blog Name</h2>
            </div>
        <div className="row">
          <div className="leftcolumn">
            <div className="card">
              <h2>TITLE HEADING</h2>
              <h5>Title description, Dec 7, 2017</h5>
              <div className="fakeimg" style={{height: '200px'}}>Image</div>
              <p>Some text..</p>
              <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
            </div>
           
          </div></div></div> */}
export default AdminBlog
