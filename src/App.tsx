/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Research } from './components/Research';
import { Publications } from './components/Publications';
import { Courses } from './components/Courses';
import { Contact } from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-slate-200">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Research />
        <Publications />
        <Courses />
      </main>
      <Contact />
    </div>
  );
}
