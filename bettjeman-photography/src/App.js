import { Header } from './header'
import { Catagory } from './catagory'
import { Route, Routes } from "react-router";
import  Birds  from './birds'
//import { Landscape} from './landscape
//import { Other-animals } form './other-animals
//import { Night } form './night
//import { Plants } from './plants

function App() {
  return (<>
    <div className="App">
      
      <Header/>
      <header/>
      <Routes>
      
      <Route path= "/" element={<Catagory/>}/>

      <Route path="/birds" element= {<Birds/>}/>
      </Routes>
    </div>
   
       
</>
  );
}

export default App;
