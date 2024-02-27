import { Navigate, Route, BrowserRouter as Router, Routes} from "react-router-dom"
import Layout from "./layouts/Layout"
import Register from "./pages/Register";
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}> 
          <Route index element={<p>Home page</p>} />
          <Route path="/register" element={<Register/>} />
        </Route>
     
        <Route path='*' element={<Navigate to="/"/>} />
      </Routes>
    </Router>
  );
}
export default App
