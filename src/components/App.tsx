import React,{useState, useRef} from 'react';
import '../App.css';
import Header from './header';
import Hero from './hero';
import About from './about';
import Services from './services';
import Experience from './experience';
import Footer from './footer';
import Form from './form';

const App:React.FC = () => {
  const[active,setActive]=useState<boolean>(false)
  const[formopen, setFormopen]= useState<boolean>(false)

  const formoverlay = formopen? 'brightness-50 fixed':''
  const formshow = formopen? '':'hidden'

  const formref=useRef<HTMLDivElement>(null)
  


  return (
    <>
      <div className={`font-sans ${formoverlay}`}>
        <Header active={active} setActive={setActive} />
        <Hero setFormopen={setFormopen} formref={formref}/>
        <About/>
        <Services/>
        <Experience/>
        <Footer/>
      </div>
      <div ref={formref} className={` ${formshow}`}><Form setFormopen={setFormopen}/></div>
    </>
  );
}

export default App;
//App