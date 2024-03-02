import { Navigate, Route, BrowserRouter as Router, Routes} from "react-router-dom"
import Layout from "./layouts/Layout"
import Register from "./pages/Register";
import SignIn from "./pages/SignIn";
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}> 
          <Route index element={<p>Home page</p>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/sign-in" element={<SignIn/>} />
        </Route>
     
        <Route path='*' element={<Navigate to="/"/>} />
      </Routes>
    </Router>
  );
}
export default App
