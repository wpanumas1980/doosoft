import Navbar from './containers/components/Navbar/Navbar'
import Home from './containers/pages/Home/Home';
import SignUp from './containers/pages/SignUp/SignUp';
import Complete from './containers/pages/Complete/Complete';
import Email from './containers/pages/Email/Email';
import Admin from './containers/pages/Admin/Admin';
import NotFound from './containers/pages/NotFound/NotFound';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/signup" component={SignUp} />
          <Route path="/complete" component={Complete} />
          <Route path="/email" component={Email} />
          <Route path="/admin" component={Admin} />
          <Route path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
