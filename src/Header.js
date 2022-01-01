import React from 'react'

import './Header.css'
import { Link } from "react-router-dom"
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import SchoolIcon from '@material-ui/icons/School'

function Header() {
    return (       
        
        <div className='header'>
        
            <div
                className='gitHub__icon'>
                <GitHubIcon />
                <h4>My GitHub</h4>
           </div>
      
   
      

       <div className='linkedIn__icon'>
           <LinkedInIcon />
           <h4>My LinkedIn Profile</h4>
       </div>

       <div className='school__icon'>
           <SchoolIcon />
           <h4>View Certifications</h4>
       </div>
    

          

            <div className='header__left'>
                  
                <Link to = '/'>
                     <h2>Home</h2>
                </Link>
                    
                <Link to = '/projects'>
                    <h2>Projects</h2>
                </Link>

                <Link to='/credentials'>
                    <h2>Credentials</h2>
                </Link>
                    
                <Link to='contact'>
                    <h2>Contact</h2>
                </Link>
                    
                </div>

            </div>
        )
    }
                
export default Header
                            
                    
                
                    

            