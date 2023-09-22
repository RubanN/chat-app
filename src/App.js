import './App.css';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from "./components/ChatFeed"
const projectID = '0a79dece-40e5-42a1-9bd4-2571f9a717f2';

function App() {
  return (
    <div className="App">
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
    </div>
  );
}

export default App;
