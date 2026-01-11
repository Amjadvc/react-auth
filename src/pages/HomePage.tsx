export default function HomePage() {
  return (
    <div
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 text-center"
      style={{
        background: `linear-gradient(to bottom, ${'#F7FBFF'}, ${'#D4D7E3'})`,
      }}
    >
      <h1
        className="mb-6 animate-pulse text-6xl font-extrabold drop-shadow-lg"
        style={{
          color: '#0C1421',
        }}
      >
        🌸 Flower Home
      </h1>

      <p
        className="animate-fade-in mb-8 max-w-md text-lg"
        style={{ color: '#313957' }}
      >
        Welcome! You are logged in.
      </p>
    </div>
  );
}
