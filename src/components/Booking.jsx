import { useState } from 'react';

function Booking() {
  const [form, setForm] = useState({ name: '', phone: '', service: 'Traditional Thai Massage', date: '', time: '' });
  const [sent, setSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="booking" className="py-20 bg-emerald-50/50">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">Book your massage</h2>
          <p className="mt-3 text-gray-600">Send us your preferred time and we’ll confirm shortly by phone or email. Walk-ins are also welcome.</p>
          <ul className="mt-6 space-y-2 text-gray-700 text-sm list-disc list-inside">
            <li>Same-day appointments often available</li>
            <li>Gift vouchers available upon request</li>
            <li>We speak English and Hungarian</li>
          </ul>
        </div>

        <div className="bg-white/70 backdrop-blur rounded-xl border border-gray-100 shadow p-6">
          {!sent ? (
            <form onSubmit={submit} className="grid gap-4">
              <div>
                <label className="block text-sm text-gray-700">Full name</label>
                <input required value={form.name} onChange={(e)=>setForm({...form,name:e.target.value})} className="mt-1 w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"/>
              </div>
              <div>
                <label className="block text-sm text-gray-700">Phone or email</label>
                <input required value={form.phone} onChange={(e)=>setForm({...form,phone:e.target.value})} className="mt-1 w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"/>
              </div>
              <div>
                <label className="block text-sm text-gray-700">Service</label>
                <select value={form.service} onChange={(e)=>setForm({...form,service:e.target.value})} className="mt-1 w-full border rounded-md px-3 py-2">
                  <option>Traditional Thai Massage</option>
                  <option>Aromatherapy Oil Massage</option>
                  <option>Foot Reflexology</option>
                  <option>Couples Massage</option>
                </select>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm text-gray-700">Date</label>
                  <input type="date" value={form.date} onChange={(e)=>setForm({...form,date:e.target.value})} className="mt-1 w-full border rounded-md px-3 py-2"/>
                </div>
                <div>
                  <label className="block text-sm text-gray-700">Time</label>
                  <input type="time" value={form.time} onChange={(e)=>setForm({...form,time:e.target.value})} className="mt-1 w-full border rounded-md px-3 py-2"/>
                </div>
              </div>
              <button className="mt-2 bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700">Request booking</button>
              <p className="text-xs text-gray-500">By sending you agree to our privacy policy. We will contact you to confirm the appointment.</p>
            </form>
          ) : (
            <div className="text-center py-6">
              <div className="text-5xl">🎉</div>
              <h3 className="mt-3 text-xl font-semibold text-gray-900">Thank you!</h3>
              <p className="mt-1 text-gray-600">Your request has been received. We’ll get back to you shortly.</p>
              <button onClick={()=>setSent(false)} className="mt-4 text-emerald-700 underline">Send another</button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Booking;