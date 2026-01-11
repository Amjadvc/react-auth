import { useNavigate } from 'react-router-dom';
import heroImage from '@/assets/Art.jpg';
import { Button } from '@/components/ui/button';
import AnimatedDots from '@/components/ui/AnimatedDots';

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-green-100 to-white">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Flowers Hero"
          className="h-full w-full object-cover opacity-30"
        />
      </div>

      <div className="relative z-10 px-4 text-center">
        <h1 className="mb-4 text-5xl font-extrabold text-PrimaryText sm:text-6xl">
          Bring Nature Closer
        </h1>
        <p className="mx-auto mb-8 max-w-xl text-lg text-SecondaryText sm:text-xl">
          Discover beautiful flowers, create your garden, and bring joy to your
          space. Join our community today!
        </p>

        <Button
          onClick={() => navigate('/login')}
          className="h-12 rounded-full bg-ButtonBg px-8 py-3 text-lg font-semibold text-white shadow-lg transition hover:bg-ButtonHover"
        >
          Join Us
        </Button>
      </div>

      <AnimatedDots />
    </div>
  );
}
