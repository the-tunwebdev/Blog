import React from 'react'
import './BlogPosts.css'
function Blog({title,name,description,image,time}) {
    
    return (
        <div>
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
                
                
                

               
               
                
           

        </div>
    )
}

export default Blog
