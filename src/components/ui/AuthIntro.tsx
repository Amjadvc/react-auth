type AuthIntroProps = {
  title: string;
  description: string;
};

function AuthIntro({ title, description }: AuthIntroProps) {
  return (
    <header className="intro">
      <h1 className="text-start font-sans text-[36px] font-semibold text-PrimaryText">
        {title}
      </h1>
      <p className="text-start text-[15px] font-normal tracking-[0.5px] text-SecondaryText sm:text-[20px] sm:tracking-[0.1rem]">
        {description}
      </p>
    </header>
  );
}

export default AuthIntro;
