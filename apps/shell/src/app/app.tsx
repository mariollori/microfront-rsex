import {Suspense,lazy} from 'react';
import NxWelcome from './nx-welcome';
import { Link, Route, Routes } from 'react-router-dom';


const ProductosApp = lazy(() => import('productos/Module'));
const CarritoApp = lazy(() => import('carrito/Module'));

export function App() {
  return (
    <Suspense fallback={null}>
      <Routes>
        
          <Route
            path="/productos"
            element={
              <Suspense fallback="Cargando Productos...">
                <ProductosApp />
              </Suspense>
            }
          />
          <Route
            path="/carrito"
            element={
              <Suspense fallback="Cargando Carrito...">
                <CarritoApp />
              </Suspense>
            }
          />
          <Route path="/" element={<NxWelcome title="shell" />} />
        </Routes>
    </Suspense>
  );
}

export default App;
