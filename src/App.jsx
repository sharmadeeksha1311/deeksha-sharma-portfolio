import { useState } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import AppRoutes from './routes/AppRoutes';
import HeroLoader from './components/sections/loader/HeroLoader';

function App() {
  const [showLoader, setShowLoader] = useState(true);

  return showLoader ? (
    <HeroLoader
      text="Deeksha Sharma"
      letterDelay={120}
      onDone={() => setShowLoader(false)}
    />
  ) : (
    <div className="app">
      
      <Navbar />
      <main className="main">
        <AppRoutes />
      </main>
      <Footer />
    </div>
  );
}

export default App;
