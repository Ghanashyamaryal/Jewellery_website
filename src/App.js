
import './App.css';
import { Outlet } from 'react-router-dom';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';

function App() {
  return (
    <div className='whole mt-0'>
      <Header />
      <Outlet />
      <Footer/>
    </div>
  );
}
export default App;
