
import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from "./component/nav"
function App() {
  return (
    <div className='whole'>
      <Navbar/>
      <Outlet />
    </div>

  );
}

export default App;
