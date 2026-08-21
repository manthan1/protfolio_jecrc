import { Section } from './Section';
import { professorData } from '../data';
import { BookOpen } from 'lucide-react';

export function Publications() {
  return (
    <Section id="publications" title="Selected Publications">
      <div className="border-t border-slate-200">
        <ul className="space-y-0">
          {professorData.publications.map((pub, index) => (
            <li 
              key={index}
              className="group py-6 border-b border-slate-200 hover:bg-slate-50 transition-colors cursor-pointer"
            >
              <div className="flex flex-col sm:flex-row gap-4 items-baseline px-4">
                <div className="flex-1">
                  <h3 className="text-base font-bold text-slate-800 mb-2 group-hover:text-[#002147] transition-colors leading-snug">
                    {pub.title}
                  </h3>
                  <div className="text-[11px] text-slate-500 uppercase tracking-widest font-medium">
                    {pub.venue} &bull; {pub.year}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-8 px-4">
        <a 
          href={professorData.contact.googleScholar} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-xs uppercase tracking-widest font-bold text-[#002147] hover:underline transition-all"
        >
          View all publications &rarr;
        </a>
      </div>
    </Section>
  );
}
