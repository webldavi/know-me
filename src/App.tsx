import './App.css'


import Nav from './Components/Nav/Nav'
import Welcome from './sections/Welcome/Welcome'
import Knowme from './sections/Knowme/Knowme'
import Projects from './sections/Projects/Projects'
import Skills from './sections/Skills/Skills'

export default function App(){
  return (
    <>
      <Nav/>
      <main className="main">
        <Welcome/>
        <Knowme/>
        <Projects/>
        <Skills/>
      </main>
    </>
  )
}