import React from 'react';
//@ts-ignore
import { useMount } from 'chat/Chat';

const Chat = () => {
  const ref = React.useRef<any>(null);

  React.useEffect(() => {
    if (!ref.current) return;

    useMount(ref.current, 'in MF');
  }, []);

  return (
    <div
      style={{
        marginTop: '150px',
      }}
    >
      <div ref={ref} />
    </div>
  );
};

export default Chat;
