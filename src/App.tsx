import { Routes, Route, Navigate } from 'react-router-dom';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path="/dashboard" element={<div className="flex items-center justify-center h-screen text-2xl text-purple-400">PeopleHub Loading…</div>} />
    </Routes>
  );
}
