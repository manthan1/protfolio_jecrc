import { Section } from './Section';
import { professorData } from '../data';

export function About() {
  return (
    <Section id="about" title="About Me">
      <div className="max-w-4xl">
        <p className="text-lg md:text-xl text-slate-700 leading-relaxed font-light">
          {professorData.bio}
        </p>
      </div>
    </Section>
  );
}
