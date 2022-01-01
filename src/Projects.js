import React from 'react'
import './Projects.css'
import Video from './netflix_demo.mp4'
import Video2 from './ecommerce_demo.mp4'




function Projects() {
    return (
        <div className='projects'>
            <div className='project__title'>
                <h1>Intnernet Clones</h1>
            </div>

            <div className='samples'>
            <video src={Video}
             width="600" 
             height="300" 
             controls="controls" 
             autoPlay={false} />
            </div>
        
            <div className='samples'>
            <video src={Video2}
             width="600" 
             height="300" 
             controls="controls" 
             autoPlay={false} />
            </div>

           
        
     
               
           
    </div>
    )
}

export default Projects
