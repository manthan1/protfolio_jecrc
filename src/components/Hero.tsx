import { professorData } from '../data';
import { Mail } from 'lucide-react';

export function Hero() {
  return (
    <section className="bg-white min-h-[90vh] flex border-b border-slate-100">
      <div className="w-full flex flex-col md:flex-row">
        <div className="flex-1 md:w-7/12 p-8 md:p-12 lg:p-20 flex flex-col justify-center border-r border-slate-100">
          <span className="text-[#002147] font-semibold tracking-tighter text-sm mb-4 uppercase">
            {professorData.designation}, {professorData.department}
          </span>
          <h1 className="font-serif text-5xl md:text-7xl leading-none mb-6 text-slate-900">
            {professorData.name.split(' ')[0]} <span className="italic text-[#002147]">{professorData.name.split(' ').slice(1).join(' ')}</span>
          </h1>
          <p className="text-slate-600 leading-relaxed text-lg mb-8 max-w-lg">
            {professorData.tagline}
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <a 
              href="#publications" 
              className="border border-[#002147] px-6 py-2 text-xs font-bold uppercase tracking-widest text-[#002147] hover:bg-[#002147] hover:text-white cursor-pointer transition-colors inline-flex items-center"
            >
              View Publications
            </a>
            <a 
              href="#contact" 
              className="bg-slate-100 px-6 py-2 text-xs font-bold uppercase tracking-widest text-slate-600 hover:bg-slate-200 cursor-pointer inline-flex items-center transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>
        
        <div className="flex-1 md:w-5/12 relative bg-slate-50 min-h-[400px]">
          <div className="absolute inset-8 md:inset-12 border border-slate-200 flex flex-col items-center justify-center bg-white shadow-sm overflow-hidden">
            <div className="w-full h-full bg-slate-200 flex items-center justify-center relative">
              <img 
                src={professorData.photoPlaceholder} 
                alt={professorData.name} 
                className="w-full h-full object-cover absolute inset-0 grayscale contrast-125 brightness-90 hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur p-4 border border-slate-100 z-10 hidden sm:block">
              <p className="text-[10px] uppercase tracking-widest text-slate-400 mb-1">Affiliation</p>
              <p className="text-sm font-serif font-bold text-[#002147]">{professorData.university}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
