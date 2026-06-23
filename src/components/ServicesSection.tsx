import { Store } from 'lucide-react';

export default function ServicesSection() {
  return (
    <section id="services" className="py-24">
      <div className="max-w-4xl mx-auto px-6 text-center mb-16">
        <div className="flex justify-center mb-6">
          <Store className="w-10 h-10 text-stone-800" strokeWidth={1} />
        </div>
        <h2 className="font-serif text-4xl md:text-5xl tracking-[0.2em] text-stone-800 mb-8 uppercase">
          OUR CATERING
        </h2>
        <p className="font-mono text-sm md:text-base text-stone-600 max-w-2xl mx-auto leading-relaxed">
          Our catering service offers a combination of traditional Sarangpur specialties, 
          regional favorites, and evolving arrays of special Rana Catering 
          menus to elevate your celebrations and events.
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-stone-50 p-12 md:p-16 border-t border-b border-stone-100 text-center">
          <h3 className="font-serif text-2xl tracking-[0.2em] text-stone-800 mb-12 uppercase">
            Services Offered
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-8 gap-x-12 font-sans text-xs font-semibold tracking-widest uppercase text-stone-700">
            <div className="space-y-4">
              <p className="hover:text-stone-400 cursor-pointer transition-colors">WEDDINGS & RECEPTIONS</p>
              <p className="hover:text-stone-400 cursor-pointer transition-colors">CORPORATE EVENTS</p>
              <p className="hover:text-stone-400 cursor-pointer transition-colors">FAMILY GATHERINGS</p>
            </div>
            <div className="space-y-4">
              <p className="hover:text-stone-400 cursor-pointer transition-colors">LIVE CHAAT COUNTERS</p>
              <p className="hover:text-stone-400 cursor-pointer transition-colors">TRADITIONAL BUFFETS</p>
              <p className="hover:text-stone-400 cursor-pointer transition-colors">PLATED DINNERS</p>
            </div>
            <div className="space-y-4">
              <p className="hover:text-stone-400 cursor-pointer transition-colors">MENU CUSToMIZATION</p>
              <p className="hover:text-stone-400 cursor-pointer transition-colors">DESSERT TABLES</p>
              <p className="hover:text-stone-400 cursor-pointer transition-colors">BEVERAGE STATIONS</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
