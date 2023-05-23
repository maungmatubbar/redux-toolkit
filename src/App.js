import './App.css';
import AppLayout from './components/AppLayout';
import Dashboard from './components/Dashboard';
import Cart from './components/Cart';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<AppLayout />}>
        <Route index element={<Dashboard />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
    </Route>
))
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
