import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Container } from '@material-ui/core';
import News from './components/News';
import User from './components/User';
import './App.css'
import Login from './components/Login';


function App() {
  
  return (
    <>
    <BrowserRouter>
      
        <Container>
        <Header />
        
        <Switch>
        <Route path="/" exact  component={() => <News name='topstories' />}  />
       
          <Route path="/newest" exact component={() => <News name='newstories' />} />
          <Route path="/jobs" exact component={() => <News name='jobstories' />}  />
          <Route path="/show" exact  component={() => <News name='showstories' />}  />
          <Route path="/ask" exact component={() => <News name='askstories' />}  />
          <Route path={"/user/id=:id"} exact component={() => <User />}   /> 
          <Route path="/login" exact component={Login} />
         
          
          </Switch>
          <Footer />
        <Footer />
      </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
