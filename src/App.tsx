import './App.css'

import Footer from "./components/Footer";
import Project_Display from './components/Project_Display';
import AboutPage from './components/About/About_Page';
import Tabs from './components/Top_Tabs';

function App() {

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <div className='bg-[#143D60]'>
          <div>
            <Tabs />
          </div>
          <div className=" border-b border-gray-20">
            <AboutPage />
          </div>
          <div className="border-b border-gray-20 pt-10">
            <Project_Display />
          </div>  
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
