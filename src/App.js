import { Route, Routes } from 'react-router-dom';
import ErrorBoundary from './global/errorBoundary';
import AdminUIPanel from './pages/admin-ui';
import NotFound from './pages/notFound';

function App() {
  return (
    <div className="App">
      {/* Wrap the entire app with the ErrorBoundary component */}
      <ErrorBoundary>
        {/* Define the routes using the Routes and Route components from react-router-dom */}
        <Routes>
          {/* Define the route for the AdminUIPanel component */}
          <Route path="/" element={<AdminUIPanel />} />
          {/* Define the catch-all route for NotFound component */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ErrorBoundary>
    </div>
  );
}

export default App;
