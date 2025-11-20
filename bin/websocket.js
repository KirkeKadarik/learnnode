import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8080 });

let messages = [];

wss.on('connection', function connection(ws) {
messages.forEach(message => ws.send(JSON.stringify(message)));

  ws.on('error', console.error);



  ws.on('message', function message(data) {
    console.log('received: %s', data);

let message = JSON.parse(data.toString());
messages.push(message);

    wss.clients.forEach(client => {
        if(client.readyState === WebSocket.OPEN && client !== ws) {
            client.send(data.toString());
        }
    });
  });
});