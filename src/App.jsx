import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Location from './components/Location';
import Booking from './components/Booking';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-rose-50 text-gray-800">
      <Navbar />
      <Hero />
      <Services />
      <Testimonials />
      <Location />
      <Booking />
      <Footer />
    </div>
  );
}

export default App;