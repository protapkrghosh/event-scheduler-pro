import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useParams } from "react-router-dom";

const CreatRoom = () => {
  const { roomID } = useParams();
  const myMeeting = async (element) => {
    const appID = 1669259197;
    const serverSecret = "beb58ff89926213161d53b407af53994";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomID,
      Date.now().toString(),
      "sumon"
    );
    const zc = ZegoUIKitPrebuilt.create(kitToken);
    zc.joinRoom({
      container: element,
      scenario: {
        mode: ZegoUIKitPrebuilt.OneONoneCall,
      },
    });
  };
  return (
    <div>
      <div ref={myMeeting} />
    </div>
  );
};

export default CreatRoom;
