import List from "./List";
import UpdateState from "./UpdateState";

function App(){

    const listData = [
    {id:1, name:"rutu"},
    {id:2, name:"dhevan"},
    {id:3, name:"radhika"},

  ]

  return(
    <>
   
    <div >
      <h2 style={{marginLeft:"50%"}}>List View</h2>
      {
        listData.map((item)=>{
          return(
            <>
            <p  style={{marginLeft:"50%"}}  key={item.id}><b>employee id & name is :- {item.id} {item.name} </b></p>
            </>
          )
        })
      }

     
    </div>
    <div>
      <UpdateState/>
    </div>
    
    </>
  )
}

export default App