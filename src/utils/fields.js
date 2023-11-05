export const fields = {
    username : {
        elementLabel: 'Enter username',
        elementConfig: {
            type: 'text',
            placeholder: 'Enter username',
            name: 'username'
        },
        value:'',
        validation: {
            required: true,
            isEmail:true
        },
        valid: false,
        errorMessage: null
    },
    firstname : {
        elementLabel: 'Enter firstname',
        elementConfig: {
            type: 'text',
            placeholder: 'Enter firstname',
            name: 'firstname'
        },
        value:'',
        validation: {
            required: true,
        },
        valid: false,
        errorMessage: null
    },
    password : {
        elementLabel: 'Enter password',
        elementConfig: {
            type: 'password',
            placeholder: 'Enter 6 digit password',
            name: 'password'
        },
        value: '',
        validation: {
            required: true,
            isNum: true
        },
        valid: false,
        errorMessage: null
    }
}