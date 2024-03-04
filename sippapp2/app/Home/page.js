'use client'

// import Deflection from './Home/Deflection';
import Link from 'next/link'

export default function App () {
  return (
    <main>


<div class=" px-1 py-2 flex justify-center">

<div class="rounded overflow-hidden text-center  bg-clip-border bg-gradient-to-b p-6 from-yellow-200 to-white w-96 h-42 rounded-sd shadow-xl shadow-yellow-600 border-8 border-x-2 border-orange-800" style={{
    fontSize: '17px',   }} >     
     <ul>
            <li>
            <div class = "flex justify-center py-4" >       
            <div class="max-w-sm h-18 p-4 t-6 rounded overflow-hidden bg-gradient-to-b  from-white to-orange-400 w-96 shadow-xl shadow-yellow-600  border-orange-800 animate-spin-fast " style={{
    fontSize: '17px',   }} >
            <Link href="">STRUCTURALLY INSULATED PANELS (SIPS)<br />
            UNIVERSAL SELECTION APP FOR 'SIPS' 
            ROOF AND FLOOR PANELS </Link> </div></div>
         </li>
       
            </ul>
 
    {/* <img class="w-full opacity-40" src="/240228_Colon_Cover-royal-app-cover.jpg" ></img> */}
    <br />   
  
  
              
        <p> For end-users, architects and estimators, 
         without structural knowledge.<br /><br />
         <i>App design: Hugh Morrison </i></p> 
         
        <ul>
          <li>
            <div class ="text-red-600 font-bold">
          <Link href="https://struartapp.com/" rel="noopener noreferrer" target="_blank" class ="hover:text-white">www.struartapp.com</Link></div>
          </li>
         </ul>
         <ul>
            <li>
            <div class = "px-1 py-2 flex justify-center" >       
            <div class="max-w-sm h-18 p-2 t-6 rounded overflow-hidden bg-gradient-to-b  from-white to-orange-500 w-96 shadow-xl shadow-yellow-600  border-orange-800 hover:text-white style" style={{
    fontSize: '17px',   }} >
            <Link href="/Floordeflection">Navigate to Floor Panel Selection</Link> </div></div>
         </li>
         <li>
         <div class = "flex justify-center py-4 " >       
         <div class="max-w-sm h-18 p-4 t-6 rounded overflow-hidden bg-gradient-to-b  from-white to-orange-500 w-96 shadow-xl shadow-yellow-600  border-orange-800 hover:text-white style" style={{
    fontSize: '17px',   }} >
            <Link href="/Deflection">Navigate to Roof Panel Selection</Link> </div></div>
            </li>
            </ul>
      
            </div>   </div>
<br />



           
            <div class = "px-1 py-2 flex justify-center" >       
            <div class="max-w-sm rounded overflow-hidden p-3 bg-gradient-to-b  from-white to-yellow-200 w-96 shadow-xl shadow-yellow-600 border-2 border-orange-800">
  <img class="w-full opacity-80" src="/app-background.jpg" ></img>
 
  <br />
  <p>This is a simplified method which helps to select SIPs panels with orientated strand board faces (OSB). 
   In most instances the governing criterion for design is the permanent deflection or sag which occurs from the self weight of the built up roof or floor (loading). 
    This will include all elements which make up the component: SIP panel self weight, battens, cladding and internal skimmed plasterboard, or other, finishes. <br />
    </p></div></div> 
  
    <br /><div class = "px-1 py-2 flex justify-center" >       
            <div class="max-w-sm rounded overflow-hidden p-3  bg-gradient-to-b from-white to-yellow-200  w-96   shadow-xl shadow-yellow-600 border-2 border-orange-800">
  <img class="w-full " src="/230113-SIPS-CHP2-images-Fig-2-3-2-Roof-Panel-Example-Bending-App-Elevation_Fig 2.3.1 Slope Length of Panel copy.jpg" ></img>
 <br />
  <strong>LOADING (SELF WEIGHT AND FINISHES):</strong> <br />Loading does not include any imposed (live) loads: comprising all loading which results from snow or wind for roofs or furniture, partitions or occupants acting on floors.<br />
  These are omitted for initial SIP panel selection, on the basis that the most influential 
  factor in the structural action of SIPs roof panels, and generally on floors, is the permanent sag under the action of self weight.<br />    </div></div>

  
  <br /> <div class = "px-1 py-2 flex justify-center" >       
            <div class="max-w-sm rounded overflow-hidden p-3  bg-gradient-to-b  from-white to-yellow-200 w-96  shadow-xl shadow-yellow-600 border-2 border-orange-800">
  <img class="w-full " src="/230113-SIPS-CHP2-images-Fig-2-3-2-Roof-Panel-Example-Bending-APP-Section.jpg" ></img>
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
  
<div class = "px-1 py-2 flex justify-center" >       
            <div class="max-w-sm rounded overflow-hidden p-3  bg-gradient-to-b  from-white to-yellow-200 w-96   shadow-xl shadow-yellow-600 border-2 border-orange-800">
            <img class="w-full " src="/240301_Two_or_more_span_panel_elevation-33.jpg" ></img>
  <br />
  <p><strong>CALCULATION:</strong>  Find resulting deflections by selecting input values.<br /><br />
  <i>Note that the panel properties assumed <br />
  are conservative, yielding marginally<br /> shorter spans than comparable
  <br />manufacturers' load span tables.</i><br /><br />
  <i>If the following criteria are not met, or input values are missing, 
  the calculated deflection<br /> is shown as 
  <strong> "PANEL INADEQUATE"</strong> <br /><br /></i>
   ● Deflection is greater than a ratio<br />
   &nbsp;&nbsp; determined from: Span/deflection <br />
   &nbsp;&nbsp; greater than a value of 250 <br />
   &nbsp;&nbsp; (the limit to avoid plaster cracking).<br /><br />
  ● Deflection is greater than 15mm for roofs:<br />&nbsp;&nbsp; 
  (12mm for floors under permanent loading).<br />&nbsp;&nbsp; 
  Rule of thumb value based on experience.<br /><br />
  ● Deflection of floor panels based on<br />&nbsp;&nbsp; <i>stiffer,
  instantaneous properties</i>,<br />&nbsp;&nbsp;  is greater than 8mm:
  Floor panels <br />&nbsp;&nbsp;&nbsp;are subject to resonance or <i>'liveliness'</i>.
  <br />&nbsp;&nbsp; which can cause discomfort.</p>
  
  
  <br />
  
  <img class="w-full " src="/240301_Panel_Sections_Standard_Reinforced.jpg" ></img>
  
  </div></div>


  <br /><div class = " px-1 py-2 flex justify-center" >       
            <div class="max-w-sm rounded overflow-hidden p-3 bg-gradient-to-b  from-white to-red-200 w-96   shadow-xl shadow-yellow-600 border-2 border-orange-800">
  <p><br /> <strong>DISCLAIMER: </strong>

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
 


