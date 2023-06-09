import "./App.css";
import Login from "./routes/login-form/login-form.component";
import Register from "./routes/register-form/register-form.component";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
