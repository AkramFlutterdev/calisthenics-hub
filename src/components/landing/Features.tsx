const features = [
  {
    title: "Workout Tracking",
    desc: "Log your calisthenics workouts with sets, reps, and progress.",
  },
  {
    title: "Skill Progression",
    desc: "Track skills like handstand, planche, and muscle-ups.",
  },
  {
    title: "Analytics Dashboard",
    desc: "Visualize your progress with charts and stats.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 px-6 max-w-5xl mx-auto">
      <h3 className="text-3xl font-bold text-center mb-12">Features</h3>

      <div className="grid md:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <div
            key={i}
            className="p-6 border border-gray-800 rounded-xl bg-gray-900"
          >
            <h4 className="font-semibold text-green-400">{f.title}</h4>
            <p className="text-gray-400 mt-2 text-sm">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}