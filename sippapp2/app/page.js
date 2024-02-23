'use client'

// import Deflection from './Home/Deflection';
import Link from 'next/link'

export default function App () {
  return (
    <main>


    <main className="flex min-h-screen flex-col text-left justify-between p-16 ">
 
     <div className="test-slate-950bg-clip-border bg-gradient-to-r from-orange-500 to-yellow-200 min-w-0 h-48 rounded-md shadow-xl shadow-blue-950/50 border-1 border-l-blue-950 border-rose-950">
      <br /><p>   &nbsp;&nbsp;<strong>GENERAL PURPOSE APP TO DETERMINE SIP PANEL SIZES<br />
          &nbsp;&nbsp;FROM SPANS BASED ON LIMITING DEFLECTIONS. <br />
          &nbsp;&nbsp;For end-users, architects and estimators, <br />
          &nbsp;&nbsp;not requiring structural knowledge.
        </strong></p><br />
        
      
 
<ul>
  <li>
    <Link href="/Deflection">Roof Panel Selection</Link>
  </li>
  <li>
    <Link href="/Floordeflection">Floor Panel Selection</Link>
  </li>
{/* <li>
    <Link href="/Home/components/Simplecalc">Demo Calculation</Link>
  </li> */}
</ul>
 </div>
 <div>
 <br /><br />

 <p>This is a simplified method which helps to select SIPs panels with orientated strand board faces (OSB). 
   In most instances the governing criterion for design is the permanent deflection or sag which occurs from the self weight of the built up roof or floor (loading). 
    This will include all elements which make up the component: SIP panel self weight, battens, cladding and internal skimmed plasterboard, or other, finishes. <br />
  </p><p><span className="text-center bg-orange-400 w-44 h-15 rounded-md shadow-lg bg-opacity-70">SELF WEIGHT (LOADING)</span> </p>
   Loading does not include any imposed (live) loads: comprising all loading which results from snow or wind for roofs or furniture, partitions or occupants acting on floors.<br />
  These are omitted for initial SIP panel selection, on the basis that the most influential 
  factor in the structural action of SIPs roof panels, and generally on floors, is the permanent sag under the action of self weight.<br />
 <p /><p><span className="text-center bg-orange-400 w-44 h-15 rounded-md shadow-lg bg-opacity-70">PARAMETERS</span> </p>
 Parameters needed for inputting into the calculation sheet are:<br /><br />
   <img className="float-right right-4 w-52 drop-shadow-lg" src="https://i.postimg.cc/KzcCdds6/230113-SIPS-CHP2-images-Fig-2-3-2-Roof-Panel-Example-Bending-APP-Section.jpg" />
  ● Panel Thickness in mm <br />
   &nbsp;&nbsp; <i>Manufacturer specific (e.g. Kingspan panel 142mm thick)</i><br /><br />
  ● Face Thickness in mm <br />
 &nbsp;&nbsp; <i>Manufacturer specific (e.g. Kingspan panel 142mm thick)</i><br /><br />
  ● Panel Span in m <br />
  <div>  <img className="float-right right-4 w-52 drop-shadow-lg" src="https://i.postimg.cc/bJRVNskd/230113-SIPS-CHP2-images-Fig-2-3-2-Roof-Panel-Example-Bending-App-Elevation.jpg" /></div>
   &nbsp;&nbsp; <i>This is the horizontal distance between supporting walls or beams/purlins </i><br /><br />
  ● Pitch <br />
  &nbsp;&nbsp; <i>This is the slope or angle of a panel to the horizontal</i><br /><br />
  ● Loading in kg/m² <br />
  &nbsp;&nbsp; <i>Total of built up components: SIP panel, cladding and internal finishes</i><br />
 <p><span className="text-center bg-orange-400 w-44 h-15 rounded-md shadow-lg bg-opacity-70">CALCULATION</span></p>
  Find resulting deflections by clicking 'Calculate Permanent Deflection'.<br /><br />
  <i>If the following criteria are not met, the calculated deflection is not shown:<br /><br /></i>
   ● Deflection is greater than a ratio determined from:<br />&nbsp;&nbsp; 
   Span/deflection greater than a value of 250 (the limit to avoid plaster cracking)<br /><br />
  ● Deflection is greater than 15mm:<br />&nbsp;&nbsp; 
  Rule of thumb value based on experience<br />
   <p><span className="text-center bg-orange-400 w-44 h-15 rounded-md shadow-lg bg-opacity-70">DISCLAIMER</span> </p>
   The calculations are based on conservative assumptions, on panels with Polyurethane foam cores (PUR); 
  the reduced 'creep' in EPS or XPS fores will exhibit reduced deflections. 
   Creep (phenomenum of gradual increase in sag over long periods) assumes conservative values.
   <i>It is advisable to seek the advice of a structural engineer, experienced in SIPs design, for more 
     comprehensive checks.</i><br /><br />
  <p />
 </div>
    </main>
    </main>


) 





}
 


