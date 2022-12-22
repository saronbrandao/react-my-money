import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';
import { useState } from 'react';

import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import NavBar from './components/NavBar';
import Background from './components/UI/Background';
import ModalWindow from './components/ModalWindow';

function App() {
  const { authIsReady, user } = useAuthContext();
  const [modalVisible, setModalVisible] = useState(false);

  const modalVisibleHandler = () => {
    setModalVisible((prevState) => !prevState);
  };
  return (
    <>
      {authIsReady && (
        <Router>
          {modalVisible && <ModalWindow setModalVisible={setModalVisible} />}
          <NavBar />
          <Background />
          <Switch>
            <Route
              exact
              path="/"
              render={(props) =>
                !user ? (
                  <Redirect to="/login" />
                ) : (
                  <Home modalVisible={modalVisibleHandler} />
                )
              }
            />
            <Route
              path="/login"
              render={(props) => (user ? <Redirect to="/" /> : <Login />)}
            />
            <Route
              path="/signup"
              render={(props) => (user ? <Redirect to="/" /> : <Signup />)}
            />
          </Switch>
        </Router>
      )}
    </>
  );
}

export default App;
