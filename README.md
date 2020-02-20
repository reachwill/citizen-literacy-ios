# citizen-literacy-ios

The Alpha branch contains 4 explorative testing applications. This formed part of the Product Discovery Phase of the Citizen Literacy Project. The main objective was explore potential solutions on iOS devices.

All examples require an npm install.

1. google-cloud-test - This version used Google cloud service for speech recog in conjunction with a web socket connection. This would be a solution (workaround) to accomodate for Apple's decision to not adopt the Webkit Speech Recog API on iOS devices. This solution works well (very fast) but the major downside was the potential costs associated.
Contains a backend server app and a frontend application. Open a terminal for each folder and start with npm.

2. speechRecognition - ionic test app using the cordova ionic speech recognition plug-in. Rapid development possibilities and robust results. Only downside is bloated and opinionated (Angular) codebase. Still a serious contender and when Ionic catches up with Angular 8, the bloat production code could be much more acceptable. Resulting code could be used for server based Progressive Web App (PWA) or hybrid app on Apple and Google app stores.

Open folder in terminal and run with 'ionic run' 
3. cordova-app/clapp - This version was to employ the cordova speech recognition plugin in a less bloated dev environment (ie without Ionic). The majority of the codebase could be kept vanilla JS. Resulting code could be used for server based Progressive Web App (PWA) or hybrid app on Apple and Google app stores. Again, robust results but...

4. As expected we have a challenge with single words and accents. We have identified a possible solution to this problem using Google's TensorFlow library. Very early exploration is contained within the cordova-app/speechrecog folder.