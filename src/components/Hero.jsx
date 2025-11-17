function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-emerald-200/40 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -right-32 w-[28rem] h-[28rem] bg-rose-200/40 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-6xl mx-auto px-4 py-20 md:py-28 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-gray-900">
            Authentic Thai Massage in Budapest
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Rebalance body and mind with traditional techniques from Thailand. Warm welcome, skilled therapists, and a tranquil spa ambience in the heart of the city.
          </p>
          <div className="mt-8 flex gap-3">
            <a href="#booking" className="inline-flex items-center bg-emerald-600 text-white px-5 py-3 rounded-md hover:bg-emerald-700 transition">
              Book an appointment
            </a>
            <a href="#treatments" className="inline-flex items-center bg-white text-gray-800 px-5 py-3 rounded-md border hover:bg-gray-50 transition">
              View treatments
            </a>
          </div>
          <div className="mt-6 text-sm text-gray-500">
            Open daily 10:00–20:00 • Walk-ins welcome • English & Hungarian spoken
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5">
            <img src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxUaGFpJTIwbWFzc2FnZXxlbnwwfDB8fHwxNzYzMzQzMTg2fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Thai massage" className="w-full h-full object-cover"/>
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur rounded-xl shadow-lg p-4 ring-1 ring-black/5">
            <p className="text-sm font-medium text-gray-900">Traditional Thai • Oil • Foot</p>
            <p className="text-xs text-gray-500">Certified therapists with years of experience</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;