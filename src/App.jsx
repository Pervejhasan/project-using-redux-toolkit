import { Route, Routes } from "react-router-dom";
import "./App.css";
// import Counter from "./components/Counter";
import CounterRedux from "./components/CounterRedux";
import Employees from "./components/Employees";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import UserList from "./components/UserList";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/employees"} element={<Employees />} />
        <Route path={"/counter"} element={<CounterRedux />} />
        <Route path={"/users"} element={<UserList />} />
      </Routes>
    </>
  );
}

export default App;
