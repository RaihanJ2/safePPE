import { Routes, Route, Navigate } from 'react-router-dom';
import DashboardLayout from '../layouts/DashboardLayout';

// Pages
import MonitoringPage from '../pages/Monitoring/MonitoringPage';
import DetectionLogTable from '../pages/Monitoring/DetectionLogTable';
import PPEChart from '../pages/Monitoring/PPEChart';
import CameraDetailModal from '../pages/SecurityCamera/CameraDetailModal';
import MapView from '../pages/SecurityCamera/MapView';
import CameraPage from '../pages/SecurityCamera/CameraPage';
import ReleaseNotes from '../pages/Update/ReleaseNotes';
import SystemStatusCard from '../pages/Update/SystemStatusCard';
import UpdatePage from '../pages/Update/UpdatePage';
import LicensePage from '../pages/License/LicensePage';
import LicenseStatusCard from '../pages/License/LicenseStatusCard';
import RenewalForm from '../pages/License/RenewalForm';

//components
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar'; 
import Header from '../components/Header';
import ChartPPE from '../components/ChartPPE';  
import Card from '../components/Card';  
import ChartCard from '../components/ChartCard';
import AlertCard from '../components/AlertCard';
import CameraCard from '../components/CameraCard';



export default function AppRoutes() {
  return (
    <Routes>
      {/* Main Layout with nested routes */}
      <Route element={<DashboardLayout />}>
        {/* Redirect / to /monitoring */}
        <Route index element={<Navigate to="/monitoring" replace />} />
        
        {/* Main routes */}
        <Route path="/license" element={<LicensePage />} />
        <Route path="/license/status" element={<LicenseStatusCard />} />
        <Route path="/license/renew" element={<RenewalForm />} />

        <Route path="/monitoring" element={<MonitoringPage />} />
        <Route path="/monitoring/logs" element={<DetectionLogTable />} />
        <Route path="/monitoring/ppechart" element={<PPEChart />} />

        <Route path="/cameras" element={<CameraPage />} />
        <Route path="/cameras/detail/:id" element={<CameraDetailModal />} />
        <Route path="/cameras/map" element={<MapView />} />

        <Route path="/updates" element={<UpdatePage />} />
        <Route path="update/releases" element={<ReleaseNotes />} />
        <Route path="update/status" element={<SystemStatusCard />} />


        <Route path="/navbar" element={<Navbar />} />
        <Route path="/sidebar" element={<Sidebar />} /> 
        <Route path="/header" element={<Header />} />
        <Route path="/chartppe" element={<ChartPPE />} />  
        <Route path="/card" element={<Card  />} /> 
        <Route path="/chartcard" element={<ChartCard />} />
        <Route path="/alertcard" element={<AlertCard />} />
        <Route path="/cameracard" element={<CameraCard />} />
       

        {/* Catch all - redirect to monitoring */}
        <Route path="*" element={<Navigate to="/monitoring" replace />} />
      </Route>
    </Routes>
  );
}