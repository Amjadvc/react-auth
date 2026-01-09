import { Link } from 'react-router-dom';
import LoginForm from '../features/authentication/login/LoginForm';

function Login() {
  return (
    <div className="flex w-full max-w-[400px] flex-col items-start gap-8 sm:gap-12">
      <div className="intro">
        <h1 className="text-start font-sans text-[36px] font-semibold text-PrimaryText">
          Welcome Back
        </h1>
        <p className="text-start text-[15px] font-normal tracking-[0.5px] text-SecondaryText sm:text-[20px] sm:tracking-[0.1rem]">
          Today is a new day. It's your day. You shape it. Sign in to start
          managing your projects.
        </p>
      </div>
      <LoginForm />
      <div className="flex w-full flex-col items-center justify-center gap-5">
        <div className="flex w-full items-center gap-3">
          <div className="h-[1px] flex-1 bg-sperator"></div>
          <span className="text-sm font-medium text-SecondaryText">Or</span>
          <div className="h-[1px] flex-1 bg-sperator"></div>
        </div>

        <div className="signUp flex w-full items-center justify-center">
          <p className="text-center text-lg text-SecondaryText">
            Don't you have an account?
            <Link to={'/register'} className="ml-2 text-Link">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
