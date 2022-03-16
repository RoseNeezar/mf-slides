import React from 'react';
//@ts-ignore
import { useMount } from 'chat/Chat';

const Chat = () => {
  const ref = React.useRef<any>(null);
  console.log('exp');
  React.useEffect(() => {
    if (!ref.current) return;
    // console.log(ref.current, useMount)
    useMount(ref.current);
  }, []);

  return <div ref={ref} />;
};

export default Chat;
