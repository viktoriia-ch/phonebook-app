import { Provider } from 'react-redux';
import { store } from 'redux/store';

import NavBar from 'modules/NavBar/NavBar';
import UserRoutes from 'UserRoutes';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter basename="/goit-react-hw-08-phonebook">
        <NavBar />
        <UserRoutes />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
