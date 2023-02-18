import ReactDOM from "react-dom/client";
import wallpaper from './assets/nasa.jpg'
import Rocket from './assets/Rocket.gif'
// import { useRef } from "react";
// import { useInView } from 'react-intersection-observer';
import './index.css'
export default function App() {
  // const { ref: magic, inView: magicSection } = useInView();
  return (
    <div className="App" style={{ backgroundImage: `url(${wallpaper})`,
                                  backgroundRepeat : "no-repeat",
                                  height:1080,width:2056,
                                  backgroundSize: "contain"}}>  
                                 
    <div className="relative left-[200px] top-[100px]" >
    <span className="animate-waving-hand">
         <img src={Rocket} alt="error" className="h-[100px]"/>
    </span>
    </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);