function Testimonials() {
  const reviews = [
    { name: "Anna", text: "Best massage I've had in Budapest. The therapist knew exactly where I had tension.", rating: 5 },
    { name: "Márk", text: "Beautiful, clean place and very professional staff. Highly recommended!", rating: 5 },
    { name: "Sophie", text: "Lovely atmosphere and relaxing oil massage. I left feeling brand new.", rating: 5 },
  ];
  return (
    <section className="py-20" id="treatments">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 text-center">What our guests say</h2>
        <p className="mt-3 text-gray-600 text-center max-w-2xl mx-auto">We are proud to have many returning clients from Hungary and around the world.</p>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div key={r.name} className="bg-white/70 backdrop-blur rounded-xl border border-gray-100 shadow p-6">
              <div className="flex items-center gap-1 text-amber-500">
                {Array.from({length:r.rating}).map((_,i)=> (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.322.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.983 20.54a.562.562 0 01-.84-.61l1.285-5.386a.563.563 0 00-.182-.557L3.042 10.39a.563.563 0 01.322-.988l5.518-.442a.563.563 0 00.475-.345l2.125-5.111z"/></svg>
                ))}
              </div>
              <p className="mt-3 text-gray-700">{r.text}</p>
              <p className="mt-4 text-sm text-gray-500">— {r.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;