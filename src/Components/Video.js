import React, { useState } from 'react'
import AgoraUIKit from 'agora-react-uikit'
import DevMeet from './img/devmeet.png'
import AgoLogo from './img/agora.png'

const Video = () => {
  const [videoCall, setVideoCall] = useState(true)
  const rtcProps = {
    appId: '182f281939ba4f4989020a0f55b6df87',
    channel: 'test', // your agora channel
    token:
      '007eJxTYNCMlmC7yXdcfaPpOcsc7lMSp/R6A15Mejn3esTTvPnchz0UGAwtjNKMLAwtjS2TEk3STCwtLA2MDBIN0kxNk8xS0izMw2c8SW4IZGSQDedgYWSAQBCfhaEktbiEgQEAwWYdbA==', // use null or skip if using app in testing mode
  }
  const callbacks = {
    EndCall: () => setVideoCall(false),
  }
  return videoCall ? (
    <div
      style={{
        width: '100vw',
        height: '100vh',
      }}
      className=" flex flex-col bg-gray-900 "
    >
      <div className="flex flex-row items-center space-x-14 p-4">
        <img src={DevMeet} alt="logo" className="w-20 rounded-xl" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-10 h-10 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>

        <img src={AgoLogo} alt="logo" className="w-20 rounded-xl " />
      </div>
      <AgoraUIKit
        rtcProps={rtcProps}
        callbacks={callbacks}
        className="w-full px-4 bg-white"
      />
    </div>
  ) : (
    <div className="flex items-center p-4">
      <h3
        className="bg-blue-500 rounded-xl p-2"
        onClick={() => setVideoCall(true)}
      >
        Start Call
      </h3>
    </div>
  )
}

export default Video
