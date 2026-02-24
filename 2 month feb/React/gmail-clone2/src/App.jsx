import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    //react Fregment
    <>
    <div className='container'>
      <h1>Welcome to My React Project</h1>
      
      <p>This is a simple paragraph in React.React lets you build user interfaces out of individual pieces called components. 
        Create your own React components like Thumbnail, LikeButton, and Video. 
         Then combine them into entire screens, pages, and apps.React components are JavaScript functions. 
         Want to show some content conditionally? Use an if statement.
          Displaying a list? Try array map. Learning React is learning programming
          </p>

      <ul className='skills'>
        <li>HTML </li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React JS</li>
      </ul>
    </div>
    
      
    </>
  )
}

export default App
