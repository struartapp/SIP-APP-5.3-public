'use client'

import React, { useState } from 'react';
import Link from 'next/link';

export default function Validate() {
  // const [allSelected, setAllSelected] = useState(false);

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
      // if (d === 0 || t === 0 || l === 0 || s === 0) {
      //   // If any input value is zero, set allSelected state to true
      //  setAllSelected(true);
      // return;
      // }
        
      
      const AcG = 2.0 * Math.pow((d-t),2)/Math.pow((d-2*t),2) * 1000 * (d - 2 * t)
      const EI = 3800 * 1000 * (Math.pow(d, 3) - Math.pow(d - 2 * t, 3)) / 12
      const EIREIN = 100 * 11000 * (Math.pow(d - 2 * t, 3)) / 12
      const LSmm = s * 1000
      const WS = l / 100
      const WSST = 0.25 + l /100
      const BEFF = Math.tanh(1.57 * Math.sqrt(3800 / (3800 / 2 / (1 + .24))) * (1200 - 100) / (LSmm)) / ((1.57 * 1 / LSmm) * Math.sqrt(3800 / (3800 / 2 / (1 + .24))));

     const Deflection = 3.3 * 5 * WS * Math.pow(LSmm, 4) / 384 / EI + 8 * WS * Math.pow(LSmm, 2) / 8 / AcG;
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
        if (Deflection <= l * 1000 / 250 && Deflection <= 12 && DFST <=8 ) {
            document.getElementById("Deflection").value = Deflection.toFixed(1);
            document.getElementById("2SPDeflection").value = D2SPAN.toFixed(1);
            document.getElementById("REINDeflection").value = REINDeflection.toFixed(1);
            document.getElementById("REINDeflection2SP").value = REINDeflection2SP.toFixed(1);
            // document.getElementById("DEFST").value = DEFST.toFixed(1);
        }
  
        else if (D2SPAN <= l * 1000 / 250 && D2SPAN <= 12 && DFST2SP <= 8) {
            document.getElementById("Deflection").value = DHIGH;
            document.getElementById("2SPDeflection").value = D2SPAN.toFixed(1);
            document.getElementById("REINDeflection").value = REINDeflection.toFixed(1);
            document.getElementById("REINDeflection2SP").value = REINDeflection2SP.toFixed(1);
          } 
                       
            else if (REINDeflection <= l * 1000 / 250 && REINDeflection <= 12 && REINDFST <= 8) {
            document.getElementById("Deflection").value = DHIGH;
            document.getElementById("2SPDeflection").value = DHIGH1;
            document.getElementById("REINDeflection").value = REINDeflection.toFixed(1);
            document.getElementById("REINDeflection2SP").value = REINDeflection2SP.toFixed(1);
          }
           else if (REINDeflection2SP <= l * 1000 / 250 && REINDeflection2SP <= 12 && REINDFST2SP <=8 ) {
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
                

  //          setAllSelected(false);


        // Display the result
        
         // Display the results
         document.getElementById("resultd").textContent = `depth(mm): ${d.toFixed(0)}`;
         document.getElementById("resultt").textContent = `face 't'(mm):   ${t.toFixed(0)}`;
         document.getElementById("resultl").textContent = `loading (kg/m²):  ${l.toFixed(0)}`;
         document.getElementById("results1").textContent = `span(m): ${s.toFixed(2)}`;
        
         
    //      document.getElementById("resultAcG").textContent = `ACG: ${AcG.toFixed(2)}`;
    //      document.getElementById("resultEI").textContent = `EI: ${EI.toFixed(2)}`;
    //      document.getElementById("resultEIREIN").textContent = `EIREIN: ${EIREIN.toFixed(2)}`;
    //      document.getElementById("resultLSmm").textContent = `LSmm: ${LSmm.toFixed(2)}`;
    //      document.getElementById("resultWS").textContent = `WS: ${WS.toFixed(2)}`;
    //      document.getElementById("resultBEFF").textContent = `BEFF: ${BEFF.toFixed(2)}`;
    //      document.getElementById("resultDeflection").textContent = `Deflection: ${Deflection.toFixed(2)}`;
    //      document.getElementById("resultREINDeflection").textContent = `REINDeflection: ${REINDeflection.toFixed(2)}`;
    //      document.getElementById("resultREINDeflection2SP").textContent = `REINDeflection2SP: ${REINDeflection2SP.toFixed(2)}`;
    //      document.getElementById("resultD2SPAN").textContent = `D2SPAN: ${D2SPAN.toFixed(2)}`;

    // document.getElementById("resultDFST").textContent = `DFST: ${DFST.toFixed(2)}`;
    // document.getElementById("resultREINDFST").textContent = `REINDFST: ${REINDFST.toFixed(2)}`;
    // document.getElementById("resultDFST2SP").textContent = `DFST2SP: ${DFST2SP.toFixed(2)}`;
    // document.getElementById("resultREINDFST2SP").textContent = `REINDFST2SP: ${REINDFST2SP.toFixed(2)}`;
    
  };
   

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
<div class="rounded overflow-hidden text-center  bg-clip-border bg-gradient-to-b p-3 from-yellow-200 to-white w-96 h-42 rounded-sd shadow-xl shadow-yellow-600 border-2 border-x-2 border-orange-800" style={{
    fontSize: '17px',   }} >     
              
          <ul>
            <li>
            <div class = "flex justify-center py-4" >       
            <div class="max-w-sm h-18 p-4 t-6 rounded overflow-hidden bg-gradient-to-b  from-white to-orange-400 w-96 shadow-xl shadow-yellow-600  border-orange-800  animate-spin-fast " style={{
    fontSize: '17px',   }} >
            <Link href="">STRUCTURALLY INSULATED PANELS (SIPS)<br />
            <strong>FLOOR</strong>PANEL SELECTION</Link> </div></div>
         </li>
       
            </ul>

          
              <br />
              <div><p align = "center"> Enter parameters and calculate deflection. 
              Select Panel thickness (depth), face thickness,
              loading, span and pitch. Results output below.</p> </div> 
          <ul>
            <li>
            <div class = "flex justify-center py-4" >       
            <div class="max-w-sm h-18 p-4 t-6 rounded overflow-hidden bg-gradient-to-b  from-white to-orange-500 w-96 shadow-xl shadow-yellow-600  border-orange-800 hover:text-white style" style={{
    fontSize: '17px',   }} >
            <Link href="/Home" >Navigate to Home Page</Link> </div></div>
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
  
  <div class="px-2 py-1 flex justify-center">
            <div class="max-w-sm rounded overflow-hidden  bg-white bg-gradient-to-b  from-yellow-200 p-3 to-white w-96   shadow-xl shadow-yellow-600 border-2 border-orange-800 ">
  <img class="w-full " src="/230113-SIPS-CHP2-images-Fig-2-3-2-Roof-Panel-Example-Bending-APP-Section.jpg" ></img>
 
      <form name="input_form" onSubmit={(e) => { e.preventDefault(); handleCalculate(); }}>
      <select id="depth" class="max-w-sm h-12 p-1 t-6 rounded overflow-hidden bg-gradient-to-b from-white to-yellow-400 w-80 shadow-xl shadow-yellow-600  border-orange-800  style" style={{
    fontSize: '15px',   }}  onChange={handleCalculate}>
        <option value="" disabled selected>Select Thickness (depth) of SIP Panel, d</option>

         <option value={95.0}>95mm SIPit/Sips UK</option>
         <option value={97.0}>97mm Future SIPs</option>
         <option value={100.0}>100mm Hemsec</option>
         <option value={110.0}>110mm SBS</option>
         <option value={120.0}>120mm SIPit/Eco SIP </option>
         <option value={122.0}>122mm Future SIPs</option>
         <option value={125.0}>125mm SBS/Hemsec</option>
         <option value={142.0}>142mm Kingspan</option>
         <option value={145.0}>145mm SIPit/Eco SIP/Sips UK </option>
         <option value={147.0}>147mm Future SIPs</option>
         <option value={150.0}>150mm SBS/Hemsec</option>
         <option value={170.0}>170mm SIPit/EcoSIPs/Sips UK</option>
         <option value={172.0}>172mm Kingspan/Future SIPs</option>
         <option value={175.0}>175mm SBS/Hemsec</option>
         <option value={195.0}>195mm SIPit/EcoSIP</option>
         <option value={197.0}>197mm Future SIPs</option>
         <option value={200.0}>200mm SBS/Hemsec/Future SIPs</option>
         <option value={220.0}>220mm SIPit/EcoSIP </option>
         <option value={225.0}>225mm SBS/Hemsec</option>
         <option value={245.0}>245mm SIPit</option>
         <option value={250.0}>250mm SBS</option>
         
                     </select>
                     <br /><br />
                    {/* Other input fields and dropdowns */}
                    <select id="facet" class="max-w-sm h-12 p-1 t-6 rounded overflow-hidden bg-gradient-to-b from-white to-yellow-400 w-80 shadow-xl shadow-yellow-600  border-orange-800  style" style={{
    fontSize: '15px',   }} onChange={handleCalculate}>
        <option value="" disabled selected>Select Face Thickness, t</option>
       
        <option value={11.0}>11mm SBS/SIPit/Future SIPs</option>
        <option value={12.0}>12mm</option>
        <option value={15.0}>15mm Kingspan/Hemsec</option>
                    </select></form>
  </div>
  <div>
    
  </div>
</div>


                    <br /><br />
            <div class = "px-1 py-2 flex justify-center" >       
            <div class="max-w-sm rounded overflow-hidden  bg-white bg-gradient-to-b  from-yellow-100 to-white   shadow-xl shadow-yellow-600 border-2 border-orange-800">
  <img class="w-full" src="/240228-floor-panel-32-32-32.jpg" ></img>
  <img class="w-full" src="/240301_Two_or_more_span_panel_elevation-33.jpg" ></img><br />
  <div class=" right-2 px-2 py-2">
                    <form name="input_form" onSubmit={(e) => { e.preventDefault(); handleCalculate(); }}>
                    <select id="Loading" class="max-w-sm h-12 p-1 t-6 rounded overflow-hidden bg-gradient-to-b from-white to-yellow-400 w-80 shadow-xl shadow-yellow-600  border-orange-800  style" style={{
    fontSize: '15px',   }} onChange={handleCalculate}>
         <option value="" disabled selected>Select Loading</option>
         <option value={50.0}>50kg/m² Domestic/Office light finishes</option>
         <option value={65.0}>65kg/m² Light + U/floor heating (no screed)</option>
         <option value={150.0}>150kg/m² 65mm screed + U/Floor heating</option>
         
    </select>
    </form>
 
    <br /><i><strong>Input roof panel loading from options</strong></i>&nbsp;
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
            <div class = "px-1 py-2 flex justify-center" >       
            <div class="max-w-sm rounded overflow-hidden  bg-white bg-gradient-to-b  from-yellow-100 to-white   shadow-xl shadow-yellow-600 border-2 border-orange-800">
  {/* <img class="w-full" src="https://i.postimg.cc/KzcCdds6/230113-SIPS-CHP2-images-Fig-2-3-2-Roof-Panel-Example-Bending-APP-Section.jpg" ></img> */}
  <div class="px-2 py-4">
  <select id="sterm" class="max-w-sm h-12 p-1 t-6 rounded overflow-hidden bg-gradient-to-b from-white to-yellow-400 w-80 shadow-xl shadow-yellow-600  border-orange-800  style" style={{
    fontSize: '15px',   }}  onChange={handleCalculate}>
                    <option value="" disabled selected>Select Span of SIP Panel, L</option>
              

         <option value={0.75}>0.75m</option>
         <option value={1.00}>1.00m</option>
         <option value={1.25}>1.25m</option>
         <option value={1.50}>1.50m</option>
         <option value={1.75}>1.75m</option>
         <option value={2.00}>2.00m</option>
         <option value={2.25}>2.25m</option>
         <option value={2.40}>2.40m</option>
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
        <div class ="px-1 py-2 flex justify-center">
        <div class="max-w-sm rounded overflow-hidden  bg-white bg-gradient-to-b  from-yellow-100 to-white   0 shadow-xl shadow-yellow-600 border-2 border-orange-800">
        <div class="flex px-6 py-1">
    <div className = "text-red-500 font-semibold border-blue-500" >
      <p><i>It is strongly recommended for floors<br /> to have solid timber splines (i.e. reinforced)
        in case of panel damp <br />degredation or damage from use.</i>
      </p>
  <div class="flex px-6 py-4">

  <button class="max-w-sm h-10 p-2 text-black font-medium t-6 rounded overflow-hidden bg-gradient-to-b  from-white to-red-500 w-48 shadow-xl shadow-yellow-600  border-orange-800 hover:text-white" style={{ fontSize: '14px',   }} onClick={handleClear}><strong>Clear</strong></button>
  </div>
  <div className = "text-black font-normal" >
  <div id="results" class="px-6 py-2">
            <div class = "max-w-sm h-8 t-6 p-1 text-right rounded overflow-hidden bg-gradient-to-b  from-white to-orange-200 w-48 shadow-xl shadow-yellow-600  border-orange-800 hover:text-white"id="resultd" > </div>
            <div class = "max-w-sm h-8 t-6 p-1 text-right rounded overflow-hidden bg-gradient-to-b  from-white to-orange-200 w-48 shadow-xl shadow-yellow-600  border-orange-800 hover:text-white"id="resultt"> </div>
            <div class = "max-w-sm h-8 t-6 p-1 text-right rounded overflow-hidden bg-gradient-to-b  from-white to-orange-200 w-48 shadow-xl shadow-yellow-600  border-orange-800 hover:text-white"id="resultl"></div>
            <div class = "max-w-sm h-8 t-6 p-1 text-right rounded overflow-hidden bg-gradient-to-b  from-white to-orange-200 w-48 shadow-xl shadow-yellow-600  border-orange-800 hover:text-white"id="results1"></div></div></div>
    
 
      </div></div>
 <div class="px-4 py-4">
  <input className="placeholder:text-red-800 text-center bg-stone-100  border-blue-800 rounded-sd w-72 h-7 pr-3 shadow-lg border-2 hover:border-2 hover:border-red-400 hover:bg-yellow-100" placeholder="Deflection: SIP splines" type="text" id="Deflection" size={30} /> mm
  <br />Deflection (Single Span)
  <br /><br />
  <input className="placeholder:text-red-800 text-center bg-stone-100  border-blue-800 rounded-sd w-72 h-7 pr-3 shadow-lg border-2 hover:border-2 hover:border-red-400 hover:bg-yellow-100" placeholder="Deflection: SIP Splines Multispan" type="text" id="2SPDeflection" size={30} /> mm
  <br />Deflection (Two Span or multiple span)
  <br /><br />
  <input className="placeholder:text-red-800 text-center bg-stone-100  border-blue-800 rounded-sd w-72 h-7 pr-3 shadow-lg border-2 hover:border-2 hover:border-red-400 hover:bg-yellow-100" placeholder="Deflection: Timber splines" type="text" id="REINDeflection" size={30} /> mm
  <br />Reinforced Deflection (Reinforced with solid timber splines in joints)
  <br /><br />
  <input className="placeholder:text-red-800 text-center bg-stone-100  border-blue-800 rounded-sd w-72 h-7 pr-3 shadow-lg border-2 hover:border-2 hover:border-red-400 hover:bg-yellow-100" placeholder="Deflection: Timber splines Multispan" type="text" id="REINDeflection2SP" size={30} /> mm
  <br />Reinforced Deflection (Two Span or Multiple Span &amp; Reinforced with solid timber splines in joints)   
  <img class="w-full " src="/240301_Panel_Sections_Standard_Reinforced.jpg" ></img>

  </div></div></div>


          
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