'use client'

import React, { useState } from 'react';
import Link from 'next/link';

export default function Validate() {
  const [allSelected, setAllSelected] = useState(false);

    const handleCalculate = () => {
      
        const l = parseFloat(document.getElementById("Loading").value);
        const d = parseFloat(document.getElementById("depth").value);
        const t = parseFloat(document.getElementById("facet").value);
        const s = parseFloat(document.getElementById("sterm").value);
        // const p = parseFloat(document.getElementById("pterm").value);

        // l = document.forms["input_form"]["load"].value;
        // d = document.forms["input_form"]["depth"].value;
        // t = document.forms["input_form"]["facet"].value;

     
          // Check if any of the input values are zero
      if (d === 0 || t === 0 || l === 0 || s === 0) {
        // If any input value is zero, set allSelected state to true
       setAllSelected(true);
      return;
      }
        
      
      const AcG = 2.3 * 1000 * (d - 2 * t)
      const EI = 3800 * 1000 * (Math.pow(d, 3) - Math.pow(d - 2 * t, 3)) / 12
      const EIREIN = 0.35 * 100 * 11000 * (Math.pow(d - 2 * t, 3)) / 12
      const LSmm = s * 1000
      const WS = l / 100
      const WSST = 0.25 + l /100
      const BEFF = Math.tanh(1.57 * Math.sqrt(3800 / (3800 / 2 / (1 + .24))) * (1200 - 100) / (LSmm)) / ((1.57 * 1 / LSmm) * Math.sqrt(3800 / (3800 / 2 / (1 + .24))));

     const Deflection = 3.3 * 5 * WS * Math.pow(LSmm, 4) / 384 / EI + 6.7 * WS * Math.pow(LSmm, 2) / 8 / AcG;
     const REINDeflection = 1.2 * 5 * WS * Math.pow(LSmm, 4) / 384 / (BEFF * EI / 3.3 / 1000 + EIREIN / 1.8) + WS * Math.pow(LSmm, 2) * (1 + 0.8) / 8 / (100 * (d - 2 * t)) / 690;
     const REINDeflection2SP = 0.6 * REINDeflection;
     const D2SPAN = 0.6 * Deflection;
     const DHIGH = "PANEL INADEQUATE";
     const DHIGH1 = "PANEL INADEQUATE";
     const DHIGH2 = "PANEL INADEQUATE";
     const D2SPREIN = "PANEL INADEQUATE";
     const DFST =  5 * WSST * Math.pow(LSmm, 4) / 384 / EI +  WSST * Math.pow(LSmm, 2) / 8 / AcG;
     const REINDFST = 1.2 * 5 * WS * Math.pow(LSmm, 4) / 384 / (BEFF * EI / 1000 + EIREIN / 1.8) + WS * Math.pow(LSmm, 2) / 8 / (100 * (d - 2 * t)) / 690;
     const DFST2SP = 0.6 * DFST;
     const REINDFST2SP = 0.6 * REINDFST
    //  const SHD =  5 * WS * Math.pow(LSmm, 4) / 384 / EI + WS * Math.pow(LSmm, 2) / 8 / AcG

    //  const Defshortterm =  5 * WS * Math.pow(LSmm, 4) / 384 / EI +   WS * Math.pow(LSmm, 2) / 8 / AcG;
    //  const REINDefshortterm = 1.2 * 5 * WS * Math.pow(LSmm, 4) / 384 / (BEFF * EI / 1000 + EIREIN / 1.8) + WS * Math.pow(LSmm, 2) * 1 / 8 / (100 * (d - 2 * t)) / 690;

   

        // Calculate deflection bending and shear included
        if (Deflection <= l * 1000 / 160 && Deflection <= 15 && DFST <=8 ) {
            document.getElementById("Deflection").value = Deflection.toFixed(1);
            document.getElementById("2SPDeflection").value = D2SPAN.toFixed(1);
            document.getElementById("REINDeflection").value = REINDeflection.toFixed(1);
            document.getElementById("REINDeflection2SP").value = REINDeflection2SP.toFixed(1);
            // document.getElementById("DEFST").value = DEFST.toFixed(1);
        }
  
        else if (D2SPAN <= l * 1000 / 250 && D2SPAN <= 15 && DFST2SP <= 8) {
            document.getElementById("Deflection").value = DHIGH;
            document.getElementById("2SPDeflection").value = D2SPAN.toFixed(1);
            document.getElementById("REINDeflection").value = REINDeflection.toFixed(1);
            document.getElementById("REINDeflection2SP").value = REINDeflection2SP.toFixed(1);
          } 
                       
            else if (REINDeflection <= l * 1000 / 250 && REINDeflection <= 15 && REINDFST <= 8) {
            document.getElementById("Deflection").value = DHIGH;
            document.getElementById("2SPDeflection").value = DHIGH1;
            document.getElementById("REINDeflection").value = REINDeflection.toFixed(1);
            document.getElementById("REINDeflection2SP").value = REINDeflection2SP.toFixed(1);
          }
           else if (REINDeflection2SP <= l * 1000 / 250 && REINDeflection2SP <= 15 && REINDFST2SP <=8 ) {
            document.getElementById("Deflection").value = DHIGH;
            document.getElementById("2SPDeflection").value = DHIGH1;
            document.getElementById("REINDeflection").value = DHIGH2;
            document.getElementById("REINDeflection2SP").value = REINDeflection2SP.toFixed(1);
          } else {
            document.getElementById("Deflection").value = DHIGH;
            document.getElementById("2SPDeflection").value = DHIGH1;
            document.getElementById("REINDeflection").value = DHIGH2;
            document.getElementById("REINDeflection2SP").value = D2SPREIN;
          } 
                

           setAllSelected(false);
  };

        // Display the result
        
         // Display the results
      // document.getElementById("depth").value = `depth: ${AcG.toFixed(2)}`
    // document.getElementById("resultAcG").textContent = `ACG: ${AcG.toFixed(2)}`;
    // document.getElementById("resultEI").textContent = `EI: ${EI.toFixed(2)}`;
    // document.getElementById("resultEIREIN").textContent = `EIREIN: ${EIREIN.toFixed(2)}`;
    // document.getElementById("resultLSmm").textContent = `LSmm: ${LSmm.toFixed(2)}`;
    // document.getElementById("resultWS").textContent = `WS: ${WS.toFixed(2)}`;
    // document.getElementById("resultBEFF").textContent = `BEFF: ${BEFF.toFixed(2)}`;
    // // document.getElementById("resultSHD").textContent = `SHD: ${SHD.toFixed(2)}`;
    // document.getElementById("resultDeflection").textContent = `Deflection: ${Deflection.toFixed(2)}`;
    // document.getElementById("resultREINDeflection").textContent = `REINDeflection: ${REINDeflection.toFixed(2)}`;
    // document.getElementById("resultREINDeflection2SP").textContent = `REINDeflection2SP: ${REINDeflection2SP.toFixed(2)}`;
    // document.getElementById("resultD2SPAN").textContent = `D2SPAN: ${D2SPAN.toFixed(2)}`;

    // document.getElementById("resultDFST").textContent = `DFST: ${DFST.toFixed(2)}`;
    // document.getElementById("resultREINDFST").textContent = `REINDFST: ${REINDFST.toFixed(2)}`;
    // document.getElementById("resultDFST2SP").textContent = `DFST2SP: ${DFST2SP.toFixed(2)}`;
    // document.getElementById("resultREINDFST2SP").textContent = `REINDFST2SP: ${REINDFST2SP.toFixed(2)}`;
    // document.getElementById("resultDefshortterm").textContent = `Defshortterm: ${Defshortterm.toFixed(2)}`;
    // document.getElementById("resultREINDefshortterm").textContent = `REINDefshortterm: ${REINDefshortterm.toFixed(2)}`;

   

    function handleClear(){  
      document.getElementById("Loading").value = "";
      document.getElementById("depth").value = "";
      document.getElementById("facet").value = "";
      document.getElementById("sterm").value = "";
    //   document.getElementById("pterm").value = "";
      document.getElementById("Deflection").value = "";
      document.getElementById("2SPDeflection").value = "";
      document.getElementById("REINDeflection").value = "";
      document.getElementById("REINDeflection2SP").value = "";
    };
  


       
    //calculate deflection bending and shear included
    

    return (

        <main>
        
        {/* // <link rel="stylesheet" href="style.css" />
       
      // <img src="https://i.postimg.cc/ydWm9H5c/231020-Colon-Cover-royal-paperback-APP-IMAGE-2.jpg" alt="Avatar" class="top w-full h-full opacity-5" /></div> */}

<div class=" px-6 py-6 flex justify-center">
<div class="rounded overflow-hidden text-center  bg-clip-border bg-gradient-to-b p-3 from-yellow-200 to-white w-96 h-42 rounded-sd shadow-xl shadow-yellow-600 border-8 border-x-2 border-orange-800" style={{
    fontSize: '17px',   }} >     
          <p><strong>STRUCTURALLY INSULATED PANELS (SIPS)<br />
              FLOOR PANEL SELECTION</strong><br /></p>
              <br />
              <div><p align = "center"> Enter parameters and calculate deflection. 
              Select Panel thickness (depth), face thickness,
              loading, and span. Results output below.<i>To navigate between pages <br /><strong>click buttons below.</strong></i></p> </div> </div>   </div>
          <ul>
            <li>
            <div class="px-6 py-1 flex justify-center"> 
            < div className="w-24 rounded overflow-hidden font-semibold text-center bg-gradient-to-t from-blue-200 to-white h-7 rounded-sd shadow-xl shadow-yellow-600 border-2  border-orange-800 "> 
            <Link href="/">Home Page</Link> </div></div>
         </li>
         <li>
            <div class="px-6 py-1 flex justify-center"> 
            < div className="w-48 rounded overflow-hidden font-semibold text-center bg-gradient-to-t from-blue-200 to-white h-7 rounded-sd shadow-xl shadow-yellow-600 border-2  border-orange-800 "> 
            <Link href="/Deflection">Roof Panel Selection</Link> </div></div>
         </li>
            </ul>
           
<br />
  
  <div class="px-6 py-4 flex justify-center">
            <div class="max-w-sm rounded overflow-hidden  bg-white bg-gradient-to-b  from-yellow-200 to-white w-96   shadow-xl shadow-yellow-600 border-2 border-orange-800 ">
  <img class="w-full " src="https://i.postimg.cc/KzcCdds6/230113-SIPS-CHP2-images-Fig-2-3-2-Roof-Panel-Example-Bending-APP-Section.jpg" ></img>
 
      <form name="input_form" onSubmit={(e) => { e.preventDefault(); handleCalculate(); }}>
      <select id="depth" className="relative left-2 bottom-3 font-semibold text-right bg-clip-border bg-gradient-to-b from-blue-200 to-white w-64 h-7 rounded-sd shadow-xl shadow-blue-950/50 border-2 border-blue-500 hover:bg-yellow-100 hover:border-spacing-6" onChange={handleCalculate}>
        <option value="" disabled selected>Select Thickness (depth) of SIP Panel, d</option>

         <option value={97.0}>97mm SIPIt Scotland</option>
         <option value={100.0}>100mm</option>
         <option value={110.0}>110mm SBS</option>
         <option value={119.0}>119mm SIPIt Scotland</option>
         <option value={125.0}>125mm SBS</option>
         <option value={142.0}>142mm Kingspan</option>
         <option value={144.0}>144mm SIPIt Scotland</option>
         <option value={150.0}>150mm SBS</option>
         <option value={172.0}>172mm Kingspan</option>
         <option value={175.0}>175mm SBS</option>
         <option value={194.0}>194mm SIPIt Scotland</option>
         <option value={200.0}>200mm</option>
         <option value={219.0}>219mm SIPIt Scotland</option>
         <option value={225.0}>225mm SBS</option>
         <option value={244.0}>244mm SIP It Scotland</option>
         <option value={250.0}>250mm SBS</option>
         
                     </select>
                     <br /><br />
                    {/* Other input fields and dropdowns */}
                    <select id="facet" className="relative left-2 bottom-3 font-semibold text-right bg-clip-border bg-gradient-to-b from-blue-200 to-white w-64 h-7 rounded-sd shadow-xl shadow-blue-950/50 border-2 border-blue-500 hover:bg-yellow-100 hover:border-spacing-6" onChange={handleCalculate}>
        <option value="" disabled selected>Select Face Thickness, t</option>
        <option value={11.0}>11mm SBS / SIPit Scotland</option>
        <option value={12.0}>12mm</option>
        <option value={15.0}>15mm Kingspan</option>
                    </select></form>
  </div>
  <div>
    
  </div>
</div>


                    <br /><br />
            <div class = "flex justify-center" >       
            <div class="max-w-sm rounded overflow-hidden  bg-white   shadow-xl shadow-yellow-600 border-2 border-orange-800">
  <img class="w-full" src="https://i.postimg.cc/L8J6yhMs/240228-floor-panel-32-32.jpg" ></img>
  <div class="relative right-2 px-6 py-4">
                    <form name="input_form" onSubmit={(e) => { e.preventDefault(); handleCalculate(); }}>
                    <select id="Loading" className="relative left-2 bottom-3 font-semibold text-right bg-clip-border bg-gradient-to-b from-blue-200 to-white w-64 h-7 rounded-sd shadow-xl shadow-blue-950/50 border-2 border-blue-500 hover:bg-yellow-100 hover:border-spacing-6" onChange={handleCalculate}>
         <option value="" disabled selected>Select Loading</option>
         <option value={50.0}>50kg/m² Domestic/Office light finishes</option>
         <option value={65.0}>65kg/m² Light + U/floor heating (no screed)</option>
         <option value={150.0}>150kg/m² 65mm screed + U/Floor heating</option>
         
    </select>
    </form>
 
    <i><strong>Input roof panel loading from options</strong></i>&nbsp;
  <br /> ● 50kg/m² - Typical timber joist floor loading.
  <br /> ● 65kg/m² - Typical with Underfloor heating (no screed).
  <br /> ● 150kg/m²- Typical with Underfloor heating and screed.

  <br /> <br />Live or imposed load for floors is<strong> not added</strong> for this long term loading check.
  For OSB SIP panels as floors the short term strength is generally not an issue, except in areas with exceptional loads such as plant.
  A maximum instaneous deflection of 8mm is assumed so that floor is not too lively. This would need checks by a structural engineer.<p />
  </div></div> 
  <div>
    
  </div>
</div>
                
             
    
            <br />
            <div class ="flex justify-center">
            <div class="max-w-sm rounded overflow-hidden  bg-white   shadow-xl shadow-yellow-600 border-2 border-orange-800 ">
  {/* <img class="w-full" src="https://i.postimg.cc/KzcCdds6/230113-SIPS-CHP2-images-Fig-2-3-2-Roof-Panel-Example-Bending-APP-Section.jpg" ></img> */}
  <div class="px-6 py-4">
  <select id="sterm" className="font-semibold text-right bg-clip-border bg-gradient-to-b  from-blue-200 to-white w-72 h-7 rounded-sd shadow-xl shadow-blue-950/50 border-2 border-blue-500 hover:bg-yellow-100 hover:border-spacing-6" onChange={handleCalculate}>
                    <option value="" disabled selected>Select Span of SIP Panel, L</option>
              

         <option value={0.75}>0.75m</option>
         <option value={1.00}>1.00m</option>
         <option value={1.25}>1.25m</option>
         <option value={1.50}>1.50m</option>
         <option value={1.75}>1.75m</option>
         <option value={2.00}>2.00m</option>
         <option value={2.25}>2.25m</option>
         <option value={2.50}>2.50m</option>
         <option value={2.75}>2.75m</option>
         <option value={3.00}>3.00m</option>
         <option value={3.25}>3.25m</option>
         <option value={3.50}>3.50m</option>
         <option value={3.75}>3.75m</option>
         <option value={4.00}>4.00m</option>
         <option value={4.25}>4.25m</option>
         <option value={4.50}>4.50m</option>
         <option value={4.75}>4.75m</option>
         <option value={5.00}>5.00m</option>
         <option value={5.25}>5.25m</option>
         <option value={5.50}>5.50m</option>
         <option value={5.75}>5.75m</option>
         <option value={6.00}>6.00m</option>

         
                     </select>
                     
                     {/* <div className="font-semibold text-center bg-clip-border bg-gradient-to-b from-blue-200 to-white w-64 h-7 rounded-sd shadow-xl shadow-blue-950/50 border-1 border-black">Panel Span, s (m)
    </div><br />
    <input className ="placeholder:text-blue font-semibold text-center bg-clip-border bg-gradient-to-b from-slate-200 to-white w-64 h-7 rounded-sd shadow-xl shadow-blue-950/50 border-1 border-black" placeholder="span..." type="text"  id="sterm" size="1" required/> */}
  <br /><br />
  <p>Span is the <strong><i>horizontal distance </i></strong>between supports. A long span is 4m or more.</p><br />



      
    {/* <div className="font-semibold text-center bg-clip-border bg-gradient-to-b from-blue-200 to-white w-64 h-7 rounded-sd shadow-xl shadow-blue-950/50 border-1 border-black"> Roof Pitch Degrees
    </div><br />
    <input className ="placeholder:text-blue font-semibold text-center bg-clip-border bg-gradient-to-b from-slate-200 to-white w-64 h-7 rounded-sd shadow-xl shadow-blue-950/50 border-1 border-black" placeholder="pitch..." type="text"  id="pterm" size="1" required/> */}
  {/* <br /><br />
    <p>Pitch is the <strong><i>roof angle to the horizontal</i></strong>.
    <br />(e.g 0&deg; is flat, 15-30&deg; is low pitch and 45-60&deg; is steep pitch)</p> */}
    </div></div> </div> <div><br /><br/>
        
  
                     
        <div>
        <div class ="flex justify-center">
        <div class="max-w-sm rounded overflow-hidden  bg-white  0 shadow-xl shadow-yellow-600 border-2 border-orange-800">
  {/* <img class="w-full" src="https://i.postimg.cc/KzcCdds6/230113-SIPS-CHP2-images-Fig-2-3-2-Roof-Panel-Example-Bending-APP-Section.jpg" ></img> */}
  <div class="flex px-6 py-4">

  <button className="placeholder:text-blue font-semibold text-center bg-clip-border bg-gradient-to-b from-red-400 to-white w-64 h-7 rounded-sd shadow-xl shadow-blue-950/50 border-2 border-blue-500 hover:bg-sky-700 hover:text-white" onClick={handleClear}>Clear</button>
  </div>
         
 <div class="px-4 py-8">
  <input className="placeholder:text-red-800 text-center bg-stone-100  border-blue-800 rounded-md w-56 h-7 pr-3 shadow-lg border-2" placeholder="Deflection: SIP splines" type="text" id="Deflection" size={30} /> mm
  <br />Deflection (Single Span)
  <br /><br />
  <input className="placeholder:text-red-800 text-center bg-stone-100  border-blue-800 rounded-md w-56 h-7 pr-3 shadow-lg border-2" placeholder="Deflection: SIP Splines Multispan" type="text" id="2SPDeflection" size={30} /> mm
  <br />Deflection (Two Span or multiple span)
  <br /><br />
  <input className="placeholder:text-red-800 text-center bg-stone-100  border-blue-800 rounded-md w-56 h-7 pr-3 shadow-lg border-2" placeholder="Deflection: Timber splines" type="text" id="REINDeflection" size={30} /> mm
  <br />Reinforced Deflection (Reinforced with solid timber splines in joints)
  <br /><br />
  <input className="placeholder:text-red-800 text-center bg-stone-100  border-blue-800 rounded-md w-56 h-7 pr-3 shadow-lg border-2" placeholder="Deflection: Timber splines Multispan" type="text" id="REINDeflection2SP" size={30} /> mm
  <br />Reinforced Deflection (Two Span or Multiple Span &amp; Reinforced with solid timber splines in joints)


  </div></div></div>


            {/* Result output */}
            {/* <p>  Result output</p>
            <div id="results">
                <div id="resultAcG"></div>
                <div id="resultEI"></div>
                <div id="resultEIREIN"></div>
                <div id="resultLSmm"></div>
                <div id="resultWS"></div>
                <div id="resultBEFF"></div>
                <div id="resultDeflection"></div>
                <div id="resultD2SPAN"></div>
                <div id="resultREINDeflection"></div>
                <div id="resultREINDeflection2SP"></div>
                <div id="resultDHIGH"></div>
                <div id="resultDHIGH1"></div>
                <div id="resultDHIGH2"></div>
                <div id="resultD2SPREIN"></div>
                <div id="resultDFST"></div>
                <div id="resultREINDFST"></div>
                <div id="resultDFST2SP"></div>
                <div id="resultREINDFST2SP"></div>
            </div> */}
            
            </div></div>
        <br />
        </main>
    );
}

{/* <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="https://i.postimg.cc/KzcCdds6/230113-SIPS-CHP2-images-Fig-2-3-2-Roof-Panel-Example-Bending-APP-Section.jpg" alt=""></img>
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
    </div>
</a> */}