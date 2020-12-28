import React, { useEffect } from 'react';
import Navbar from './containers/components/Navbar/Navbar'
import Home from './containers/pages/Home/Home';
import SignUp from './containers/pages/SignUp/SignUp';
import Complete from './containers/pages/Complete/Complete';
import Email from './containers/pages/Email/Email';
import Admin from './containers/pages/Admin/Admin';
import NotFound from './containers/pages/NotFound/NotFound';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import UserContext from './containers/components/UserContext/UserContext';


function usePersistedState(key, defaultValue) {
  const [state, setState] = React.useState(
    () => JSON.parse(localStorage.getItem(key)) || defaultValue
  );
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);
  return [state, setState];
}

function App() {
  const [email, setEmail] = usePersistedState("email","");

  return (
    <>
      <BrowserRouter>
        <UserContext.Provider value={{email, setEmail}}>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/signup" component={SignUp} />
            <Route path="/complete" component={Complete} />
            <Route path="/email" component={Email} />
            <Route path="/admin" component={Admin} />
            <Route path="*" component={NotFound} />
          </Switch>
        </UserContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
