'use client'

import Link from 'next/link'


export default function validate() {
    const handleCalculate = () => {

        // s = document.forms["input_form"]["sterm"].value;
        // p = document.forms["input_form"]["pterm"].value;
        
        // const s = document.getElementById('sterm').value;
        // const p = document.getElementById('pterm').value;

        const l = parseFloat(document.getElementById("Loading").value);
        const d = parseFloat(document.getElementById("depth").value);
        const t = parseFloat(document.getElementById("facet").value);
        const s = parseFloat(document.getElementById("sterm").value);
        const p = parseFloat(document.getElementById("pterm").value);

        // l = document.forms["input_form"]["load"].value;
        // d = document.forms["input_form"]["depth"].value;
        // t = document.forms["input_form"]["facet"].value;

        

      const AcG = 2.3 * 1000 * (d - 2 * t)
      const EI = 3800 * 1000 * (Math.pow(d, 3) - Math.pow(d - 2 * t, 3)) / 12
      const EIREIN = 0.35 * 100 * 11000 * (Math.pow(d - 2 * t, 3)) / 12
      const LSmm = s * 1000 / Math.cos(p / 57)
      const WS = l * Math.cos(p / 57) / 100
      const BEFF = Math.tanh(1.57 * Math.sqrt(3800 / (3800 / 2 / (1 + .24))) * (1200 - 100) / (LSmm)) / ((1.57 * 1 / LSmm) * Math.sqrt(3800 / (3800 / 2 / (1 + .24))))

       // BEFF = tanh(pi/2*(Bp-Bj)*sqrt(Ef/Gf)/L)/(pi/2**sqrt(Ef/Gf)/L)/L)
      //const Deflection = (l * Math.pow((Math.cos(p / 57)), 2))
      //const Deflection = 5.5 * 10 * Math.pow(s, 2) / 8 / Vst / (Math.cos(p / 57)) 
     //Deflection = (3.25 * 5 *1e10 * Math.pow((s / Math.cos(p / 57)),4) / 384 / EI) 
     
     const Deflection = 3.3 * 5 * WS * Math.pow(LSmm, 4) / 384 / EI + 6.7 * WS * Math.pow(LSmm, 2) / 8 / AcG
     const REINDeflection = 1.2 * 5 * WS * Math.pow(LSmm, 4) / 384 / (BEFF * EI / 3.3 / 1000 + EIREIN / 1.8) + WS * Math.pow(LSmm, 2) * (1 + 0.8) / 8 / (100 * (d - 2 * t)) / 690
     const REINDeflection2SP = 0.6 * REINDeflection
     const D2SPAN = 0.6 * Deflection;
     const DHIGH = "HIGH Try 2 Span Panel";
     const DHIGH1 = "HIGH Try Reinforced Panel";
     const DHIGH2 = "HIGH Try 2 Span Reinforced Panel"
     const D2SPREIN = "HIGH Try shorter Span"

        // Calculate deflection bending and shear included
        if (Deflection <= l * 1000 / 160 && Deflection <= 15) {
            document.getElementById("Deflection").value = Deflection.toFixed(1);
            document.getElementById("2SPDeflection").value = D2SPAN.toFixed(1);
            document.getElementById("REINDeflection").value = REINDeflection.toFixed(1);
            document.getElementById("REINDeflection2SP").value = REINDeflection2SP.toFixed(1);
          } else if (D2SPAN <= l * 1000 / 250 && D2SPAN <= 15) {
            document.getElementById("Deflection").value = DHIGH;
            document.getElementById("2SPDeflection").value = D2SPAN.toFixed(1);
            document.getElementById("REINDeflection").value = REINDeflection.toFixed(1);
            document.getElementById("REINDeflection2SP").value = REINDeflection2SP.toFixed(1);
          } else if (REINDeflection <= l * 1000 / 250 && REINDeflection <= 15) {
            document.getElementById("Deflection").value = DHIGH;
            document.getElementById("2SPDeflection").value = DHIGH1;
            document.getElementById("REINDeflection").value = REINDeflection.toFixed(1);
            document.getElementById("REINDeflection2SP").value = REINDeflection2SP.toFixed(1);
          } else if (REINDeflection2SP <= l * 1000 / 250 && REINDeflection2SP <= 15) {
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
                
        // Display the result
        
         // Display the results
    // document.getElementById("resultAcG").textContent = `ACG: ${AcG}`;
    // document.getElementById("resultEI").textContent = `EI: ${EI}`;
    // document.getElementById("resultEIREIN").textContent = `EIREIN: ${EIREIN}`;
    // document.getElementById("resultLSmm").textContent = `LSmm: ${LSmm}`;
    // document.getElementById("resultWS").textContent = `WS: ${WS}`;
    // document.getElementById("resultBEFF").textContent = `BEFF: ${BEFF}`;
    // document.getElementById("resultDeflection").textContent = `Deflection: ${Deflection}`;
    // document.getElementById("resultREINDeflection").textContent = `REINDeflection: ${REINDeflection}`;
    // document.getElementById("resultREINDeflection2SP").textContent = `REINDeflection2SP: ${REINDeflection2SP}`;
    // document.getElementById("resultD2SPAN").textContent = `D2SPAN: ${D2SPAN}`;
    // document.getElementById("resultDHIGH").textContent = DHIGH;
    // document.getElementById("resultDHIGH1").textContent = DHIGH1;
    // document.getElementById("resultDHIGH2").textContent = DHIGH2;
    // document.getElementById("resultD2SPREIN").textContent = D2SPREIN;

    };

    
    


       
    //calculate deflection bending and shear included
    

    return (

        <main>
        
        {/* // <link rel="stylesheet" href="style.css" />
        // <img src="https://i.postimg.cc/ydWm9H5c/231020-Colon-Cover-royal-paperback-APP-IMAGE-2.jpg" alt="Avatar" class="top w-full h-full opacity-5" /></div> */}
        <div className="</strong> bg-clip-border bg-gradient-to-r from-orange-500 to-yellow-100 w-96 h-32 rounded-md shadow-xl shadow-blue-950/50 border-3 border-l-blue-950 border-rose-950">
          <br /><p><strong>&nbsp;&nbsp;STRUCTURALLY INSULATED PANELS (SIPS)<br />
              &nbsp;&nbsp;FLOOR PANEL PERMANENT DEFLECTIONS<br />
              &nbsp;&nbsp;Enter parameters and calculate deflection, <br />
              &nbsp;&nbsp;By clicking CALCULATE button.</strong></p><strong> </strong> <br /><br />    </div><br />
            
          <ul>
            <li>
            < div className="</strong> bg-clip-border bg-gradient-to-r from-orange-500 to-yellow-100 w-32 h-10 rounded-md shadow-xl shadow-blue-950/50 border-3 border-l-blue-950 border-rose-950"> 
            <Link href="/">Home Page</Link> </div>
         </li>
            </ul>
           

  
            <div >
                         <br /></div>
                <form name="input_form" onSubmit={(e) => { e.preventDefault(); handleCalculate(); }}>
                    <select id="depth" className="relative bottom-0 right-0 bg-orange-400 h-15 rounded-md shadow-lg text-white" onChange={handleCalculate}>
                    <option value="" disabled selected>Select Depth of SIP Panel, d</option>
              

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
                    <select id="facet" className="relative bottom-0 right-0 bg-orange-400 h-15 rounded-md shadow-lg text-white" onChange={handleCalculate}>
        <option value="" disabled selected>Select Face Thickness, t</option>
        <option value={11.0}>11mm SBS / SIPit Scotland</option>
        <option value={12.0}>12mm</option>
        <option value={15.0}>15mm Kingspan</option>
                    </select>
                    <br /><br />
           <div>    
                    <select id="Loading" className="relative bottom-0 right-0 bg-orange-400 h-15 rounded-md shadow-lg text-white" onChange={handleCalculate}>
         <option value="" disabled selected>Select Loading</option>
         <option value={0.00}>Select Value</option>
         <option value={80.0}>Lightweight: membrane/standing seam</option>
         <option value={120.0}>Medium: Slate tiles/sedum 40mm roll</option>
         <option value={140.0}>Heavyweight: clay tiles/concrete tiles</option>
    </select></div>  
    <i><strong>Input roof panel loading from options</strong></i>&nbsp;
  <br /> ● (80kg/m² - lightweight e.g. standing seam/membrane
  <br /> ● 120kg/m² - medium e.g. slate tiles
  <br /> ● 140kg/m² - heavyweight e.g. clay/concrete tiles)
  <br /> <br />Live or imposed load for roofs is<strong> not added</strong> for this long term loading check.
  For OSB SIP panels on roofs the short term strength is generally not an issue, except in areas with high snow load.
  Or roofs with access for maintenance may need higher live loads to be considered. This would need checks by a structural engineer.<p />
  
                      <div id="result"></div>
    </form>
             
    
            <br />
 
    <div className="bold bg-clip-border bg-gradient-to-r from-orange-500 to-yellow-100 w-48 h-10 rounded-md shadow-xl shadow-blue-950/50 border-3 border-l-blue-950 border-rose-950">Panel Span, s (m)
    </div><br />
    <input className ="placeholder:text-red-800 bg-gradient-to-r from-yellow-100 to-slate-100 rounded-md pl-9 pr-3 shadow-lg border-2" placeholder="spn..." type="text"  id="sterm" size="1" required/>
  <strong><br />
    <i>(Input Value)</i></strong><i> Span is horizontal distance between supports. <br />A long span is 4m or more.</i><br /><br />



  
 
    
    <div className="bold bg-clip-border bg-gradient-to-r from-orange-500 to-yellow-100 w-48 h-10 rounded-md shadow-xl shadow-blue-950/50 border-3 border-l-blue-950 border-rose-950"> Roof Pitch Degrees
    </div><br />
    <input className ="placeholder:text-red-800 rounded-md pl-9 pr-3 shadow-lg border-2" placeholder="pitch." type="text"  id="pterm" size="1" required/>
  <br />
    <i><strong>(Input Value)</strong> Pitch is the <strong>roof angle to the horizontal</strong>
    <br />(e.g 0 degrees is flat/15-30 degrees is low pitch/45-60 degrees is steep pitch)</i>
      <div><br />

  
                     
  
 
                     <button className="bold bg-clip-border bg-gradient-to-r from-orange-500 to-yellow-100 w-96 h-10 rounded-md shadow-xl shadow-blue-950/50 border-3 border-l-blue-950 border-rose-950" onClick={handleCalculate}>Calculate Permanent Deflection</button>
          
           
            {/* Result output */}
            <div id="results">
                <div id="resultAcG"></div>
                <div id="resultEI"></div>
                <div id="resultEIREIN"></div>
                <div id="resultLSmm"></div>
                <div id="resultWS"></div>
                <div id="resultBEFF"></div>
                <div id="resultDeflection"></div>
                <div id="resultREINDeflection"></div>
                <div id="resultREINDeflection2SP"></div>
                <div id="resultD2SPAN"></div>
                <div id="resultDHIGH"></div>
                <div id="resultDHIGH1"></div>
                <div id="resultDHIGH2"></div>
                <div id="resultD2SPREIN"></div>
            </div>
            </div>
       <div> <br />
  
  {/* <button onclick="validate" className="bold text-center text-slate block bg-orange-400 rounded-md pl-9 pr-3 shadow-xl shadow-blue-950/50 border-1 border-black text-slate-950">
    <a className="one">Calculate Permanent Deflection</a><br />
  </button> */}
 
  <input className="placeholder:text-red-800  bg-stone-100  border-slate-300 rounded-md pl-9 pr-3 shadow-lg border-2" placeholder="Deflection: SIP splines" type="text" id="Deflection" size={30} /> mm
  <br />Deflection (Single Span)
  <br /><br />
  <input className="placeholder:text-red-800  bg-stone-100  border-slate-300 rounded-md pl-9 pr-3 shadow-lg border-2" placeholder="Deflection: SIP Splines Multispan" type="text" id="2SPDeflection" size={30} /> mm
  <br />Deflection (Two Span or multiple span)
  <br /><br />
  <input className="placeholder:text-red-800  bg-stone-100  border-slate-300 rounded-md pl-9 pr-3 shadow-lg border-2" placeholder="Deflection: Timber splines" type="text" id="REINDeflection" size={30} /> mm
  <br />Reinforced Deflection (Reinforced with solid timber splines in joints)
  <br /><br />
  <input className="placeholder:text-red-800  bg-stone-100  border-slate-300 rounded-md pl-9 pr-3 shadow-lg border-2" placeholder="Deflection: Timber splines Multispan" type="text" id="REINDeflection2SP" size={30} /> mm
  <br />Reinforced Deflection (Two Span or Multiple Span &amp; Reinforced with solid timber splines in joints)
</div>


        </main>
    );
}