import './App.css'
import React from 'react'
import UserTable from './components/UserTable'
import Table from './components/Table'
import Userdetails from './pages/Userdetails'
import { RegisterForm } from './components/RegisterForm'
// import { Link, Route, Routes } from 'react-router-dom';
// import HomePage from './pages/HomePage';
// import SuperHeroes from './pages/SuperHeroes';
// import RQSuperHeroes from './pages/RQSuperHeroes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { NuqsAdapter } from 'nuqs/adapters/react'
// // import DashboardLayout from './layouts/DashboardLayout';
// import DetailsPage from './pages/DetailsPage';


const queryClient = new QueryClient();

function App() {
  return (
    // <>
    // <Routes>

    //   {/* A parent route that uses the DashboardLayout */}
    //   <Route path="/" element={<DashboardLayout/>}>
    //     {/* Child Routes */}
    //     {/* When the URL is "/dashboard", this index route is rendered inside the Outlet */}
    //     <Route index element={<HomePage />} />

    //     {/* When the URL is "/dashboard/profile", this is rendered inside the Outlet */}
    //     <Route path="/rq" element={<RQSuperHeroes />} />

    //     {/* When the URL is "/dashboard/settings", this is rendered inside the Outlet */}
    //     <Route path="/superhero" element={<SuperHeroes />} />
    //   </Route>

    //   {/* A catch-all route */}
    //   <Route path="*" element={<h1>404 Not Found</h1>} />
    // </Routes>
    // </>
    <QueryClientProvider client={queryClient}>
      <NuqsAdapter>
        <div>
          <Table/>
          {/* <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/superheroes">SuperHeroes</Link>
                </li>
                <li>
                  <Link to="/rqsuperhero">RQ SuperHero</Link>
                </li>
              </ul>
            </nav>
            <div>
              <Routes>
                <Route path="/rq-super-heroes/:heroId" element={<DetailsPage />} />
                <Route path="/" element={<HomePage />} />
                <Route path="/superheroes" element={<SuperHeroes />} />
                <Route path="/rqsuperhero" element={<RQSuperHeroes />} />
              </Routes>
            </div>
          </div> */}
        </div>
      </NuqsAdapter>
    </QueryClientProvider>

  )
}

export default App
