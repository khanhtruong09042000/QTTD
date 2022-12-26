import Download from "./pages/downloads/Download";
import Upload from "./pages/uploads/Upload";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import File from "./pages/file/File";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Upload />} />
        <Route path="/files" element={<Download />} />
        <Route path="/files/:name" element={<File/>} />
      </Routes>
    </Router>
  );
}

export default App;
