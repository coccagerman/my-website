import './App.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ContextProvider from './context/ContextProvider'
import Header from './components/header/Header'
import AboutPage from './components/aboutPage/AboutPage'
import ProjectsPage from './components/projectsPage/ProjectsPage'
import MyWebsiteProject from './components/projectsPage/myWebsiteProject/MyWebsiteProject'
import HelprProject from './components/projectsPage/helprProject/HelprProject'
import CurriculumPage from './components/curriculumPage/CurriculumPage'
import BlogPage from './components/blogPage/BlogPage'
import ContactPage from './components/contactPage/ContactPage'

export default function App() {
  return (
    <ContextProvider>
      <Router>

        <Header />

        <Routes>
            <Route path='/' element={<AboutPage />}/>

            <Route path='/projects' element={<ProjectsPage />}/>

            <Route path='/projects/helpr' element={<HelprProject />}/>

            <Route path='/projects/myWebsite' element={<MyWebsiteProject />}/>

            <Route path='/curriculum' element={<CurriculumPage />}/>

            <Route path='/blog' element={<BlogPage />}/>

            <Route path='/contact' element={<ContactPage />}/>
        </Routes>

      </Router>
    </ContextProvider>
  )
}