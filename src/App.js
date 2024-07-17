import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Chat from './chat/Chat';
import EmptyPage from './emptyPage/EmptyPage';
import Contacts from './contacts/Contacts';
import moment from 'moment';
import store from './store';
import { Provider } from 'react-redux';

function App() {

  const users = [
    {
      chatId: 0,
      userId: 0,
      name: "IVAN NIKO",
    },
    {
      chatId: 1,
      userId: 1,
      name: "It's Me",
    },
    {
      chatId: 2,
      userId: 2,
      name: "ChikiPiki"
    }
  ]

  const messages = [
    {
      chatId: 0,
      messagesText: [
      {
        sender: "user",
        text: "bla bla bla",
        date: moment().format('MMMM Do YYYY, h:mm:ss a')
      }, 
      {
        sender: "me",
        text: "bla bla bla",
        date: moment().format('MMMM Do YYYY, h:mm:ss a')
      }]
    },
    {
      chatId: 1,
      messagesText: [
      {
        sender: "user",
        text: "hello OLA OLA OAL",
        date: moment().format('MMMM Do YYYY, h:mm:ss a')
      }, 
      {
        sender: "user",
        text: "bla bla bla",
        date: moment().format('MMMM Do YYYY, h:mm:ss a')
      }]
    },
    {
      chatId: 2,
      messagesText: [
      {
        sender: "me",
        text: "hello OLA OLA OAL",
        date: moment().format('MMMM Do YYYY, h:mm:ss a')
      }, 
      {
        sender: "me",
        text: "bla bla bla",
        date: moment().format('MMMM Do YYYY, h:mm:ss a')
      }]
    }
  ] 

  return (
    <BrowserRouter>
      <Provider store={store}>
      <Routes>
        <Route path='/' element={
          <div className='mainGrid'>
            <Contacts users={users} />
            <EmptyPage />
          </div>}/>
        <Route path='*' element={
          <div className='mainGrid'>
            <Contacts users={users} />
            <Chat messages={messages} users={users}/>
          </div>}/>
      </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
