const components = {};
// components.welcomeScreem = `<div>Welcome to chat app <div>`
components.registerScreem = `
<div class="register-container">
<div class="register-form">
    <div class="title">Mindx Chat</div>
    <form id="form-register">
        <div class="name-wrapper">
            <div class="input-wrapper">
                <input type="text" name="firstName" placeholder="First name...">
                <div class="error" id="error-first-name"></div>
            </div>
            <div class="input-wrapper">
                <input type="text" name="lastName" placeholder="last name...">
                <div class="error" id="error-last-name"></div>
            </div>
        </div>
       

        <div class="input-wrapper">
            <input type="text" name="email" placeholder="Email...">
            <div class="error" id="error-email-name"></div>
        </div>

        <div class="input-wrapper">
            <input type="password" name="password" placeholder="Password...">
            <div class="error" id="error-password-name"></div>
        </div>
        <div class="input-wrapper">
            <input type="password" name="confirmPassword" placeholder="Confirm password...">
            <div class="error" id="error-confirm-password-name"></div>
        </div>
        <div class="submit-wrapper">
            <div>Already have a account? <span class="cursor-pointer" id="redirect-to-login">Login</span></div>
            <button class="btn" type="submit">Register</button>
        </div>
    </form>
</div>
</div>`
components.loginScreem = `<div class="login-container">
<div class="login-form">
    <div class="title">MindX Chat</div>
    <form id="form-login">
        <div class="input-wrapper">
            <input type="text" name="email" placeholder="Email...">
        </div>
        <div class="input-wrapper">
            <input type="password" name = "password" placeholder="Password">
        </div>
        <div class="submit-wrapper">
            <div>Don't have a account? <span class="cursor-pointer" id="redirect-to-register">Register</span></div>
            <button class="btn" type="submit">Login</button>
        </div>
    </form>
</div>
</div>`