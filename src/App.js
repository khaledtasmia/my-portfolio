import './App.css';
import About from './components/About/About';
import Blogs from './components/Blogs/Blogs';
import Header from './components/Header/Header';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';


function App() {
  return (
    <div>
     <Header></Header>
     <About></About>
     <Projects></Projects>
     <Blogs></Blogs>
     <Contact></Contact>
    </div>
  );
}

export default App;
