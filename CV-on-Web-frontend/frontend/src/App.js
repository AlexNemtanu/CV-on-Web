import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import ListProfiles from './components/ListProfiles';
import CreateProfileComponent from './components/CreateProfileComponent';
import ViewProfilesComponent from './components/ViewProfilesComponent';
import LoginComponent from './components/LoginComponent';
import RegistrationComponent from './components/RegistrationComponent';
import HomeComponent from './components/HomeComponent';
import AboutUsComponent from './components/AboutUsComponent';
function App() {
  return (
    <div>
      <Router>
      <HeaderComponent />
      <div className="container">
        <Switch>
       
          <Route path = "/" exact component = {HomeComponent}></Route>
          <Route path = "/login" component = {LoginComponent}></Route>
          <Route path="/register" component={RegistrationComponent} />
          <Route path = "/profiles" component = {ListProfiles}></Route>
          <Route path = "/add-profile/:id" component = {CreateProfileComponent}></Route>
          <Route path = "/view-profile/:id" component = {ViewProfilesComponent}></Route>
          <Route path="/about-us" component={AboutUsComponent} />
      
      </Switch>
    </div> 
    <FooterComponent />
    </Router>
    </div>
    
  );
}

export default App;
