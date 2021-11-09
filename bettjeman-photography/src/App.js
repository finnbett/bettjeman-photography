import { Header } from './header'
import { Catagory } from './catagory'
import { Route, Routes } from "react-router";
import  Birds  from './birds'
import Landscape from './landscape';
import  Night  from './night'
import OtherAnimals from './other-animals';
import  Plants  from './plants'
import LargeImage from './LargeImage';
//Create a route and component for large images. when you click on the image, the image is larger and the 
//corresponding image decription is displayed


function App() {
  return (<>
    <div className="App">
      
      <Header/>
      <header/>
      <Routes>
        <Route path="/birds" element= {<Birds/>}/>
        <Route path="/landscape" element= {<Landscape/>}/>
        <Route path="/night" element= {<Night/>}/>
        <Route path="/other-animals" element= {<OtherAnimals/>}/>
        <Route path="/plants" element= {<Plants/>}/>
        <Route path= "/LargeImage/:image" element= {<LargeImage/>}/>
        <Route path= "/" element={<Catagory/>}/>
      </Routes>
    </div>
    
   
       
</>
  );
}

export default App;
