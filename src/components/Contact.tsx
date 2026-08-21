import { professorData } from '../data';
import { Mail, MapPin, Linkedin, GraduationCap } from 'lucide-react';

export function Contact() {
  return (
    <footer id="contact" className="border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200">
        
        {/* Research Interests (Footer version) */}
        <div className="p-8 md:p-12">
          <h3 className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400 mb-4">Focus Areas</h3>
          <div className="flex flex-wrap gap-2">
            {professorData.researchInterests.map((interest, idx) => (
              <span key={idx} className="bg-slate-100 text-slate-600 px-3 py-1 text-[11px] font-medium rounded-full border border-slate-200">
                {interest.title}
              </span>
            ))}
          </div>
          <div className="mt-12">
            <h3 className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400 mb-4">Location</h3>
            <p className="text-xs font-bold text-slate-800">{professorData.university}</p>
            <p className="text-[11px] text-slate-500 mt-1">{professorData.contact.office}</p>
          </div>
        </div>

        {/* Selected Publications Snippet */}
        <div className="p-8 md:p-12">
          <h3 className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400 mb-4">Latest Publications</h3>
          <ul className="space-y-4">
            {professorData.publications.slice(0, 3).map((pub, index) => (
              <li key={index} className="group cursor-pointer">
                <p className="text-xs font-bold text-slate-800 leading-tight group-hover:text-[#002147] transition-colors">{pub.title}</p>
                <p className="text-[10px] text-slate-500 uppercase tracking-widest mt-1">{pub.venue} &bull; {pub.year}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Connect & Contact */}
        <div className="p-8 md:p-12">
          <h3 className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400 mb-4">Connect</h3>
          <p className="text-xs font-medium text-slate-700 hover:text-[#002147] transition-colors">
            <a href={`mailto:${professorData.contact.email}`}>{professorData.contact.email}</a>
          </p>
          
          <div className="flex mt-6 space-x-4">
            <a 
              href={professorData.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#002147] text-[10px] font-bold uppercase tracking-widest cursor-pointer hover:underline flex items-center gap-1"
            >
              <Linkedin size={14} />
              LinkedIn
            </a>
            <a 
              href={professorData.contact.googleScholar}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#002147] text-[10px] font-bold uppercase tracking-widest cursor-pointer hover:underline flex items-center gap-1"
            >
              <GraduationCap size={14} />
              Scholar
            </a>
          </div>

          <div className="mt-16 pt-8 border-t border-slate-100">
            <p className="text-[10px] text-slate-400">&copy; {new Date().getFullYear()} {professorData.name}. All rights reserved.</p>
          </div>
        </div>

      </div>
    </footer>
  );
}
