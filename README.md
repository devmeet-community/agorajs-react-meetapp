1️⃣ First, make sure you have an Agora account. If not, sign up for a free account at agora.io. 🔑

2️⃣ Next, create a new project in the Agora Dashboard. 💡

3️⃣ Take note of your App ID and App Certificate. 🔑

4️⃣ In your React project, install the Agora.js library by running this command: npm install agora-react-uikit. 📦

5️⃣ Create a new React component for the video chat. 🎉


```

import React, { useState } from 'react'
import AgoraUIKit from 'agora-react-uikit'

const App = () => {
  const [videoCall, setVideoCall] = useState(true)
  const rtcProps = {
    appId: '',
    channel: 'test', // your agora channel
    token:'', // use null or skip if using app in testing mode
  }
  const callbacks = {
    EndCall: () => setVideoCall(false),
  }
  return videoCall ? (
    <div
      style={{
        display: 'flex',
        width: '100vw',
        height: '100vh',
      }}
    >
      <AgoraUIKit rtcProps={rtcProps} callbacks={callbacks}  />
    </div>
  ) : (
    <h3 onClick={() => setVideoCall(true)}>Start Call</h3>
  )
}

export default App
```


And that's it! 🎉 Now you have a working video chat application using the Agora.js Video SDK and React.js.
