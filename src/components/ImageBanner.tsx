export default function ImageBanner({ src, alt, heightClass = 'h-[60vh]' }: { src: string, alt: string, heightClass?: string }) {
  return (
    <div className={`w-full ${heightClass} relative overflow-hidden`}>
      <img 
        src={src} 
        alt={alt} 
        className="w-full h-full object-cover object-center"
      />
    </div>
  );
}
