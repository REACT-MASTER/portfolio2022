import React from 'react'
import './Home.css'
import me from './profile.png'

function Home() {
    return (
        <div className='home'>
            <div className='profilePic'>
                <img
                src={me}
                alt='David Archer'
                />
            <h1 className='profile__name'>Hello, I am David Archer</h1>
            
            

            
            </div>
            <div>
            <h2 className='profile__info'>I create responsive websites that are fast, easy to
            use, and built with best practices.</h2> 
            </div>

            <div className='front__end'>
            <img 
          
            src='https://tse4.mm.bing.net/th?id=OIP.ceRRzDPtki5UmRyFmvxZ0wHaD4&pid=Api&P=0&w=309&h=163' 
            alt=''/>

            

            </div>
        
        {/*    <div className='app__info'>
                <h4>I built this ap using React</h4>
            </div>
        */}
        
        </div>
    )
}

export default Home

