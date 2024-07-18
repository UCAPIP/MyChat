import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Chat from './chat/Chat';
import EmptyPage from './emptyPage/EmptyPage';
import Contacts from './contacts/Contacts';
import store from './redux/store';
import { Provider } from 'react-redux';
import Admin from './admin/Admin';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
      <Routes>
        <Route path='/' element={
          <div className='mainGrid'>
            <Contacts />
            <EmptyPage />
          </div>}/>
        <Route path='*' element={
          <div className='mainGrid'>
            <Contacts />
            <Chat />
          </div>}/>
        <Route path='admin' element={
          <Admin />
        }/>
      </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
