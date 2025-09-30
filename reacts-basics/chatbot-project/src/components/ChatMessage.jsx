import RobotProfileImage from '../assets/robot.png'
import dayjs from 'dayjs';
import UserProfileImage from '../assets/test.jpg';

import './ChatMessage.css';

export function ChatMessage({ message, sender, time }) {
  // const { message } = props;
  // const { sender } = props;
  // const { message, sender } = props;

  // same as:
  //  {
  // const { message, sender } = props; bc props is the first argument of the function

  // if (sender === "robot") {
  //   return (
  //     <div>
  //       <img src="robot.png" width="50"/>
  //       {message}
  //     </div>
  //   );
  // }

  return (
    console.log(UserProfileImage),
    <div className={sender === 'robot' ? 'chat-message-robot' : 'chat-message-user'}>
      {sender === 'robot' && <img src={RobotProfileImage} width="50" className="chat-message-profile" />}
      <div className="chat-message-text">
        {message}
        {time && (
          <div className="chat-message-time">
            {dayjs(time).format('h:mma')}
          </div>
        )}
        </div>
      {sender === 'user' && <img src={UserProfileImage} width="50" className="chat-message-profile" />}
    </div>
  );
}
