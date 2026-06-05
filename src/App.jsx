import { useState } from "react"
import Header from "./sections/Header"
import Hero from "./sections/Hero"
import ProjectLog from "./sections/ProjectLog"
import ProjectShowcase from "./sections/ProjectShowcase"
import TechBlogs from "./sections/TechBlog"


function App() {
  const [theme, setTheme] = useState('Light')

  function toggleTheme(){
    const newTheme = theme === 'Light'?'Dark':'Light'
    setTheme(newTheme)
    document.documentElement.classList.toggle('dark', newTheme==='Dark')
  }
  

  return (
    <>
    
    <main className="w-full bg-background">
      <Header selectedTheme='Light' toggleThemeHandler={toggleTheme} />
      <div className="flex flex-col items-start gap-10 mt-8 mx-auto p-8 md:max-w-1/2 md:mt-30 ">
        <Hero />
        <ProjectShowcase />
        <ProjectLog />
        <TechBlogs />
      </div>
    </main>
    
      
    </>
  )
}

export default App
