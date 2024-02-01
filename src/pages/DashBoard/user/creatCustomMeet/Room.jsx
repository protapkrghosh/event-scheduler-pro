import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

const Room = () => {
  const [value, setValue] = useState();
  const nvigat = useNavigate();
  const handleJoienRoom = useCallback(() => {
    nvigat(`/room/${value}`);
  }, [value, nvigat]);
  return (
    <div>
      <input
        type="text"
        onChange={(e) => setValue(e.target.value)}
        placeholder="inter room code"
      />
      <button onClick={handleJoienRoom}>creat room</button>
    </div>
  );
};

export default Room;
