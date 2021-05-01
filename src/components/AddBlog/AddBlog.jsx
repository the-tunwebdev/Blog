import React, { useState } from 'react'

function AddBlog() {
    const [name,setName]= useState('');
    const [title,setTitle]= useState('');
    const [description,setDescription]= useState('');
    const [image,setImage]= useState('')
    const submitForm=async(e)=>{
        e.preventDefault()
        try{
            const body={name,title,image,description}
            const response= await fetch('http://localhost:5000/addblog',{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(body)
            })
              .then(res=>console.log(res))
              window.redirect('/')

        }
        catch(err){
            console.log(err)

        }
    }

    


    return (
        
            <form>
                <div className="form-group">
                    <label for="exampleInputEmail1">Name</label>
                    <input value={name} onChange={(event)=>setName(event.target.value)} type="text" name="name" className="form-control" id="exampleInputname1" aria-describedby="nameHelp" placeholder="Enter name"/>
                    
                </div>
                <div className="form-group">
                    <label for="exampleInputEmail1">Title</label>
                    <input type="text" value={title} onChange={(event)=>setTitle(event.target.value)} name="title" className="form-control" id="exampleInputname1" aria-describedby="nameHelp" placeholder="Enter a title for the blog"/>
                    
                </div>
                <div className="form-group">
                    <label for="exampleInputEmail1">ImageUrl</label>
                    <input type="text" value={image} onChange={(event)=>setImage(event.target.value)} name="image" className="form-control" id="exampleInputname1" aria-describedby="nameHelp" placeholder="Enter a title for the blog"/>
                    
                </div>
                <div className="form-group">
                    <label for="exampleInputEmail1">Description</label>
                    <textarea style={{overflow:'scroll'}} rows="8" cols="70" type="text" value={description} onChange={(event)=>setDescription(event.target.value)} name="description" className="form-control" id="exampleInputname1" aria-describedby="nameHelp" placeholder="Enter a description"/>
                    
                </div>
                <button type="submit" onClick={submitForm} className="btn btn-primary">Submit</button>
            </form>
            
        
    )
}

export default AddBlog
