import { useState } from "react"
import Test from "./Test"

const App = () => {
  const [emp, setEmp] = useState({
    id: 1,
    name: "muni",
    salary: 1000
  })

  const [name, setName] = useState("")
  return (<div>
    <center>
      Name: {name} <br></br>
      <input type="text" onChange={(e)=>setName(e.target.value)}></input>
      <Test emp={emp}></Test>
    </center>
  </div>)
}

export default App