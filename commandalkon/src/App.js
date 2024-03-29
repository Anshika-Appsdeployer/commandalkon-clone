import { Routes, Route, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Platform from './components/Platform';
import Solutions from './components/Solutions';
import Home from './components/Home';
import MainHeader from './components/MainHeader';
import ReadyMixProducer from './components/ReadyMixProducer';
import InboundMaterialsManagement from './components/InboundMaterialsManagement';
import ProductionQC from './components/ProductionQC';
import DispatchAndLogistics from './components/DispatchAndLogistics';
import TruckingAndTelematics from './components/TruckingAndTelematics';
import BusinessSystems from './components/BusinessSystems';
import SalesAutomation from './components/SalesAutomation';
import Error from './components/Error';
import AsphaultTrucking from './components/AsphaultTrucking';
import TruckingRuckit from './components/TruckingRuckit';

function App() {
  return (
    <div className="absolute flex flex-col w-full h-auto">
      <div>
        <Routes>
          <Route path="/" element={<MainHeader />} >
            <Route index element={<Home />} />
            <Route path="/readymixproducer" element={<ReadyMixProducer />} />
            <Route path="/inboundmaterialsmanagement" element={<InboundMaterialsManagement />} />
            <Route path="/productionqc" element={<ProductionQC />} />
            <Route path="/dispatchandlogistics" element={<DispatchAndLogistics />} />
            <Route path="/truckingandtelematics" element={<TruckingAndTelematics />} />
            <Route path="/businesssystemsandanalytics" element={<BusinessSystems />} />
            <Route path="/salesautomation" element={<SalesAutomation />} />
            <Route path="*" element={<Error />} />
          </Route>
          <Route path="/platform" element={<Platform />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/asphault_truckingandtelematics" element={<AsphaultTrucking />} />
          <Route path="/asphault_truckingandtelematics_ruckit" element={<TruckingRuckit />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
