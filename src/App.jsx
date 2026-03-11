import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Library from "./components/facilities/Library";
import Laboratory from "./components/facilities/Laboratory";
import Medical from "./components/facilities/Medical";
import Sports from "./components/facilities/Sports";
import ChairmanDesk from "./components/About-Us/ChairmanDesk";
import GeneralSecretary from "./components/About-Us/GeneralSecretary";
import VicePresident from "./components/About-Us/VicePresident";
import CampusDirector from "./components/About-Us/CampusDirector";
import BoardMembers from "./components/About-Us/BoardMembers";
import GoverningBody from "./components/About-Us/GoverningBody";
import PrincipalDesk from "./components/About-Us/PrincipalDesk";
import MissionVision from "./components/About-Us/MissionVision";
import Faculty from "./pages/Faculty";
import CourseOffered from "./components/Admission/CourseOffered";
import Eligibility from "./components/Admission/Eligibility";
import FeesStructure from "./components/Admission/FeesStructure";
import RulesRegulation from "./components/Admission/RulesRegulation";
import AdmissionForm from "./components/Admission/AdmissionForm";
import RequiredDocuments from "./components/Admission/RequiredDocuments";
import StudentCommittee from "./components/redressal-desk/StudentCommittee";
import StudentManagementCommittee from "./components/redressal-desk/StudentManagementCommittee";
import SakshiCommittee from "./components/redressal-desk/SakshiCommittee";
import ParentTeacherAssociation from "./components/redressal-desk/ParentTeacherAssociation";
import NineTen from "./components/Classes/NineTen";
import Eleven from "./components/Classes/Eleven";
import Twelve from "./components/Classes/Twelve";
import Alumni from "./pages/Alumni";
import CampusPlacement from "./pages/CampusPlacement";
import ExaminationNotice from "./pages/ExaminationNotice";
import Approvals from "./pages/Approvals";
import AntiRagg from "./pages/AntiRagg";
import VishakhaCommittee from "./pages/VishakhaCommittee";
import useDisableRightClick from "./components/hook/useDisableRightClick";

function App() {
  // Disable right-click and developer tools
  useDisableRightClick();

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/library" element={<Library />} />
          <Route path="/laboratory" element={<Laboratory />} />
          <Route path="/medical" element={<Medical />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/chairman-desk" element={<ChairmanDesk/>} />
          <Route path="/secretary-desk" element={<GeneralSecretary/>} />
          <Route path="/vice-president-desk" element={<VicePresident/> }/>
          <Route path="/campus-director-desk" element={<CampusDirector/> }/>
          <Route path="/board-members" element={<BoardMembers/>} />
          <Route path="/governing-body" element={<GoverningBody/>} />
          <Route path="/principal-desk" element={<PrincipalDesk/>}/>  
          <Route path="/vision-mission" element={<MissionVision/>} />
          <Route path="/faculty" element={<Faculty/>} />
          <Route path="/admission/course-details" element={<CourseOffered/>} />
          <Route path="/admission/eligibility" element={<Eligibility/>}/>
          <Route path="/admission/fees-structure" element={<FeesStructure/>} />
          <Route path="/admission/rules-regulations" element={<RulesRegulation/>} />
          <Route path="/admission/admission-form" element={<AdmissionForm/>} />
          <Route path="/admission/required-documents" element={<RequiredDocuments/>} />
          <Route path="/student-committee" element={<StudentCommittee/>} />
          <Route path="/school-management-committee" element={<StudentManagementCommittee/>} />
          <Route path="/sakhi-savitri-committee" element={<SakshiCommittee/>} />
          <Route path="/parent-teacher-association-committee" element={<ParentTeacherAssociation/>} />
          <Route path="/nine-ten" element={<NineTen/>} />
          <Route path="/eleven" element={<Eleven/>} />
          <Route path="/twelve" element={<Twelve/>} />
          <Route path="/alumni" element={<Alumni/>} />
          <Route path="/campus-placement" element={<CampusPlacement/>} />
          <Route path="/examination-notice" element={<ExaminationNotice/>} />
          <Route path="/approvals" element={<Approvals/>} />
          <Route path="/anti-ragging" element={<AntiRagg/>} />
          <Route path="/vishakha-committee" element={<VishakhaCommittee/>} />
        </Routes>
      </main>
      <Footer/>
    </div>
  )
}

export default App
