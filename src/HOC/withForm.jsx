import { useState } from "react"
import checkValidation from "../utils/validations"

const withForm = formIntialState => (WrappedComponent) => props => {
  console.log("render...")
  const [formstate, setFormstate] = useState({ ...formIntialState })
  const [fromValid, setFromValid] = useState(false)
  
  
  // Check all formState valid property
  const formIsValid = () => {
    let isValid;
    for(let key in formstate){
      isValid = formstate[key].valid
    }
    setFromValid(isValid)
  }

  const handleOnChangeForm = (e) => {
    const value = e.target.value
    const id = e.target.name
    const validation = checkValidation(value,formstate[id].validation)
    setFormstate({
      ...formstate,
      [id] : {
        ...formstate[id],
        value,
        valid: validation.isValid,
        errorMessage: validation.error
      }
    })
    formIsValid()
  }


  // render all fields element
  const arrayElement = () => {
    const formElementArr = []
    if (formstate) {
      for (let key in formstate) {
        formElementArr.push({
          id: key,
          config: formstate[key]
        })
      }
    }
    return formElementArr
  }

  // 
  const handleOnSubmit=(e)=>{
     e.preventDefault();

     alert(JSON.stringify(formstate,{},null))
  }

  return (
    <div>
      <WrappedComponent
        {...props}
        isValidForm={fromValid}
        onChangeForm={handleOnChangeForm}
        onRenderElements={arrayElement}
        onFormSubmit={handleOnSubmit}
      />
    </div>
  )

}

export default withForm