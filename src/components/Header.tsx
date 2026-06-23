import { Utensils } from 'lucide-react';

export default function Header() {
  return (
    <header className="w-full bg-white py-6 px-8 border-b border-stone-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left Nav */}
        <nav className="hidden md:flex items-center space-x-12 flex-1">
          <a href="#menu" className="text-xs uppercase tracking-widest font-medium text-stone-500 hover:text-stone-900 transition-colors">Menu</a>
          <a href="#services" className="text-xs uppercase tracking-widest font-medium text-stone-500 hover:text-stone-900 transition-colors">Services</a>
          <a href="#catering" className="text-xs uppercase tracking-widest font-medium text-stone-500 hover:text-stone-900 transition-colors">Catering</a>
        </nav>

        {/* Logo centered */}
        <div className="flex-1 md:flex-none flex flex-col items-center justify-center text-center">
          <div className="mb-2">
            <Utensils className="w-6 h-6 text-stone-800" strokeWidth={1} />
          </div>
          <h1 className="font-serif text-3xl md:text-5xl uppercase tracking-[0.2em] text-stone-900 leading-none">
            Rana
          </h1>
          <h2 className="font-sans text-xs uppercase tracking-[0.3em] text-stone-500 mt-2">
            Catering &bull; Sarangpur
          </h2>
        </div>

        {/* Right Nav */}
        <nav className="hidden md:flex items-center justify-end space-x-12 flex-1">
          <a href="#story" className="text-xs uppercase tracking-widest font-medium text-stone-500 hover:text-stone-900 transition-colors">Our Story</a>
          <a href="#journal" className="text-xs uppercase tracking-widest font-medium text-stone-500 hover:text-stone-900 transition-colors">Events</a>
          <a href="#contact" className="text-xs uppercase tracking-widest font-medium text-stone-500 hover:text-stone-900 transition-colors">Contact</a>
        </nav>
      </div>
    </header>
  );
}
