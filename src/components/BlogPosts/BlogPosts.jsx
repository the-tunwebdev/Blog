import React, { useEffect, useState } from 'react'
import BlogPost from './BlogPost/BlogPost'
import './BlogPosts.css'
function BlogPosts() {
    const [blogs,setBlogs]= useState([])
    const getBlog=async()=>{
        const response = await fetch('http://localhost:5000/addblog',{
            // manghir hata chaty kenha get ttetsama
            
        })
        const jsonData= await  response.json()
        setBlogs(jsonData)

    }
    
    useEffect(()=>{
        getBlog()

    },[])
    

    return (
        <div>
            <div className="header">
                <h2>Blog Home</h2>
            </div>
            <div class="leftcolumn">
            
                    {
                        blogs.map((blog)=>(

                            <BlogPost  key={blog.todo_id} title={blog.title} image={blog.image} name={blog.name} time={blog.time} description={blog.description} />
                        ))
                    }
                    
            </div>       
                    
      </div>
    )
}

export default BlogPosts
