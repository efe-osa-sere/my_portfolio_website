
import { RevealOnScroll } from '../RevealOnScroll'

export const Projects = () => {
  return (
    
    <section id='projects' className='min-h-screen flex items-center justify-center py-20'>
        <RevealOnScroll>
        <div className='max-w-5xl mx-auto px-4'>
            <h2 className='text-3xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-center text-transparent'>Featured Projects</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div className='p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30
                hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition'>
                    <h3 className='text-xl font-bold mb-2'>Portfolio Website Using Python </h3>
                    <p className='text-gray-400 mb-4'>Developed a personal portfolio website using Python and Streamlit, designed to showcase projects, technical skills, and data-driven applications. The website highlights my proficiency in Python programming, with interactive sections built using Streamlit for seamless navigation and responsiveness. Integrated 
                        Pandas for dynamic data fetching and manipulation, demonstrating practical data analysis capabilities within a web-based interface.</p>
                    <div className='flex flex-wrap gap-2 mb-4'>
                        {["Python", "Pandas", "Streamlit", "Pillow"].map((tech, key) => (
                             <span
                            key={key}
                            className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                            hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all'>{tech}</span>
                        ))}
                    </div>
                    <div className='flex justify-between items-center'>
                        <a href="https://efe-osa-sere-python-demo-app-home-wyvuv5.streamlit.app/" className='text-blue-400 hover:text-blue-300 transition-colors my-4'>View Projects ➡️</a>
                    </div>
                </div>
                <div className='p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30
                hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition'>
                    <h3 className='text-xl font-bold mb-2'>Movie App</h3>
                    <p className='text-gray-400 mb-4'>A responsive movie discovery web application that allows users to browse, search, and view details about movies using a third-party API. The app features a clean and interactive UI built with React.js, HTML5, CSS3, and JavaScript (ES6+), ensuring seamless navigation across devices. Implemented dynamic search, filtering, and movie detail pages, while leveraging 
                        React hooks for state management and fetch API for data integration. Deployed on GitHub Pages
                         with Vite for fast and reliable hosting.</p>
                    <div>
                        {["React", "Node.js", "TailwindCss" ].map((tech, key) => (
                             <span
                            key={key}
                            className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                            hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all'>{tech}</span>
                        ))}
                    </div>
                    <div className='flex justify-between items-center'>
                        <a href="https://github.com/efe-osa-sere/Movie_app" className='text-blue-400 hover:text-blue-300 transition-colors my-4'>View Projects ➡️</a>
                    </div>
                </div>
                {/* <div className='p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30
                hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition'>
                    <h3 className='text-xl font-bold mb-2'>Cloud Platform</h3>
                    <p className='text-gray-400 mb-4'>Scalable cloud infrastructure management with real-time monitoring and automated scaling</p>
                    <div>
                        {["React", "Node.js", "AWS", "Docker"].map((tech, key) => (
                             <span
                            key={key}
                            className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                            hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all'>{tech}</span>
                        ))}
                    </div>
                    <div className='flex justify-between items-center'>
                        <a href="#" className='text-blue-400 hover:text-blue-300 transition-colors my-4'>View Projects ➡️</a>
                    </div>
                </div> */}
                {/* <div className='p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30
                hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition'>
                    <h3 className='text-xl font-bold mb-2'>Cloud Platform</h3>
                    <p className='text-gray-400 mb-4'>Scalable cloud infrastructure management with real-time monitoring and automated scaling</p>
                    <div>
                        {["React", "Node.js", "AWS", "Docker"].map((tech, key) => (
                             <span
                            key={key}
                            className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                            hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all'>{tech}</span>
                        ))}
                    </div>
                    <div className='flex justify-between items-center'>
                        <a href="#" className='text-blue-400 hover:text-blue-300 transition-colors my-4'>View Projects ➡️</a>
                    </div>
                </div> */}
            </div>
        </div>
        </RevealOnScroll>
    </section>
    
  )
}
