const form = document.querySelector('form')






form.addEventListener('submit', (event)=>{
    if(!event.target.checkValidity()){
        event.preventDefault()
        const email = document.getElementById('email')
        const password = document.getElementById('password')
        const passwordconfirm = document.getElementById('passwordconfirm')

        email.setCustomValidity('')
        password.setCustomValidity('')
        passwordconfirm.setCustomValidity('')
        if(!email.checkValidity()){
            if(email.validity.valueMissing){
                email.setCustomValidity('Please enter an email address')
        } else if(email.validity.typeMismatch){
            email.setCustomValidity('Please enter a valid email address')
            
        }
        alert(email.validationMessage)
    }
        if(!password.checkValidity()){
            if(password.validity.valueMissing){
                password.setCustomValidity('Please enter a password')
        } else if(password.validity.patternMismatch){
            password.setCustomValidity('Password must be at least 8 characters long')
        }
        alert(password.validationMessage)
    }

        if(!passwordconfirm.checkValidity()){
            if(passwordconfirm.validity.valueMissing){
                passwordconfirm.setCustomValidity('Please confirm your password')
        } else if(passwordconfirm.validity.patternMismatch){
            passwordconfirm.setCustomValidity('Password must be at least 8 characters long')
        } else if(!checkpwd(password.value, passwordconfirm.value)){
            passwordconfirm.setCustomValidity('Passwords do not match')
        }
        alert(passwordconfirm.validationMessage)
    }


    }
}, false)

function checkpwd(pwd1, pwd2){
    if(pwd1 != pwd2){
        console.log('passwords do not match')
        return false
    }
}