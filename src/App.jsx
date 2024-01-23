import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./Routes/pathConfig.jsx";

import RootLayout from "./Pages/RootLayout.jsx";
import ErrorPage from "./Pages/ErrorPage.jsx";

import "./index.css";
import ScrollToTop from "./utils/ScrollToTop.jsx";

function App() {
    const router = createBrowserRouter([
        {
            element: <RootLayout />,
            errorElement: <ErrorPage />,
            children: routes,
        },
    ]);

    return (
        <RouterProvider router={router}>
            <ScrollToTop />
        </RouterProvider>
    );
}

export default App;
