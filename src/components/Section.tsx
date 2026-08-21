import { ReactNode } from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
  dark?: boolean;
}

export function Section({ id, title, children, className = '', dark = false }: SectionProps) {
  return (
    <section 
      id={id} 
      className={`py-16 md:py-24 ${dark ? 'bg-slate-50' : 'bg-white'} border-b border-slate-200 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif italic text-3xl md:text-4xl text-[#002147] font-bold mb-12 border-b border-slate-200 pb-6">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}
