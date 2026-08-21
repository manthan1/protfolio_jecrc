import { Section } from './Section';
import { professorData } from '../data';
import { GraduationCap } from 'lucide-react';

export function Courses() {
  return (
    <Section id="courses" title="Courses Taught" dark>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0 border border-slate-200 bg-slate-200">
        {professorData.courses.map((course, index) => (
          <div 
            key={index}
            className="bg-white p-8 border-[0.5px] border-slate-200 hover:bg-slate-50 transition-colors"
          >
            <p className="text-[10px] uppercase tracking-widest text-slate-400 mb-2 font-bold">
              {course.code}
            </p>
            <h3 className="text-base font-bold text-slate-800 mb-2">
              {course.title}
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              {course.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
