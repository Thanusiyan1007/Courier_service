import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Service from './components/Service'
import Testimoials from './components/Testimoials'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <Header/>
      <About/>
      <Service/>
      <Testimoials/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App