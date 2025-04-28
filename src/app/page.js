import Navbar from '../components/Navbar';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { BsChevronDown } from 'react-icons/bs';
import About from '@/components/About';
import Skills from '@/components/Skills'
import Projects from '@/components/Project';

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="min-h-screen flex flex-col justify-center items-center text-center  px-6">
        <section id="home" className="flex flex-col  items-center">
          <h2 className="text-lg md:text-xl font-medium mb-2 mt-42">Hello, I'm</h2>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Ali Nikfarjam
          </h1>
          <h3 className="text-xl md:text-2xl font-medium mb-6">
            Front Developer
          </h3>
          <p className="text-base md:text-lg max-w-md mb-8">
            Dedicated software engineer skilled in JavaScript,
            React.js, Next.js, Redux. Known for innovative problem
            solving, reliable decision-making, and fostering results-driven
            teams. Open to relocation.
          </p>

          <div className="flex gap-4 mb-10">
            <a
              href="https://github.com/alinikfarjam79"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/ali-nikfarjam-ba4028208/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="mailto:alinikfarjam344@gmail.com"
              className="p-3 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
            >
              <FaEnvelope size={24} />
            </a>
          </div>

          <a href="#about" className="animate-bounce">
            <BsChevronDown size={30} />
          </a>
        </section>
        <About />
        <Skills />
        <Projects />
        <div className='w-full flex gap-4 justify-center items-center border-t py-4'>
          <p>developed by AliNikfarjam</p>

          <div className="flex gap-4 ">
            <a
              href="https://github.com/alinikfarjam79"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/ali-nikfarjam-ba4028208/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="mailto:alinikfarjam344@gmail.com"
              className="p-3 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
            >
              <FaEnvelope size={24} />
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}