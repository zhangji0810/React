import Backdrop from "./components/Backdrop";
import Modal from "./components/Modal";
import Todo from "./components/Todo";

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text="Call Julien" />
      <Todo text="Connect Anja with Theo" />
      <Todo text="Covid-19 test" />
      <Modal />
      <Backdrop />
    </div>
  );
}

export default App;
