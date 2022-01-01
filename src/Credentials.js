import React from 'react'
import './Credentials.css'
import pic1 from './responsivewebdesign.jpg'
import pic2 from './javascript.jpg'
import pic3 from './python.jpg'


function Credentials() {
    return (
        <div className='credentials'>
            <div className='credentials__title'>
                <h1>FreeCodeCamp Certificates</h1>
            </div>

            <div className='cert__img'>
            <h2>Responsive Web Design</h2>
                    <img 
                    src={pic1} 
                    alt="" 
                    width="1000" height="300"
                   
                    />
                    <h2>Javascript Algorithms & Data Structures</h2>
                    <img 
                    src={pic2} 
                    alt="" 
                    width="1000" height="300"
                    /> 
                    
                    <h2>Scientific Computing with Python</h2>
                    <img 
                    src={pic3} 
                    alt="" 
                    width="1000" height="300"
                    /> 
                    
                 </div>

                 
                 
             </div>
       
    )
}

export default Credentials



