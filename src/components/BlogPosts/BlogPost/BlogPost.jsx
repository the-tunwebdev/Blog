import React from 'react'
import './BlogPosts.css'
import { useHistory } from "react-router-dom";
function BlogPost({title,name,time,image,description}) {
    const history=useHistory()
    return (
        
        
        <div className="card">
                <h2>{title}</h2>
                <h5>{name}, {time}</h5>
                
                {
                    image ?  
                    <div>
                        <img src={image} className="fakeimg" style={{height: '200px'}} />
                        <p>Some text..</p>
                        <p>{description}</p>


                    </div>:
                    <div>
                        <p>Some text..</p>
                        <p>{description}</p>
                    </div>
                    
                }
                <button type="button" onClick={()=>history.push(`/adminblog/${name}`)} class="btn btn-info">See {name}'s blogs</button>

               
               
                
           

        </div>
            
        
    )
}

export default BlogPost
