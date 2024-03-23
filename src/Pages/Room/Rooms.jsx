import React from "react";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useParams } from "react-router-dom";


function Rooms() {

  const { roomId } = useParams();
  const generateTokenAndJoinRoom = async (element) => {
    // Generate Kit Token
   const appID = import.meta.env.VITE_APP_ID;
      const serverSecret = import.meta.env.VITE_SERVER_SECRET;
      const URL = import.meta.env.VITE_URL + `/room/${roomId}`;
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      parseInt(appID),
      serverSecret,
      roomId,
      Date.now().toString(),
      "sandeepjha"
    );

    // Create ZegoUIKit instance and join room

    const zp = ZegoUIKitPrebuilt.create(kitToken);

    zp.joinRoom({
      container: element,
      sharedLinks: [
        {
          name: "shareLink",
          url:  `http://localhost:5173/room/${roomId}`,
        },
      ],

      scenario: {
        mode: ZegoUIKitPrebuilt.OneONoneCall,
      },
      showScreenSharingButton: true,
    });
  };

  return (
    <div className="text-white text-5xl font-bold text-center  overflow-hidden">
      <h1 className="mb-2 text-gray-300">Meeting Room</h1>
      <div
        className="myCallContainer mt-10 "
        ref={generateTokenAndJoinRoom}
      ></div>
    </div>
  );
}

export default Rooms;
