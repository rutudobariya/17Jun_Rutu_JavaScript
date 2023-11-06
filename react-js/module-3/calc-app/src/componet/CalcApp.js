import React from "react";
function CalcApp()
{
    return (
      <React.Fragment>
         <center>
      
         <div className="bg-slate-900  h-3/4 w-1/3  rounded-xl p-4 my-5  ">
            <input type="serch"  id="display" className="bg-slate-100  w-full p-3 text-gray-950 " ></input>    
            <div className="flex flex-row gap-8 mt-5 text-slate-100">
            <input type='button' value={'%'} className="bg-emerald-600 h-10 w-20 hover:bg-slate-500"></input>
            <input type="button" value={'CE'} className="bg-emerald-600 h-10 w-20  hover:bg-slate-500 "></input>
            <input type="button" value={'C'} className="bg-emerald-600 h-10 w-20   hover:bg-slate-500"></input>
            <input type="button" value={'X'} className="bg-emerald-600 h-10 w-20  hover:bg-slate-500"></input>
            </div>

            <div className="flex flex-row gap-8 mt-5 ">
            <input type="button" value={'1/x'} className="bg-slate-100 h-10 w-20 "></input>
            <input type="button" value={'x²'} className="bg-slate-100 h-10 w-20"></input>
            <input type="button" value={'2√x'} className="bg-slate-100 h-10 w-20 "></input>
            <input type="button" value={'/'} className="bg-emerald-600 h-10 w-20 text-slate-100  hover:bg-slate-500"></input>
            </div>

            <div className="flex flex-row gap-8 mt-5 ">
            <input type="button" value={'7'} className="bg-slate-100 h-10 w-20"></input>
            <input type="button" value={'8'} className="bg-slate-100 h-10 w-20 "></input>
            <input type="button" value={'9'} className="bg-slate-100 h-10 w-20 "></input>
            <input type="button" value={'*'} className="bg-emerald-600 h-10 w-20  text-slate-100  hover:bg-slate-500 "></input>
            </div>
            <div className="flex flex-row gap-8 mt-5 ">
            <input type="button" value={'4'} className="bg-slate-100 h-10 w-20"></input>
             <input type="button" value={'5'} className="bg-slate-100 h-10 w-20 "></input>
            <input type="button" value={'6'} className="bg-slate-100 h-10 w-20 "></input>
            <input type="button" value={'-'} className="bg-emerald-600 h-10 w-20  text-slate-100  hover:bg-slate-500 "></input>
            </div>
            <div className="flex flex-row gap-8 mt-5 ">
            <input type="button" value={'1'} className="bg-slate-100 h-10 w-20 "></input>
            <input type="button" value={'2'} className="bg-slate-100 h-10 w-20 "></input>
            <input type="button" value={'3'} className="bg-slate-100 h-10 w-20"></input>
            <input type="button" value={'+'} className="bg-emerald-600 h-10 w-20  text-slate-100  hover:bg-slate-500"></input>
            </div>
            <div className="flex flex-row gap-8 mt-5 ">
            <input type="button" value={'+/-'} className="bg-slate-100 h-10 w-20"></input>
            <input type="button" value={'0'} className="bg-slate-100 h-10 w-20 "></input>
            <input type="button" value={'.'} className="bg-slate-100 h-10 w-20 "></input>
            <input type="button" value={'='} className="bg-emerald-600 h-10 w-20  text-slate-100  hover:bg-slate-500 "></input>
            </div>
            
         </div> 
         
         </center>
         
       </React.Fragment>
    );
}
export default CalcApp;