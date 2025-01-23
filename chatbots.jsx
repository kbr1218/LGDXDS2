import React, { useState, useEffect, useRef } from 'react';
import { FaMicrophone, FaPaperPlane } from 'react-icons/fa';
import './chat_bot.css';

const Chatbot = () => {
  const [messages, setMessages] = useState([]); // 사용자와 봇 메시지 저장
  const [input, setInput] = useState(''); // 사용자가 입력한 메시지
  const [socket, setSocket] = useState(null); // 웹소켓 상태
  const [isAtBottom, setIsAtBottom] = useState(true);  // 스크롤 위치 관리
  const [error, setError] = useState(null);  // 웹소켓 에러 상태

  const messagesEndRef = useRef(null);
  const messagesContainerRef = useRef(null);

  const userId = 'tempor_id'; 
  const serverUrl = 'ws://192.168.0.23:8000'; 

  // 현재 시간 함수
  const getCurrentTime = () => {
    const now = new Date();
    return `${now.getHours()}:${now.getMinutes() < 10 ? '0' + now.getMinutes() : now.getMinutes()}`;
  };

  // 웹소켓 연결
  useEffect(() => {
    const ws = new WebSocket(serverUrl);

    ws.onopen = () => {
      console.log('웹소켓 연결 성공');
      setSocket(ws);
      setError(null);  // 연결 성공시 에러 초기화
    };

    ws.onmessage = (event) => {
      const response = event.data;  // 에코 서버는 받은 메시지를 그대로 반환
      const time = getCurrentTime();
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: response, sender: 'bot', time }
      ]);
    };

    ws.onerror = (error) => {
      console.error('웹소켓 오류:', error);
      setError('웹소켓 연결에 실패했습니다. 서버가 실행 중인지 확인하세요.');
    };

    ws.onclose = () => {
      console.log('웹소켓 연결 종료');
      setError('웹소켓 연결이 종료되었습니다.');
    };

    // 컴포넌트가 언마운트될 때 웹소켓 종료
    return () => {
      if (ws) {
        ws.close();
      }
    };
  }, [userId]);

  // 메시지 전송 함수
  const handleSend = () => {
    if (input.trim() !== '' && socket) {
      const time = getCurrentTime();
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: input, sender: 'user', time }
      ]);
      socket.send(input);  // 서버로 사용자 입력을 전송
      setInput('');
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

      {/* 에러 메시지 표시 */}
      {error && <div className="error-message">{error}</div>}

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
        <button 
          className="send_btn" 
          onClick={handleSend} 
          disabled={!input.trim()}  // 입력이 없으면 전송 버튼 비활성화
        >
          <FaPaperPlane />
        </button>
      </div>
    </div>
  );
};
export default Chatbot;
