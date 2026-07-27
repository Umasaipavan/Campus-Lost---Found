import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import AuthContextProvider from './context/AuthContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <div className="app-shell">
          <Navbar />
          <AppRoutes />
          <Footer />
        </div>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
