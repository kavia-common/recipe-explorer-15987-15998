import React from 'react';
import '../assets/sign-in-screen-11-235.css';
import '../assets/common.css';

// PUBLIC_INTERFACE
function SignIn() {
  return (
    <main className="artboard" role="main" aria-label="Sign In screen">
      <section className="signin-screen">
        <div className="status-bar" aria-hidden="true">
          <div className="time" aria-hidden="true">19:27</div>
        </div>
        <header className="title-group">
          <h1 className="hello">Hello,</h1>
          <p className="welcome">Welcome Back!</p>
        </header>
        <form className="form" action="#" method="post" autoComplete="on" noValidate>
          <div className="input-block form-email">
            <label htmlFor="email">Email</label>
            <div className="input-wrapper">
              <input type="email" id="email" name="email" placeholder="Enter Email" autoComplete="email" required />
            </div>
          </div>
          <div className="input-block form-password">
            <label htmlFor="password">Enter Password</label>
            <div className="input-wrapper">
              <input type="password" id="password" name="password" placeholder="Enter Password" autoComplete="current-password" required />
            </div>
          </div>
        </form>
        <a className="forgot-password" href="#" aria-label="Forgot Password">Forgot Password?</a>
        <button className="cta" type="submit" form="">
          <span className="label">Sign In</span>
          <span className="icon" aria-hidden="true">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 10h12" stroke="var(--color-000000)" strokeWidth="1.3" strokeLinecap="round" />
              <path d="M11 5l4 5-4 5" stroke="var(--color-000000)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </button>
        <div className="or-with" aria-label="Alternative sign-in options">
          <div className="line" aria-hidden="true"></div>
          <div className="text">Or Sign in With</div>
          <div className="line" aria-hidden="true"></div>
        </div>
        <div className="socials">
          <button className="social-btn" type="button" data-provider="Google" aria-label="Sign in with Google">
            <span className="svg" aria-hidden="true">
              <svg width="24" height="24" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <circle cx="10" cy="10" r="10" fill="var(--color-ffc107)" />
                <path d="M4 10a6 6 0 0 1 9.8-4.6" fill="var(--color-ff3d00)" />
                <path d="M4 10a6 6 0 0 0 9.7 4.8" fill="var(--color-4caf50)" />
                <path d="M10 4a6 6 0 0 1 6 6" fill="var(--color-1976d2)" />
              </svg>
            </span>
          </button>
          <button className="social-btn" type="button" data-provider="Facebook" aria-label="Sign in with Facebook">
            <span className="svg" aria-hidden="true">
              <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                <rect width="24" height="24" rx="5" fill="var(--color-035b81)" opacity="0.58" />
                <path d="M14 8h2V5h-2c-2.2 0-4 1.8-4 4v2H8v3h2v5h3v-5h2.1l.9-3H13V9c0-.6.4-1 1-1z" fill="#fff" />
              </svg>
            </span>
          </button>
        </div>
        <div className="footer-text">
          Don’t have an account? <a href="#" aria-label="Sign up">Sign up</a>
        </div>
        <div className="home-indicator" aria-hidden="true">
          <div className="bar"></div>
        </div>
      </section>
    </main>
  );
}

export default SignIn;
