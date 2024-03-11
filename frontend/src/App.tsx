import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Layout from "./layouts/Layout";
import Register from "./pages/Register";
import SignIn from "./pages/SignIn";
import AddHotel from "./pages/AddHotel";
import { useAppContext } from "./context/AppContext";
import Myhotels from "./components/Myhotels";
import EditHotel from "./pages/EditHotel";
import Search from "./pages/Search";
import Details from "./pages/Details";
import Booking from "./pages/Booking";
import MyBookings from "./pages/MyBookings";
import Home from "./pages/Home";

function App() {
  const { isLoggedIn } = useAppContext();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/register" element={<Register />} />

          <Route path="/sign-in" element={<SignIn />} />
          <Route index element={<p>Home page</p>} />
          <Route path="/search" element={<Search />} />
          <Route path="/detail/:hotelId" element={<Details />} />

          {isLoggedIn && (
            <>
              <Route path="/add-hotel" element={<AddHotel />} />
              <Route path="/my-hotels" element={<Myhotels />} />
              <Route path="/my-bookings" element={<MyBookings />} />
              <Route path="/edit-hotel/:hotelId" element={<EditHotel />} />

              <Route path="/hotel/:hotelId/booking" element={<Booking />} />
            </>
          )}
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}
export default App;
