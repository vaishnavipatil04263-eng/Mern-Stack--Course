
 import React from 'react'
 
 const AuthNavBar = () => {
   return (
     <div className='d-flex my-2'>
      <div className='mx-5'>
        <h4>LOGO</h4>

      </div>
        <div className='mx-5'>
        <h4> <a href='/dashboard'>Dashboard</a></h4>

      </div>
        <div className='mx-5'>
        <h4><a href='/item'>Items</a> </h4>

      </div>
       
     </div>
   )
 }
 
 export default AuthNavBar;
 