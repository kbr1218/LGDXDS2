import React, { useState, useEffect, useRef } from 'react';
import { FaMicrophone, FaPaperPlane } from 'react-icons/fa';
import './chat_bot.css';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);
  const messagesContainerRef = useRef(null);
  const [isAtBottom, setIsAtBottom] = useState(true);  // 스크롤 위치 관리

  // 현재 시간 함수
  const getCurrentTime = () => {
    const now = new Date();
    return `${now.getHours()}:${now.getMinutes() < 10 ? '0' + now.getMinutes() : now.getMinutes()}`;
  };

  // 메시지 전송 함수
  const handleSend = () => {
    if (input.trim() !== '') {
      const time = getCurrentTime();
      setMessages([...messages, { text: input, sender: 'user', time }]);
      setInput('');
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: 'chatbot answer ~~~', sender: 'bot', time: getCurrentTime() }
        ]);
      }, 1000);
    }
  };

  // 스크롤 위치가 맨 아래에 있는지 확인하는 함수
  const checkIfAtBottom = () => {
    const container = messagesContainerRef.current;
    const isAtBottom = container.scrollHeight - container.scrollTop === container.clientHeight;
    setIsAtBottom(isAtBottom);
  };

  // 새 메시지가 추가되었을 때 스크롤 위치 자동으로 맨 아래로 내리기
  useEffect(() => {
    if (isAtBottom) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isAtBottom]);

  // 메시지가 추가될 때마다 스크롤 위치 확인
  useEffect(() => {
    const container = messagesContainerRef.current;
    container.addEventListener('scroll', checkIfAtBottom);
    return () => {
      container.removeEventListener('scroll', checkIfAtBottom);
    };
  }, []);

  return (
    <div className="chatbox">
      <div className="chatname">
        <img src="/images/robot.png" alt="챗봇 로고" className="bot_img" />
        Vision_Bot
      </div>
      <div className="contain" ref={messagesContainerRef}>
        {messages.map((msg, index) => (
          <div key={index} className={msg.sender === 'user' ? 'msg_user' : 'msg_bot'}>
            <div className="message_text">{msg.text}</div>
            <div className="message_time">{msg.time}</div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="input_send">
        <div className="input_container">
          <button className="mic_btn">
            <FaMicrophone />
          </button>
          <input
            className="input"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="input message..."
          />
        </div>
        <button className="send_btn" onClick={handleSend}>
          <FaPaperPlane />
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
