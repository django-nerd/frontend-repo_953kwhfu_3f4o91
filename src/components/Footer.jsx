function Footer() {
  return (
    <footer id="contact" className="border-t bg-white">
      <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-8 text-sm">
        <div>
          <p className="text-lg font-semibold text-gray-900">Sabai Thai Massage</p>
          <p className="mt-2 text-gray-600">Authentic Thai therapies in the heart of Budapest.</p>
        </div>
        <div>
          <p className="font-medium text-gray-900">Contact</p>
          <p className="mt-2 text-gray-700">+36 30 123 4567</p>
          <p className="text-gray-700">hello@sabaithai.hu</p>
          <p className="text-gray-700">1052 Budapest, Váci utca 12.</p>
        </div>
        <div>
          <p className="font-medium text-gray-900">Hours</p>
          <p className="mt-2 text-gray-700">Mon–Sun: 10:00 – 20:00</p>
          <p className="text-gray-500 mt-4">© {new Date().getFullYear()} Sabai Thai. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;