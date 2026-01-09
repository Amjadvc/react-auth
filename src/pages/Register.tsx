import RegisterForm from '@/features/authentication/register/RegisterForm';
import StepIndicator from '@/components/ui/StepIndicator';
import { Link } from 'react-router-dom';

function Register() {
  return (
    <div className="flex w-full max-w-[400px] flex-col items-start gap-8 sm:gap-12">
      <div className="intro">
        <h1 className="text-start font-sans text-[36px] font-semibold text-PrimaryText">
          Create Account
        </h1>
        <p className="text-start text-[15px] font-normal tracking-[0.5px] text-SecondaryText sm:text-[20px] sm:tracking-[0.1rem]">
          A few steps and you’re ready.
        </p>
      </div>

      {/* Step Indicator */}
      <StepIndicator totalSteps={3} />
      <RegisterForm />

      {/* Step Fields */}

      <div className="flex w-full flex-col items-center justify-center gap-5">
        <div className="flex w-full items-center gap-3">
          <div className="h-[1px] flex-1 bg-sperator"></div>
          <span className="text-sm font-medium text-SecondaryText">Or</span>
          <div className="h-[1px] flex-1 bg-sperator"></div>
        </div>

        <div className="signUp flex w-full items-center justify-center">
          <p className="text-center text-lg text-SecondaryText">
            Already have an account?
            <Link to={'/login'} className="ml-2 text-Link">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
