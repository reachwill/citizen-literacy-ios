
var app = {

    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
        window.plugins.speechRecognition.requestPermission(
            ()=>{
                console.log('Requested Permission Success');
            },
            ()=>{
                console.log('Requested Permission Error');
            }
          );//EO requestPermission
    },
    receivedEvent: function(id) {
        console.log('Received Event: ' + id);
    }
};

app.initialize();

