import './App.scss'

import { Suspense, lazy } from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import ContextProvider from './context/ContextProvider'

import ErrorBoundary from './ErrorBoundary'

const Header = lazy(() => import ('./components/header/Header'))
const AboutPage = lazy(() => import ('./components/aboutPage/AboutPage'))
const ProjectsPage = lazy(() => import('./components/projectsPage/ProjectsPage'))
const MixrProject = lazy(() => import('./components/projectsPage/mixrProject/MixrProject'))
const HelprProject = lazy(() => import('./components/projectsPage/helprProject/HelprProject'))
const MyWebsiteProject = lazy(() => import('./components/projectsPage/myWebsiteProject/MyWebsiteProject'))
const CurriculumPage = lazy(() => import('./components/curriculumPage/CurriculumPage'))
const BlogPage = lazy(() => import('./components/blogPage/BlogPage'))
const ContactPage = lazy(() => import('./components/contactPage/ContactPage'))

export default function App() {
  return (
    <ContextProvider>
      <Router>

        <ErrorBoundary>
          <Suspense fallback={<></>}>
            <Header />
          </Suspense>

          <Routes>
              <Route path='/' element={<Suspense fallback={<></>}><AboutPage /></Suspense>}/>

              <Route path='/projects' element={<Suspense fallback={<></>}><ProjectsPage /></Suspense>}/>

              <Route path='/projects/helpr' element={<Suspense fallback={<></>}><HelprProject /></Suspense>}/>

              <Route path='/projects/myWebsite' element={<Suspense fallback={<></>}><MyWebsiteProject /></Suspense>}/>

              <Route path='/projects/mixr' element={<Suspense fallback={<></>}><MixrProject /></Suspense>}/>

              <Route path='/curriculum' element={<Suspense fallback={<></>}><CurriculumPage /></Suspense>}/>

              <Route path='/blog' element={<Suspense fallback={<></>}><BlogPage /></Suspense>}/>

              <Route path='/contact' element={<Suspense fallback={<></>}><ContactPage /></Suspense>}/>
          </Routes>
        </ErrorBoundary>

      </Router>
    </ContextProvider>
  )
}