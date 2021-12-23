import logo from './logo.svg';
import './App.css';
import Header from '../src/components/header/header'
import Header_content from './components/header_content';
import {BrowserRouter , Route , Routes , useNavigate , Link} from 'react-router-dom'
import NavPage from '../src/components/navigation/nav';

/* Omar */
function App() {
  return (
<>

<BrowserRouter>
<Routes>
<Route exact  path="/" element={<><Header/> <Header_content/></>}></Route>
<Route path="/NavigationMenu" element={<NavPage/>} ></Route>
</Routes>
</BrowserRouter>

</>
  );
}

export default App;
