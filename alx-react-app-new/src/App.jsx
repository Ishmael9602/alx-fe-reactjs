import React from 'react'
import './App.css'
import WelcomeMessage from './components/WelcomeMessage'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import UserProfile from './components/UserProfile'
import Button from './components/Button'

function App() {
  return (
    <>
      <Header />
      <WelcomeMessage />
      <MainContent />

      <UserProfile 
        name="Ishmael Mavundla" 
        age="29" 
        bio="Aspiring full-stack developer from Pretoria. Passionate about hiking, photography, and solving real-world tech problems." 
      />

      <Button label="Click Me!" onClick={() => alert('Button clicked!')} />

      <Footer />
    </>
  )
}

export default App
