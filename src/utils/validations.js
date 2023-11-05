export default function checkValidation(values, rules){
  let isValid = true
  let error = null

  if(rules.required){
    isValid = values.trim() !== '' && isValid
    if(!isValid){
        error = 'This field is required'
    }
  }

  if(rules.isEmail){
    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    isValid = pattern.test(values) && isValid
    if(!isValid){
        error = 'The email is not valid'
    }
  }

  if(rules.isNum){
    const pattern = /^\d{5}$/
    isValid = pattern.test(values) && isValid
    if(!isValid){
        error = 'The password should be only 6 digit number'
    }
  }

  return {
    isValid,
    error
  }
}