import { Link } from 'react-router-dom';

type AuthFooterProps = {
  text: string;
  linkText: string;
  linkTo: string;
};

function AuthFooter({ text, linkText, linkTo }: AuthFooterProps) {
  return (
    <section className="flex w-full flex-col items-center justify-center gap-5">
      <div className="flex w-full items-center gap-3">
        <div className="h-[1px] flex-1 bg-sperator"></div>
        <span className="text-sm font-medium text-SecondaryText">Or</span>
        <div className="h-[1px] flex-1 bg-sperator"></div>
      </div>

      <div className="signUp flex w-full items-center justify-center">
        <p className="text-center text-lg text-SecondaryText">
          {text}
          <Link to={linkTo} className="ml-2 text-Link">
            {linkText}
          </Link>
        </p>
      </div>
    </section>
  );
}

export default AuthFooter;
