import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import AuthContext from './context/AuthContext';
import Navbar from './components/Navbar';

function App() {
  return (
    <AuthContext>
      <BrowserRouter>
        <Navbar />
        <AppRoutes />
      </BrowserRouter>
    </AuthContext>
  );
}

export default App;
