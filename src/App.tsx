import './App.css'
import Home from './components/Home'
import Sidebar from './components/Sidebar'

function App() {

  return (
    <div className='flex p-2'>
      <Sidebar/>
      <Home />
    </div>
  )
}

export default App
