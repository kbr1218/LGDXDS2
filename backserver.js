const WebSocket = require('ws');
const http = require('http');
const server = http.createServer();
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
  console.log('클라이언트가 연결되었습니다.');

  ws.on('message', (message) => {
    console.log(`client message: ${message}`);

    // JSON 응답 생성
    const response = {
      response: `🐶: 멍멍!`
    };

    // JSON 객체를 문자열로 변환 후 전송
    ws.send(JSON.stringify(response.response));
  });

  ws.on('close', () => {
    console.log('클라이언트 연결이 종료되었습니다.');
  });
});

server.listen(8000, '192.168.0.23', () => {
  console.log('192.168.0.23:8000에 연결중입니다.');
});
