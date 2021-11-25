import { BrowserRouter, Route } from 'react-router-dom';
import DisplayTodo from './components/DisplayTodo';
import CreateTodo from './components/CreateTodo';
import './App.css';

function App() {
  return (
    <div className="todo-Container">
      <BrowserRouter>
        <Route exact path="/" component={DisplayTodo} />
        <Route path="/add-list" component={CreateTodo} />
      </BrowserRouter>
    </div>
  );
}

export default App;
