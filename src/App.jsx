import { useRef, useState } from "react"
import Header from "./sections/Header"
import Hero from "./sections/Hero"
import ProjectLog from "./sections/ProjectLog"
import ProjectShowcase from "./sections/ProjectShowcase"
import TechBlogs from "./sections/TechBlog"
import Footer from "./sections/Footer"


function App() {
  const [theme, setTheme] = useState('Light')
  const projectLogRef = useRef(null)

  function toggleTheme(){
    const newTheme = (theme === 'Light'?'Dark':'Light')
    setTheme(newTheme)
    document.documentElement.classList.toggle('dark', newTheme==='Dark')
  }

  function scrollToLog() {
    projectLogRef.current?.scrollIntoView({ behavior: 'smooth' });
    console.log('clicked')
  };
  

  return (
    <>
    
    <main className="w-full bg-background">
      <Header selectedTheme={theme} toggleThemeHandler={toggleTheme} />
      <div className="flex flex-col items-start gap-10 mt-8 mx-auto p-8 md:max-w-1/2 md:mt-20 mb-20">
        <Hero scrollToLog={scrollToLog}/>
        <ProjectShowcase />
        <ProjectLog projectLogRef={projectLogRef} />
        {/* <TechBlogs /> */}
      </div>
      <Footer />
    </main>
    
      
    </>
  )
}

export default App
