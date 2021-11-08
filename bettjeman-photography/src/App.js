import { Header } from './header'
import { Catagory } from './catagory'
import { Route, Routes } from "react-router";
import  Birds  from './birds'
import Landscape from './landscape';
import  Night  from './night'
import OtherAnimals from './other-animals';
import  Plants  from './plants'

function App() {
  return (<>
    <div className="App">
      
      <Header/>
      <header/>
      <Routes>
        <Route path= "/" element={<Catagory/>}/>
        <Route path="/birds" element= {<Birds/>}/>
        <Route path="/landscape" element= {<Landscape/>}/>
        <Route path="/night" element= {<Night/>}/>
        <Route path="/other-animals" element= {<OtherAnimals/>}/>
        <Route path="/plants" element= {<Plants/>}/>
      </Routes>
    </div>
   
       
</>
  );
}

export default App;
