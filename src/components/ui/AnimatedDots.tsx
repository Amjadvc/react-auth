export default function AnimatedDots() {
  return (
    <div className="absolute bottom-0 left-0 flex w-full justify-center space-x-4 pb-8">
      <div className="h-4 w-4 animate-bounce rounded-full bg-PrimaryText"></div>
      <div className="h-4 w-4 animate-bounce rounded-full bg-ButtonBg delay-200"></div>
      <div className="delay-400 h-4 w-4 animate-bounce rounded-full bg-ButtonHover"></div>
    </div>
  );
}
