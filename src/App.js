
import './App.css';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Resume from './components/Resume';


function App() {
  return (
      <div className="App">
          <Header/>
          <Resume/>
          <Contact/>
          <Footer/>

      </div>
  );
}

export default App;
