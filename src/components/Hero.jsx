export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex flex-col justify-center items-center min-h-screen py-20 px-6 bg-gradient-to-br from-headerBg via-headerBg to-background text-headerText"
    >
      <div className="absolute top-0 left-0 right-0 h-16 bg-headerBg z-10" />
      <h2 className="z-20 text-6xl md:text-7xl font-extrabold mb-6 tracking-wide max-w-4xl text-center">
      Lighting the way with stellaireluminaire
      </h2>
      <p className="z-20 text-xl md:text-2xl text-textSecondary max-w-3xl text-center">
        Explore bold, edgy, and minimal fashion pieces designed for the now.
      </p>
    </section>
  );
}
