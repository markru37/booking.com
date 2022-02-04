import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Friends from './components/Friends/Friends';
import Music from './components/Music/Music';
import Video from './components/Video/Video';
import { BrowserRouter, Routes, Route } from "react-router-dom";


const App = (props) => {
  return (
    <BrowserRouter>
      <div className="wrapper_all">
        <Header />
        <div className="_container">
        <Routes>
          <Route path="/dialogs/*" element={<Dialogs dialogsPage={props.state.dialogsPage} dispatch={props.dispatch} />} />
          <Route path="/profile" element={<Profile profilePage={props.state.profilePage} dispatch={props.dispatch}/>} />
          <Route path="/friends" element={<Friends />} />
          <Route path="/music" element={<Music />} />
          <Route path="/video" element={<Video />} />
        </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
export default App;
