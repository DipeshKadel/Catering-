import { Flame, Star, Coffee, CakeSlice, Leaf } from 'lucide-react';

interface MenuItemProps {
  title: string;
  price?: string;
  description?: string;
  extras?: React.ReactNode;
}

function MenuItem({ title, price, description, extras }: MenuItemProps) {
  return (
    <div className="mb-8">
      <div className="flex items-baseline mb-1 gap-3 hover:opacity-80 transition-opacity">
        <h4 className="font-sans font-medium text-sm md:text-base uppercase tracking-widest text-stone-800">
          {title}
        </h4>
        {price && <span className="font-mono text-amber-700/80 text-sm">{price}</span>}
      </div>
      {description && (
        <p className="font-mono text-xs md:text-sm text-stone-500 leading-relaxed mb-3">
          {description}
        </p>
      )}
      {extras && <div className="mt-2">{extras}</div>}
    </div>
  );
}

export default function MenuSection() {
  return (
    <section id="menu" className="max-w-6xl mx-auto py-24 px-6">
      <div className="text-center mb-24">
        <h2 className="font-serif text-5xl md:text-7xl tracking-[0.1em] text-stone-800 mb-6">
          MENU
        </h2>
        <p className="font-mono text-sm md:text-base text-stone-500 max-w-2xl mx-auto leading-relaxed">
          From traditional delicacies made daily to grand buffets prepared by hand, 
          our goal is simple: satisfying, authentic Indian food.
        </p>
      </div>

      <div className="space-y-24 max-w-4xl mx-auto">

        {/* Appetizers */}
        <div>
          <div className="flex items-center gap-4 mb-2">
            <Star className="w-8 h-8 text-stone-800" strokeWidth={1} />
            <h3 className="font-sans text-2xl uppercase tracking-[0.2em] text-stone-800">
              Appetizers
            </h3>
          </div>
          <p className="font-mono text-xs tracking-widest text-stone-400 mb-10 uppercase">Perfect Starters &bull; All Time</p>
          
          <div className="grid md:grid-cols-2 gap-x-16">
            <MenuItem 
              title="Paneer Tikka Skewers" 
              price="$12"
              description="Marinated cottage cheese, bell peppers, and onions roasted in a traditional earthen oven, served with mint chutney."
            />
            <MenuItem 
              title="Crispy Samosa Chaat" 
              price="$10"
              description="Crushed savory pastries topped with spiced chickpeas, yogurt, tamarind and mint sauces."
            />
            <MenuItem 
              title="Hara Bhara Kebab" 
              price="$11"
              description="Delicate spinach, pea, and potato patties, delicately spiced and pan-fried."
              extras={
                <div className="font-mono text-xs text-stone-500">
                  <p className="font-bold text-stone-700 mb-1">CHOICE OF DIP:</p>
                  <ul className="list-disc list-inside space-y-1 ml-1">
                    <li>Mint Coriander</li>
                    <li>Tamarind Date</li>
                    <li>Spiced Yogurt</li>
                  </ul>
                </div>
              }
            />
            <MenuItem 
              title="Chicken Tikka" 
              price="$14"
              description="Tender chicken pieces marinated overnight in yogurt and house-blended spices, charred to perfection."
            />
          </div>
        </div>

        {/* Main Course - Styled differently per reference (Lunch section has background) */}
        <div className="bg-stone-50 p-8 md:p-12 -mx-8 md:-mx-12 rounded-sm border border-stone-100">
          <div className="flex items-center gap-4 mb-2">
            <Flame className="w-8 h-8 text-stone-800" strokeWidth={1} />
            <h3 className="font-sans text-2xl uppercase tracking-[0.2em] text-stone-800">
              Main Course
            </h3>
          </div>
          <p className="font-mono text-xs tracking-widest text-stone-400 mb-10 uppercase">The Grand Feast &bull; Lunch & Dinner</p>
          
          <div className="grid md:grid-cols-2 gap-x-16">
            <div className="space-y-2">
                <p className="font-sans text-xs font-bold tracking-widest mb-4">VEGETARIAN MAINS:</p>
                <MenuItem 
                title="Dal Makhani Special" 
                price="$16"
                description="Black lentils simmered over 24 hours with rich butter and cream (Add garlic naan $3)"
                />
                <MenuItem 
                title="Shahi Paneer" 
                price="$18"
                description="Cottage cheese cubes in a thick, creamy gravy made of tomatoes, onions and cashew nuts."
                />
                <MenuItem 
                title="Palak Kofta" 
                price="$17"
                description="Soft mixed veg dumplings cooked in a vibrant, spiced spinach puree."
                />
            </div>
            
            <div className="space-y-2">
                <p className="font-sans text-xs font-bold tracking-widest mb-4">NON-VEG MAINS:</p>
                <MenuItem 
                title="Rana's Butter Chicken" 
                price="$20"
                description="Our signature dish. Charred chicken tikka simmered in a smooth, sweet and savory tomato butter sauce."
                />
                <MenuItem 
                title="Awadhi Lamb Biryani" 
                price="$22"
                description="Fragrant basmati rice gently cooked with tender lamb, saffron, and whole spices, sealed with dough."
                />
                <MenuItem 
                title="Goan Fish Curry" 
                price="$21"
                description="Changes regularly depending on fresh catch, cooked in a tangy coconut broth."
                />
            </div>
          </div>
        </div>

        {/* Prepared / Breads */}
        <div>
          <div className="flex items-center gap-4 mb-2">
            <Leaf className="w-8 h-8 text-stone-800" strokeWidth={1} />
            <h3 className="font-sans text-2xl uppercase tracking-[0.2em] text-stone-800">
              Fresh Breads & Sides
            </h3>
          </div>
          <p className="font-mono text-xs tracking-widest text-stone-400 mb-8 uppercase">Baked Fresh &bull; All Day</p>
          
          <p className="font-mono text-sm text-stone-500 leading-relaxed max-w-2xl">
            We offer an ever-changing assortment of <strong className="text-stone-800 whitespace-nowrap">hand-tossed naans</strong>, 
            <strong className="text-stone-800 whitespace-nowrap"> flaky parathas</strong>, and 
            <strong className="text-stone-800 whitespace-nowrap"> aromatic rice varieties</strong> thoughtfully prepared for you 
            to pair with our rich gravies. See what's baking in the Rana kitchen's tandoor today.
          </p>
        </div>

        {/* Desserts */}
        <div>
          <div className="flex items-center gap-4 mb-2">
            <CakeSlice className="w-8 h-8 text-stone-800" strokeWidth={1} />
            <h3 className="font-sans text-2xl uppercase tracking-[0.2em] text-stone-800">
              Sweet Treats
            </h3>
          </div>
          <p className="font-mono text-xs tracking-widest text-stone-400 mb-8 uppercase">Made from Scratch</p>
          
          <p className="font-mono text-sm text-stone-500 leading-relaxed max-w-2xl mb-8">
            All of our <strong className="text-stone-800">Gulab Jamuns</strong>, <strong className="text-stone-800">Rasmalai</strong> and other 
            <strong className="text-stone-800"> sweet delicacies</strong> are made from scratch daily in 
            the Rana catering kitchen, following recipes passed down through generations.
          </p>
        </div>

        {/* Beverages */}
        <div>
          <div className="flex items-center gap-4 mb-2">
            <Coffee className="w-8 h-8 text-stone-800" strokeWidth={1} />
            <h3 className="font-sans text-2xl uppercase tracking-[0.2em] text-stone-800">
              Beverages
            </h3>
          </div>
          <p className="font-mono text-xs tracking-widest text-stone-400 mb-8 uppercase">Refreshments &bull; All Day</p>
          
          <p className="font-mono text-sm text-stone-500 leading-relaxed max-w-2xl">
            We proudly serve our signature <strong className="text-stone-800 whitespace-nowrap">Masala Chai</strong>, 
            brewed specially for us using premium Assam leaves and fresh spices. Add to that 
            <strong className="text-stone-800 whitespace-nowrap"> Mango Lassi</strong>, 
            <strong className="text-stone-800 whitespace-nowrap"> Fresh Lime Soda</strong>, and a selection of natural coolers, 
            and we should have a drink to satisfy every thirst at your event.
          </p>
        </div>

      </div>
    </section>
  );
}
