'use client'

// import Deflection from './Home/Deflection';
import Link from 'next/link'

export default function App () {
  return (
    <main>


<div class=" px-6 py-6 flex">

<div class="rounded overflow-hidden text-center  bg-clip-border bg-gradient-to-b p-2 from-yellow-200 to-white w-96 h-42 rounded-sd shadow-xl shadow-yellow-600 border-8 border-x-2 border-orange-800" style={{
    fontSize: '17px',   }} >     
    
    <img class="w-full opacity-50" src="https://i.postimg.cc/3w0H19tW/240228-Colon-Cover-royal-app-cover.jpg" ></img>
    <br />        <p>   &nbsp;&nbsp;<strong>STRUCTURALLY INSULATED PANELS<br /> <br />
         UNIVERSAL SELECTION APP FOR 'SIPS' <br />
         ROOF AND FLOOR PANELS  <br /> <br />
          For end-users, architects and estimators, <br />
         not requiring structural knowledge.
        </strong></p> </div>   </div>
          <ul>
            <li>
            <div class="px-6 py-1"> 
            < div className="w-48 rounded overflow-hidden font-semibold text-center bg-gradient-to-t from-blue-200 to-white h-7 rounded-sd shadow-xl shadow-yellow-600 border-2  border-orange-800 "> 
            <Link href="/Deflection">Roof Panel Selection</Link> </div></div>
         </li>
         <li>
            <div class="px-6 py-1"> 
            < div className="w-48 rounded overflow-hidden font-semibold text-center bg-gradient-to-t from-blue-200 to-white h-7 rounded-sd shadow-xl shadow-yellow-600 border-2  border-orange-800 "> 
            <Link href="/Floordeflection">Floor Panel Selection</Link> </div></div>
         </li>
            </ul>
           
<br />



            <div class = "pl-6" >       
            <div class="max-w-sm rounded overflow-hidden p-3 bg-gradient-to-b  from-white to-yellow-200 w-96 shadow-xl shadow-yellow-600 border-2 border-orange-800">
  <img class="w-full opacity-50" src="https://i.postimg.cc/SxPPSv9d/app-background.jpg" ></img>
 
  <br />
  <p>This is a simplified method which helps to select SIPs panels with orientated strand board faces (OSB). 
   In most instances the governing criterion for design is the permanent deflection or sag which occurs from the self weight of the built up roof or floor (loading). 
    This will include all elements which make up the component: SIP panel self weight, battens, cladding and internal skimmed plasterboard, or other, finishes. <br />
    </p></div></div> 
  
    <br /><div class = "pl-6" >       
            <div class="max-w-sm rounded overflow-hidden p-3  bg-gradient-to-b from-white to-yellow-200  w-96   shadow-xl shadow-yellow-600 border-2 border-orange-800">
  <img class="w-full " src="https://i.postimg.cc/bJRVNskd/230113-SIPS-CHP2-images-Fig-2-3-2-Roof-Panel-Example-Bending-App-Elevation.jpg" ></img>
 <br />
  <strong>LOADING (SELF WEIGHT AND FINISHES):</strong> <br />Loading does not include any imposed (live) loads: comprising all loading which results from snow or wind for roofs or furniture, partitions or occupants acting on floors.<br />
  These are omitted for initial SIP panel selection, on the basis that the most influential 
  factor in the structural action of SIPs roof panels, and generally on floors, is the permanent sag under the action of self weight.<br />    </div></div>

  
  <br /> <div class = "pl-6" >       
            <div class="max-w-sm rounded overflow-hidden p-3  bg-gradient-to-b  from-white to-yellow-200 w-96  shadow-xl shadow-yellow-600 border-2 border-orange-800">
  <img class="w-full " src="https://i.postimg.cc/KzcCdds6/230113-SIPS-CHP2-images-Fig-2-3-2-Roof-Panel-Example-Bending-APP-Section.jpg" ></img>
 <br />
  <p><strong>PARAMETERS:</strong> Parameters needed for inputting into the calculation sheet are:<br /><br />
  ● Panel Thickness in mm <br />
   &nbsp;&nbsp;&nbsp; <i>Manufacturer specific <br />
   &nbsp;&nbsp;(e.g. Kingspan panel 142mm thick)</i><br /><br />
  ● Face Thickness in mm <br />
 &nbsp;&nbsp; <i>Manufacturer specific <br />
 &nbsp;&nbsp;(e.g. Kingspan panel 15mm thick)</i><br /><br />
  ● Panel Span in m <br />
    &nbsp;&nbsp; <i>This is the horizontal distance between <br />
    &nbsp;&nbsp; supporting walls or beams/purlins </i><br /><br />
  ● Pitch <br />
  &nbsp;&nbsp; <i>Roof panels: the slope or angle of a panel.  <br />
  &nbsp;&nbsp; Inclined to the horizontal. </i><br /><br />
  ● Loading in kg/m² <br />
  &nbsp;&nbsp; <i>Total of built up components: <br />
  &nbsp;&nbsp;SIP panel, cladding and internal finishes</i><br />
 </p></div></div>
<br />    
  
<div class = "pl-6" >       
            <div class="max-w-sm rounded overflow-hidden p-3  bg-gradient-to-b  from-white to-yellow-200 w-96   shadow-xl shadow-yellow-600 border-2 border-orange-800">
  <br />
  <p><strong>CALCULATION:</strong>  Find resulting deflections by selecting input values.<br /><br />
  <i>If the following criteria are not met, or input values are missing, 
  the calculated deflection<br /> is shown as 
  "PANEL INADEQUATE" <br /><br /></i>
   ● Deflection is greater than a ratio<br />
   &nbsp;&nbsp; determined from: Span/deflection <br />
   &nbsp;&nbsp; greater than a value of 250 <br />
   &nbsp;&nbsp; (the limit to avoid plaster cracking).<br /><br />
  ● Deflection is greater than 15mm:<br />&nbsp;&nbsp; 
  Rule of thumb value based on experience</p><br /><br />
  </div></div>


  <br /><div class = "pl-6" >       
            <div class="max-w-sm rounded overflow-hidden p-3 bg-gradient-to-b  from-white to-yellow-200 w-96   shadow-xl shadow-yellow-600 border-2 border-orange-800">
  <p><br /> <strong>DISCLAIMER:</strong>

  The calculations are based on conservative assumptions, on panels with Polyurethane foam cores (PUR); 
  the reduced 'creep' in EPS or XPS fores will exhibit reduced deflections. 
   Creep (phenomenum of gradual increase in sag over long periods) assumes conservative values.
   <i>It is advisable to seek the advice of a structural engineer, experienced in SIPs design, for more 
     comprehensive checks.</i><br /><br />
 </p></div></div>
<br />    
   
 
 
    </main>

) 





}
 


