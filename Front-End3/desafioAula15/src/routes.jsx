import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './pages/home';
import Formulario from './pages/formulario';
import Header from './components/header';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/formulario/:id',
        element: <Formulario />,
    },
]);

function Routes() {
    return (
        <div className="bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r h-screen">
            <Header />
            <main className="h-5/6 grid content-center p-2">
                <RouterProvider router={router} />
            </main>
            <footer className="w-full flex justify-center pb-2">
                Todos os direitos reservados
            </footer>
        </div>
    );
}

export default Routes;
