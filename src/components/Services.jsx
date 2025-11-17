function Services() {
  const items = [
    {
      title: "Traditional Thai Massage",
      desc: "An invigorating treatment combining stretching and acupressure to improve mobility and relieve tension.",
      duration: "60 / 90 mins",
      price: "18 000 / 24 000 HUF",
      icon: "🧘"
    },
    {
      title: "Aromatherapy Oil Massage",
      desc: "A relaxing full-body massage with warm aromatic oils to calm the mind and soothe the body.",
      duration: "60 / 90 mins",
      price: "20 000 / 26 000 HUF",
      icon: "🌿"
    },
    {
      title: "Foot Reflexology",
      desc: "Focused foot massage stimulating reflex points to boost circulation and overall wellbeing.",
      duration: "30 / 60 mins",
      price: "9 500 / 16 000 HUF",
      icon: "🦶"
    },
    {
      title: "Couples Massage",
      desc: "Share the experience side-by-side in our serene double room. Choose Thai or oil massage.",
      duration: "60 mins",
      price: "36 000 HUF",
      icon: "💞"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-emerald-50/40">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 text-center">Our Treatments</h2>
        <p className="mt-3 text-gray-600 text-center max-w-2xl mx-auto">Select from our most-loved therapies designed to relax, restore, and energize.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it) => (
            <div key={it.title} className="bg-white/70 backdrop-blur p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition">
              <div className="text-3xl">{it.icon}</div>
              <h3 className="mt-3 font-semibold text-gray-900">{it.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{it.desc}</p>
              <div className="mt-4 flex items-center justify-between text-sm">
                <span className="text-gray-500">{it.duration}</span>
                <span className="font-medium text-emerald-700">{it.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;