import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import CakeContainer from './components/CakeContainer';
import MilkContiner from "./components/MilkContainer"
import UsersList from './components/UsersList';
import PostSaga from './components/PostSaga/PostSaga';
function App() {
  return (
  <Provider store={store}>
    {/* <CakeContainer/>
    <MilkContiner/>
    <hr/>
    <UsersList/> */}
    <PostSaga/>
  </Provider>
  );
}

export default App;
