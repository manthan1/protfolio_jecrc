import { Section } from './Section';
import { professorData } from '../data';
import { Lightbulb } from 'lucide-react';

export function Research() {
  return (
    <Section id="research" title="Research Interests" dark>
      <div className="grid md:grid-cols-2 gap-0 border border-slate-200 bg-slate-200">
        {professorData.researchInterests.map((interest, index) => (
          <div 
            key={index} 
            className="bg-white p-8 hover:bg-slate-50 transition-colors group border-[0.5px] border-slate-200"
          >
            <div className="mb-6 text-[#002147] opacity-70 group-hover:opacity-100 transition-opacity">
              <Lightbulb size={28} strokeWidth={1.5} />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-[#002147] transition-colors">
              {interest.title}
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {interest.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
