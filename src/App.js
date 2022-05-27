import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Student from "./components/Students";
import ContactUs from "./components/ContactUs";
import Detail from "./components/Detail"
import Home from "./components/Home";
import Editstudent from "./components/EditStudent";
import AddStudent from "./components/AddStudent";

function App() {
  return (
    <Detail>
      <div className="App">
        <Router>
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/student" element={<Student />} />
            <Route path="/student/add/:id" element={<AddStudent />} />
            <Route path="/student/edit/:id" element={<Editstudent />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </Router>
      </div>
    </Detail>
  );
}

export default App;
