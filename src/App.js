import { BrowserRouter, Route } from 'react-router-dom';
import { Switch } from 'react-router';
import Header from './components/Header.js';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import NoteListPage from './pages/NoteListPage';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/sign-in" exact component={LoginPage} />
        <Route path="/notes" exact component={NoteListPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
