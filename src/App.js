import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import About from './components/About/About';
import WhyUfs from './components/WhyUfs/WhyUfs';
import NotFound from './components/WhyUfs/NotFound/NotFound';
import ServicesCard from './components/ServicesCard/ServicesCard';

function App() {
  return (
    <div className="App">
     
     <BrowserRouter>
     <Switch>
       <Route path="/home">
           <Home></Home>
       </Route>
       <Route path="/services">
         <ServicesCard></ServicesCard>
       </Route>
       <Route path="/about">
           <About></About>
       </Route>
       <Route path="/whyufs">
         <WhyUfs></WhyUfs>
       </Route>
       <Route path="*">
         <NotFound></NotFound>
       </Route>
     </Switch>
     </BrowserRouter>
     
    </div>
  );
}

export default App;
