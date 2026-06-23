export default function Footer() {
  return (
    <footer className="w-full bg-stone-900 text-stone-400 py-16 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-serif text-3xl uppercase tracking-[0.2em] text-stone-200 mb-6">
          Rana Catering
        </h2>
        <p className="font-mono text-sm mb-8">
          Sarangpur, India <br/>
          contact@ranacatering.com <br/>
          +91 98765 43210
        </p>
        <div className="flex justify-center space-x-8 font-sans text-xs uppercase tracking-widest mb-12">
          <a href="#" className="hover:text-stone-200 transition-colors">Instagram</a>
          <a href="#" className="hover:text-stone-200 transition-colors">Facebook</a>
          <a href="#" className="hover:text-stone-200 transition-colors">Inquire</a>
        </div>
        <p className="font-mono text-xs text-stone-600">
          &copy; {new Date().getFullYear()} Rana Catering Services. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
