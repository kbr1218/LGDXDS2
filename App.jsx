import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Chatbot from './components/chatbots/chatbot';  
import Cmmend from './components/movie/cmmend'; 
import './App.css'; 

function App() {
  return (
    <Router>
      {/* 채팅과 추천화면의 레이아웃을 조정하는 데 사용*/ }
      <div className="container"> 
        
        <div className="chats_part">
          <Chatbot />
        </div>
        <div className="movie_part">
          <Cmmend />
        </div>
      </div>
    </Router>
  );
}

export default App;
