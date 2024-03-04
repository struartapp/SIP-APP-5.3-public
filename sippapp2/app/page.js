'use client'

// import Deflection from './Home/Deflection';
import Link from 'next/link'

export default function App () {
  return (
    <main>


<div class=" px-6 py-6 flex justify-center ">

<div class="rounded overflow-hidden text-center  bg-clip-border bg-gradient-to-b p-6 from-yellow-200 to-white w-96 h-42 rounded-sd shadow-xl shadow-yellow-600 border-8 border-x-2 border-orange-800" style={{
    fontSize: '13px',   }} >     
    
     <img class="w-full opacity-100 animate-spin-slow " src="/240301_Colon_Cover-royal-app-front-coverAPP.jpg" ></img>
    <br />   
    <ul>
            <li>
            <div class = "flex justify-center py-4" >       
            <div class=" h-18 p-4 t-6 rounded overflow-hidden bg-gradient-to-b  from-white to-yellow-200 w-96 shadow-xl shadow-yellow-600  border-orange-800 hover:text-white">
            <Link href="/Home">UNIVERSAL SELECTION APP FOR 'SIPS' 
            ROOF AND FLOOR PANELS <br /><br />Navigate to Home Page.</Link> </div></div>
         </li>
                     </ul> 
   
              
        <p> For end-users, architects and estimators, 
         without structural knowledge.<br /><br />
         <i>App design: Hugh Morrison </i></p> 
         
        
        <ul>
          <li>
            <div class ="text-red-600 font-bold">
          <Link href="https://struartapp.com/" rel="noopener noreferrer" target="_blank">www.struartapp.com</Link></div>
          </li>
         </ul>
        
          
                     </div>   </div>
<br />
</main>
  )
}

