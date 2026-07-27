import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import AuthContextProvider from './context/AuthContext';
import Navbar from './components/Navbar';

function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <div className="app-shell">
          <Navbar />
          <AppRoutes />
        </div>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
