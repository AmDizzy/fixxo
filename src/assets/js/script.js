const onSubmit = event => {
    event.preventDefault()
    validate(event)
}


const validate = event => {
    switch(event.type) {
        case 'keyup':
            validateElement(event.target)
            break;

        case 'submit':
            for(let element of event.target)
                validateElement(element)
            break;
    }
}


const validateElement = element => {
    if (element.required) {
        let label = document.getElementById(`${element.id}-label`).innerText
        let error = ""

        switch(element.type) {
            case 'text':
                if (!isNullOrEmpty(element.value)) {
                    if (!isMinimumLength(element.value, element.dataset.requiredMin)) {
                        error = `Your ${label.toLocaleLowerCase()} must contain at least ${element.dataset.requiredMin} letters`
                        document.getElementById(`${element.id}`).classList.add('text-danger')
                    } else {
                        document.getElementById(`${element.id}`).classList.remove('text-danger')
                    }
                } else {
                    error = `You must enter a ${label.toLocaleLowerCase()}`
                }

                break;

            case 'email':
                if (!isNullOrEmpty(element.value)) {
                    if (!isEmailValid(element.value)) {
                        error = `Your ${label.toLocaleLowerCase()} must be valid (eg. username@domain.com)`
                        document.getElementById(`${element.id}`).classList.add('text-danger')
                    } else {
                        document.getElementById(`${element.id}`).classList.remove('text-danger')
                    }
                } else {
                    error = `You must enter an ${label.toLocaleLowerCase()}`
                }

                break;


                case 'textarea':
                    if (!isNullOrEmpty(element.value)) {
                        if (!isMinimumLength(element.value, element.dataset.requiredMin)) {
                            error = `You must enter a comment`
                            document.getElementById(`${element.id}`).classList.add('text-danger')
                        } else {
                            document.getElementById(`${element.id}`).classList.remove('text-danger')
                        }
                    } else {
                        error = `You must enter a comment`
                    }
    
                    break;
        }

        document.getElementById(`${element.id}-error`).innerText = error
    }
}


const isNullOrEmpty = value => {
    if (value.length === 0) 
        return true

    return false
}


const isMinimumLength = (value, minLength = 2) => {
    if (value.length >= minLength) {
        return true
    } else {
        return false
    }
}


const isEmailValid = email => {
    let regEx =  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

    if (regEx.test(email))
        return true
    
    return false
}