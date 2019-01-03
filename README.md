# React Native example project

Trying React Native out


For personal reference, building to Android physical device on Windows host:
https://facebook.github.io/react-native/docs/running-on-device

Make sure device is seen by ADB.

    cd C:\Users\Josh\AppData\Local\Android\sdk\platform-tools
    .\adb devices
  
Allow traffic between localhost that will run node server and the device:

    .\adb reverse tcp:8081 tcp:8081
  
Now from the same prompt `cd` to project root and run

    npm run android-run
