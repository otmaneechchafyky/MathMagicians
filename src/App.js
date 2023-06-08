import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Calcrouter from './components/Calculator';
import Quoterouter from './components/quotes';
import NotMatch from './components/NotMatch';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="Calcrouter" element={<Calcrouter />} />
        <Route path="Quoterouter" element={<Quoterouter />} />
        <Route path="*" element={<NotMatch />} />
      </Route>
    </Routes>
  );
}

export default App;
