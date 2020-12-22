how to set up iOS and Android for FB https://www.joshmorony.com/using-cordova-plugins-that-require-install-variables-with-capacitor/

set up Line for iOS https://developers.line.biz/en/docs/ios-sdk/swift/setting-up-project/#configuring-the-info-plist-file
__make sure to add the code snippet right before the closing dict tag or it won't open the app after login.__

set up Line for iOS https://github.com/nrikiji/cordova-line-login-plugin
__use code snippet from the web above instead to configure for iOS.__


### To change the bundle ID

#### Xcode

click App (top item in the left panel) and change the value in the bundle ID field.

#### Android

Edit capacitor.config.json and nuke the native folder and rebuild it.

