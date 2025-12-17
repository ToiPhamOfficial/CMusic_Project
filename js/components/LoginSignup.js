export default function LoginSignup() {
    return `
    <div class="auth-container">
        <div class="auth-form">
            <h2>Login</h2>
            <input type="text" placeholder="Username" class="auth-input" />
            <input type="password" placeholder="Password" class="auth-input" />
            <button class="auth-button">Login</button>
            <p class="auth-switch">Don't have an account? <span class="auth-switch-link">Sign up</span></p>
        </div>
        <div class="auth-form hidden">
            <h2>Sign Up</h2>
            <input type="text" placeholder="Username" class="auth-input" />
            <input type="email" placeholder="Email" class="auth-input" />
            <input type="password" placeholder="Password" class="auth-input" />
            <button class="auth-button">Sign Up</button>
            <p class="auth-switch">Already have an account? <span class="auth-switch-link">Login</span></p>
        </div>
    </div>
    `;
}