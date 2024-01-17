/* import './App.css';
import { useState } from 'react'; 
import AddTodo from './components/add';
import Header from './components/header';
import TodoList from './components/list';
import Modal from './components/modal';

function App() {
  const [todos, setTodos] = useState([]);
  const [user, setUser] = useState(false);
  const [language, setLanguage] = useState('tr');   //todo
  const [dark, setDark] = useState(true);           //todo
  const [modal, setModal] = useState(false);

  const closeModal = () => setModal(false);

  return (
    <main>
      {modal && <Modal closeModal={closeModal} name={modal.name} data={modal.data} />}
      <Header user={user} setUser={setUser} />
      <AddTodo setTodos={setTodos} user={user} />
      <TodoList setModal={setModal} todos={todos} setTodos={setTodos} user={user} />
    </main>
  );
}

export default App; */



import './App.css';
// import { useState } from 'react'; 
import AddTodo from './components/add';
import Header from './components/header';
import TodoList from './components/list';
import Modal from './components/modalCont';
import { useSelector } from 'react-redux';
import './utils';

function App() {
  /* const [language, setLanguage] = useState('tr');   //todo
  const [dark, setDark] = useState(true);           //todo */
  const {open: isModalOpen} = useSelector(state => state.modal);

  return (
    <main>
      {isModalOpen && <Modal />}
      <Header />
      <AddTodo />
      <TodoList />
    </main>
  );
}

export default App;






