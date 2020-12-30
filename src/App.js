import { BrowserRouter, Route } from 'react-router-dom';
import { Switch } from 'react-router';
import Header from './components/Header.js';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/signin" exact component={LoginPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
