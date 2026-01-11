import LoginForm from '../features/authentication/login/LoginForm';
import AuthIntro from '@/components/ui/AuthIntro';
import AuthFooter from '@/components/ui/AuthFooter';
import AuthFormWrapper from '@/components/ui/AuthFormWrapper';

function Login() {
  return (
    <AuthFormWrapper>
      <AuthIntro
        title="Welcome Back"
        description=" Today is a new day. It's your day. You shape it. Sign in to start
        managing your projects."
      />
      <LoginForm />
      <AuthFooter
        text="Don't you have an account?"
        linkText="Sign up"
        linkTo="/register"
      />
    </AuthFormWrapper>
  );
}

export default Login;
