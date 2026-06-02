import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import PatientLanding from "./pages/PatientLanding";
import FoundingClinic from "./pages/FoundingClinic";
import ForClinics from "./pages/ForClinics";
import ForPatients from "./pages/ForPatients";
import Conditions from "./pages/Conditions";
import ConditionDetail from "./pages/ConditionDetail";
import ThankYou from "./pages/ThankYou";
import Privacy from "./pages/Privacy";
import TrtHub from "./pages/TrtHub";
import PeptideTherapy from "./pages/PeptideTherapy";
import ClinicProfile from "./pages/ClinicProfile";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<PatientLanding />} />
        <Route path="/for-clinics" element={<ForClinics />} />
        <Route path="/for-patients" element={<ForPatients />} />
        <Route path="/conditions" element={<Conditions />} />
        <Route path="/conditions/:slug" element={<ConditionDetail />} />
        <Route path="/founding-clinic" element={<FoundingClinic />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route
          path="/testosterone-replacement-therapy"
          element={<TrtHub />}
        />
        <Route path="/peptide-therapy/:segment" element={<PeptideTherapy />} />
        <Route path="/clinic/:slug" element={<ClinicProfile />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
