import Header from './components/Header';
import ImageBanner from './components/ImageBanner';
import DividerTextBlock from './components/DividerTextBlock';
import MenuSection from './components/MenuSection';
import ServicesSection from './components/ServicesSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Top Hero Image - Vibrant Indian Spices/Food Setup */}
        <ImageBanner 
          src="https://images.unsplash.com/photo-1596683720379-b7eaf5fe1415?q=80&w=2940&auto=format&fit=crop" 
          alt="Rana Catering Spices"
          heightClass="h-[70vh] md:h-[80vh]"
        />

        {/* Mission Statement */}
        <DividerTextBlock 
          heading={<>EAT WELL. <br className="md:hidden" />SERVE WITH JOY.</>}
          text="At Rana Catering we're passionate about bringing authentic Indian flavors to your special occasions - from traditional weddings and corporate events to intimate family gatherings in Sarangpur. We use the finest ingredients and time-honored recipes."
        />

        {/* Secondary Banner - Elegant Indian Dish (like Biryani or Thali) */}
        <ImageBanner 
          src="https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?q=80&w=2940&auto=format&fit=crop" 
          alt="Authentic Biryani"
          heightClass="h-[50vh] md:h-[60vh]"
        />

        {/* Main Menu Area */}
        <MenuSection />

        {/* Third Banner - Catering setup / Buffet line */}
        <ImageBanner 
          src="https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2940&auto=format&fit=crop" 
          alt="Catering Setup"
          heightClass="h-[50vh] md:h-[60vh]"
        />

        {/* Services / Offerings area (replacing Market) */}
        <ServicesSection />
        
        {/* Meet the Makers equivalent - optional image grid at bottom */}
        <section className="max-w-6xl mx-auto px-6 mb-24">
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="w-2 h-2 bg-stone-300 transform rotate-45"></div>
            <h3 className="font-sans text-sm md:text-base font-bold tracking-[0.3em] uppercase text-stone-600 text-center">
              Our Passion
            </h3>
            <div className="w-2 h-2 bg-stone-300 transform rotate-45"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             <img 
               src="https://images.unsplash.com/photo-1628169906660-394bfcbce568?q=80&w=2692&auto=format&fit=crop" 
               alt="Indian Feast" 
               className="w-full h-96 object-cover object-center grayscale hover:grayscale-0 transition-all duration-700"
             />
             <img 
               src="https://images.unsplash.com/photo-1625398407796-a29b06a1a83a?q=80&w=2940&auto=format&fit=crop" 
               alt="Cooking Process" 
               className="w-full h-96 object-cover object-center grayscale hover:grayscale-0 transition-all duration-700"
             />
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
