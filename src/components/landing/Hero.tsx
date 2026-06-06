export default function Hero() {
  return (
    <section className="text-center py-24 px-6">
      <h2 className="text-5xl font-bold leading-tight">
        Track Your <span className="text-green-500">Calisthenics Progress</span>
      </h2>

      <p className="text-gray-400 mt-6 max-w-xl mx-auto">
        Build strength, track skills like muscle ups and front levers, and visualize your progress like a pro athlete.
      </p>

      <div className="mt-8 flex justify-center gap-4">
        <a
          href="/register"
          className="bg-green-500 text-black px-6 py-3 rounded-xl font-semibold"
        >
          Get Started
        </a>

        <a
          href="#features"
          className="border border-gray-600 px-6 py-3 rounded-xl"
        >
          Learn More
        </a>
      </div>
    </section>
  );
}