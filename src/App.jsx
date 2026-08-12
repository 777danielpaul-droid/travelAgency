import { Routes, Route } from 'react-router-dom';
import { MainLayout } from '@/layouts';
import { Home, About, Contact, Destinations, SingleDest, NotFound } from '@/pages';

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/destinations/:slug" element={<SingleDest />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
