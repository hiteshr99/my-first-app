import Dashboard from "./Dashboard";
import Counter from "./components/Counter";
import Search from "./components/Search";
import IplMatch from "./components/IplMatch";
import Todo from "./components/Todo";
import FocusInput from "./components/FocusInput";

function App() {
  return (
    <>
      <Dashboard />
      <FocusInput />
      <Counter />
      <Search />
      <IplMatch /> {/*make alike secret message  */}
      <Todo />
    </>
  );
}

export default App;