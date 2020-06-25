const view = {};
view.setActiveScreen = (screenName) =>{
    switch (screenName) {
        case `registerScreen`:
            document.getElementById('app').innerHTML = components.registerScreen
            const registerForm = document.getElementById('form-register')
            registerForm.addEventListener('submit', (e) =>{
                e.preventDefault()
                const registerInfo = {
                    firstName: registerForm.firstName.value,
                    lastName: registerForm.lastName.value,
                    email: registerForm.email.value,
                    password: registerForm.password.value,
                    comfirmPassword: registerForm.confirmPassword.value,
                }
                controller.register(registerInfo)
                if (registerInfo.firstName === ''){
                    document.getElementById('error-first-name').innerText = 'Please input first name'
                }
                if (registerInfo.lastName === ''){
                    document.getElementById('error-last-name').innerText = 'Please input last name'
                }
                if 
                (registerInfo.email === ''){
                    document.getElementById('error-email-name').innerText = 'Please input email name'
                }
                if (registerInfo.password === ''){
                    document.getElementById('error-password-name').innerText = 'Please input password'
                }
                if (registerInfo.confirmPassword === ''){
                    document.getElementById('error-confirm-password-name').innerText = 'Please input confirm password'
                }
                
            }) 
            const redirectToLogin = document.getElementById('redirect-to-login');
            redirectToLogin.addEventListener('click', (e) =>{
                e.preventDefault()
                view.setActiveScreen('loginScreen');
            });
            break;
        case `loginScreen`:
            document.getElementById('app').innerHTML = components.loginScreen
             const loginForm = document.getElementById('form-login')
            loginForm.addEventListener('submit', (e) => {
                e.preventDefault()
                const loginInfo = {
                    email : loginForm.email.value,
                    password : loginForm.password.value
                }
                controller.login(loginInfo)
            })
            const redirectToRegister = document.getElementById('redirect-to-register')
            redirectToRegister.addEventListener('click', (e) => {
                e.preventDefault()
                view.setActiveScreen('registerScreen')
            })  
            break;
    }
            
}