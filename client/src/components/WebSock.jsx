
import { useCreateWebSocket } from "./useCreateWebSocket";
export const WebSock = () => {
    const {messages, value, setValue, connected, username, setUsername, connect, sendMessage} = useCreateWebSocket()

    if (!connected) {
        return (
            <div className="center">
                <div className="form">
                    <input
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        type="text"
                        placeholder="Enter username"/>
                    <button onClick={connect}>Enter</button>
                </div>
            </div>
        )
    }


    return (
        <div className="center">
                <div className="form">
                    <input value={value} onChange={e => setValue(e.target.value)} type="text"/>
                    <button onClick={sendMessage}>Send</button>
                </div>
                <div className="messages">
                    {messages.map(mess =>
                        <div key={mess.id}>
                            {mess.event === 'connection'
                                ? <div className="connection_message">
                                    User <span className="username">{mess.username}</span> connected
                                </div>
                                : <div className="message">
                                    <span className="username">{mess.username}</span>: <span className="message_text">{mess.message}</span>
                                </div>
                            }
                        </div>
                    )}
                </div>
        </div>
    );
};