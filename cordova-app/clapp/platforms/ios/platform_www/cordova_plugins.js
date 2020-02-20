cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-speechrecognition.SpeechRecognition",
      "file": "plugins/cordova-plugin-speechrecognition/www/speechRecognition.js",
      "pluginId": "cordova-plugin-speechrecognition",
      "merges": [
        "window.plugins.speechRecognition"
      ]
    },
    {
      "id": "cordova-plugin-texttospeech.tts",
      "file": "plugins/cordova-plugin-texttospeech/www/tts.js",
      "pluginId": "cordova-plugin-texttospeech",
      "clobbers": [
        "TTS"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-whitelist": "1.3.4",
    "cordova-plugin-speechrecognition": "1.1.2",
    "cordova-plugin-texttospeech": "0.1.1"
  };
});