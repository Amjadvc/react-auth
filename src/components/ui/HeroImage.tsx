import heroImg from '../../assets/Art.jpg';

export default function HeroImage() {
  return (
    <figure className="h-[22vh] w-full sm:h-[90vh] sm:w-[45%]">
      <img
        src={heroImg}
        alt=" bg"
        className="h-full w-full rounded-3xl object-cover"
      />
    </figure>
  );
}
