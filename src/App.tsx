
import Button from "./Components/Button"
import Alert from "./Components/Alert"
import { useState } from "react"

function App() {
 const [alertVisible, setalertVisibility] = useState(false)  
 

  return (
    <div className="App">
    {alertVisible && <Alert onClose = {()=>setalertVisibility(false)}>My Alert</Alert>}
      <Button color = 'primary' onClick={(()=>setalertVisibility(true))}>
        My Button
      </Button>
      

    </div>
  )
}

export default App
