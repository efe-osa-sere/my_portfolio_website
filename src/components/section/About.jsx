
import { RevealOnScroll } from '../RevealOnScroll'

export const About = () => {
    const frontendSkills = ['React', 'Vanilla', 'TailwindCSS', 'HTML']
    const backendSkills = ['Node.js','SQL', 'Express', 'PostgreSQL']
    const pythonSkills = ['Pandas', 'Numpy', 'Django', 'Mathplotlib', 'Seaborn']
  return (
    
    <section id="about" className='min-h-screen flex items-center justify-center py-20'>
       <RevealOnScroll>
        <div className='max-w-3xl mx-auto px-4'>
            <h2 className='text-3xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-center text-transparent'>About Me</h2>
        <div className='rounded-x p-8 border-white/10 border hover:-translate-y-1 transition-all'>
            <p className='text-gray-300 mb-6'>
                Passionate developer with expertise in building scalable web applications and creating innovative solutions.
            </p>
            <div className='grid-cols-1 md:grid-cols-2 gap-6'>
                <div className='rounded-xl p-6 hover:-translate-y-1 transition-all'>
                    <h3 className='text-xl font-bold mb-4'>Frontend</h3>
                    <div className='flex flex-wrap gap-2'>
                        {frontendSkills.map((tech, key) => (
                            <span
                            key={key}
                            className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                            hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition'>{tech}</span>
                        ))}
                    </div>
                </div>
            </div>

            <div className='grid-cols-1 md:grid-cols-2 gap-6'>
                <div className='rounded-xl p-6 hover:-translate-y-1 transition-all'>
                    <h3 className='text-xl font-bold mb-4'>Backend</h3>
                    <div className='flex flex-wrap gap-2'>
                        {backendSkills.map((tech, key) => (
                            <span
                            key={key}
                            className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                            hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition'>{tech}</span>
                        ))}
                    </div>
                </div>
            </div>

            <div className='grid-cols-1 md:grid-cols-2 gap-6'>
                <div className='rounded-xl p-6 hover:-translate-y-1 transition-all'>
                    <h3 className='text-xl font-bold mb-4'>Python</h3>
                    <div className='flex flex-wrap gap-2'>
                        {pythonSkills.map((tech, key) => (
                            <span
                            key={key}
                            className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                            hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition'>{tech}</span>
                        ))}
                    </div>
                </div>
            </div>
        </div>


            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-8'>
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                <h3 className='text-xl font-bold mb-4'>📖 Education</h3>
                <ul className='list-disc list-inside text-gray-300 space-y-2'>
                    <li>
                        <strong>B.Eng in Electrical/Electronics Engineering</strong> University of Benin, Benin City, Edo State. Nigeria [2015-2019]
                    </li>
                    <li>
                        Relevant Coursework: Digital Logic Designs/ Digital Elecronics, Microprocessors and Microcontrollers, Control systems, Computer programming, Probability and Statistics
                    </li>
                </ul>
                </div>
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                <h3 className='text-xl font-bold mb-4'>💼 Work Experience</h3>
                <div className='space-y-4 text-gray-300'>
                    <div>
                        <h4 className='font-semibold'>Electrical Engineer at China Civil Engineering Construction Corporation(CCECC) [2022-till present]</h4>
                        <ul className='list-disc list-inside text-gray-300 space-y-2'>
                            <li>
                                Supervised and managed the installation of 33kV power supply system for Lagos-Ibadan Railway Project
                            </li>
                            <li>
                                Installed and operated railway monitoring terminals and softwares such as Centralized Traffic Control System (CTC) and Computer Based Interlocking System (CBI)
                            </li>
                        </ul>
                    </div>

                     <div>
                        <h4 className='font-semibold'>Intern at Orchestra Startup [remote] (2023) </h4>
                       <p>Assited in building front-end components and integration of REST APIs</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
        </RevealOnScroll>
    </section>
    
  )
}
