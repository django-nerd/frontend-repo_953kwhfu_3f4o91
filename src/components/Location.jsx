function Location() {
  return (
    <section id="location" className="py-20">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">Find us in Budapest</h2>
          <p className="mt-3 text-gray-600">We are located in the city center with easy access by metro and tram. Street parking is available. Wheelchair accessible entrance.</p>
          <div className="mt-6 space-y-2 text-gray-700">
            <p><span className="font-medium">Address:</span> 1052 Budapest, Váci utca 12.</p>
            <p><span className="font-medium">Phone:</span> +36 30 123 4567</p>
            <p><span className="font-medium">Email:</span> hello@sabaithai.hu</p>
            <p><span className="font-medium">Hours:</span> Daily 10:00 – 20:00</p>
          </div>
          <div className="mt-6 flex gap-3">
            <a href="#booking" className="inline-flex items-center bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700 transition">Book now</a>
            <a href="#contact" className="inline-flex items-center border px-4 py-2 rounded-md hover:bg-gray-50 transition">Contact us</a>
          </div>
        </div>
        <div className="rounded-xl overflow-hidden shadow-lg border">
          <iframe title="Budapest map" src="https://www.google.com/maps?q=V%C3%A1ci%20utca%2012%20Budapest&output=embed" className="w-full h-80 border-0"></iframe>
        </div>
      </div>
    </section>
  );
}

export default Location;