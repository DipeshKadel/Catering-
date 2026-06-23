import React from 'react';

interface DividerTextBlockProps {
  heading: React.ReactNode;
  text: string;
}

export default function DividerTextBlock({ heading, text }: DividerTextBlockProps) {
  return (
    <section className="max-w-4xl mx-auto text-center py-20 px-6">
      <h2 className="font-serif text-3xl md:text-5xl tracking-[0.25em] text-stone-800 mb-8 uppercase leading-tight">
        {heading}
      </h2>
      <p className="font-mono text-sm md:text-base text-stone-600 max-w-2xl mx-auto leading-relaxed">
        {text}
      </p>
    </section>
  );
}
