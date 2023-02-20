import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Notes from "./components/Notes/Notes";
import About from "./components/About/About";
import Contact from "./components/Contacts/Contacts";





function App() {
  

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route element={<Notes/>} path="/"/>
        <Route element={<About/>} path="/about"/>
        <Route element={<Contact/>} path="/contacts"/>
        <Route element={<img src="https://feature-sliced.design/assets/ideal-img/visual_schema.d700567.1030.jpg" alt="" /> }
        path="/about/info"
        />
      </Routes>
      
    </div>
    
  );
}

export default App;

// Задача. При нажатии на кнопку left, увеличивать состояние left на 1
// При нажатии на кнопку right, увелиичивать состояние right на 1
