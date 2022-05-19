import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Addcourse from './components/Addcourse';
import Viewcourse from './components/Viewcourse';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
   <div>

<BrowserRouter>
<Routes>
  <Route path="/" exact element={<Addcourse/>}/>
  <Route path="/view" exact element={<Viewcourse/>}/>
</Routes>

</BrowserRouter>

   </div>
  );
}

export default App;
