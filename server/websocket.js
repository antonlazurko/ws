const ws = require('ws')

const wsServer = new ws.Server({port: 5000}, () => {
    console.log('Server started on port 5000');
})

wsServer.on('connection', (socket) => {
    console.log('Client Connected');
    socket.on('message', (message) => {
        console.log(message);
        message = JSON.parse(message)
        switch (message.event) {
            case 'connection':
                broadcastMessage(message)
                break
            case 'message':
                broadcastMessage(message)
                break
        }
    })
})

function broadcastMessage(message) {
    wsServer.clients.forEach(client => {
        client.send(JSON.stringify(message))
    })
}