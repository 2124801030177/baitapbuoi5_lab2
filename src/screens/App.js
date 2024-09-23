import React from 'react';
import { AuthProvider } from '../context/AuthContext';
import ProtectedRoute from '../components/ProtectedRoute';

const App = () => {
  return (
    <AuthProvider>
      <ProtectedRoute />
    </AuthProvider>
  );
};

export default App;
