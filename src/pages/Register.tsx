import RegisterForm from '@/features/authentication/register/RegisterForm';
import StepIndicator from '@/components/ui/StepIndicator';
import { useLocation } from 'react-router-dom';
import { registerStepsMeta } from '@/features/authentication/register/registerSteps';
import AuthIntro from '@/components/ui/AuthIntro';
import AuthFooter from '@/components/ui/AuthFooter';
import AuthFormWrapper from '@/components/ui/AuthFormWrapper';

function Register() {
  const { pathname } = useLocation();
  const stepKey = pathname.endsWith('/register')
    ? 'step-1'
    : (pathname.split('/').pop() as keyof typeof registerStepsMeta);

  const meta = registerStepsMeta[stepKey];
  return (
    <AuthFormWrapper>
      <AuthIntro title={meta.title} description={meta.description} />
      <StepIndicator totalSteps={3} />
      <RegisterForm />

      <AuthFooter
        text="Already have an account?"
        linkText="Sign in"
        linkTo="/login"
      />
    </AuthFormWrapper>
  );
}

export default Register;
