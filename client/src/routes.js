import { Route, Routes } from 'react-router-dom';
import Concern from './Concern';
import Dashboard from './components/Dashboard';
import Homepage from './components/Home';

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/concern" element={<Concern />} />
    </Routes>
  );
};
export default RoutesComponent;