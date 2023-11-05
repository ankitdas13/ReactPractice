import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Input from './Components/Input'
import withForm from "./HOC/withForm"
import {fields as formFields} from './utils/fields'

function App(props) {
  // const [toggle, setToggle] = useState(true)

  const renderForm = (
    <div>
       <form onSubmit={props.onFormSubmit}>
        {props.onRenderElements().map((formElement)=> {
          return <Input
           key={formElement.id}
           config={formElement.config.elementConfig}
           onChange={props.onChangeForm}
          />
         })} 
          <button disabled={!props.isValidForm}>Submit</button>
       </form>
    </div>
  )

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>High Order Component Form</h1>
      <div>
         {renderForm}
      </div>
      {/* <div>
         <button onClick={()=>setToggle(!toggle)}>{toggle ? 'Active': 'Deactive'}</button>
      </div> */}
    </>
  )
}

export default withForm(formFields)(App)
