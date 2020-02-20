
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    onDeviceReady: function() {
        document.getElementById('startBtn').addEventListener('click',startPressed);
        document.getElementById('stopBtn').addEventListener('click',stopPressed);
        window.plugins.speechRecognition.requestPermission(
            ()=>{
                console.log('Requested Permission Success');
                document.getElementById('debug').innerHTML += '<p>Requested Permission Success</p>';
            },
            ()=>{
                console.log('Requested Permission Error');
                document.getElementById('debug').innerHTML += '<p>Requested Permission Error</p>';
            }
        );//EO requestPermission
        console.log('READY AND WAITING');
    }
};

app.initialize();

function stopPressed(){
    document.getElementById('startBtn').style.display = 'block';
    document.getElementById('stopBtn').style.display = 'none';
    document.body.style.backgroundColor='white';
    window.plugins.speechRecognition.stopListening(
        ()=>{
            console.log('Stopped Success');
            document.getElementById('debug').innerHTML += '<p>Stopped Success</p>';
            
        }, ()=>{
            console.log('Stopped Error');
            document.getElementById('debug').innerHTML += '<p>Stopped Error</p>';
            
        }
    );//EO stopListening
}

function startPressed(){
    document.getElementById('startBtn').style.display = 'none';
    document.getElementById('stopBtn').style.display = 'block';
    document.body.style.backgroundColor='lime';
    window.plugins.speechRecognition.isRecognitionAvailable(
        (available)=>{
            window.plugins.speechRecognition.hasPermission(
                ()=>{
                    console.log('Permitted to listen');
                    document.getElementById('debug').innerHTML += '<p>Permitted to listen</p>';
                    let options = {
                        language: 'en-gb',
                        matches: 1,
                        showPartial: true
                      }
                      
                      window.plugins.speechRecognition.startListening(
                        (matches)=>{
                            console.log('Listening for words...');
                            document.getElementById('debug').innerHTML += '<p>Listening for words...</p>';
                            //matches[0] = 'a three '+ matches[0] + ' plug';
                            console.log(matches);
                            document.getElementById('words').innerHTML = '<p>'+matches+'</p>';
                            let secretPhrase = 'liverpool are the best';
                            let secretPhraseOff = 'switch off';
                            matches.forEach(element => {
                               if(matches[0].toLowerCase().indexOf(secretPhrase)>-1){
                                   document.getElementById('secret').style.display = 'block';
                               }
                               if(matches[0].toLowerCase().indexOf(secretPhraseOff)>-1){
                                    document.getElementById('secret').style.display = 'none';
                                    stopPressed();
                                }
                                console.log(element);
                            });
                            let colors = matches[0].split(' ');
                            document.body.style.backgroundColor=colors[colors.length-1];
                            
                        }, 
                        ()=>{

                        }, 
                        options
                        )
                },
                ()=>{
                    console.log('Not Permitted');
                    document.getElementById('debug').innerHTML += '<p>Not Permitted</p>';
                    window.plugins.speechRecognition.requestPermission(
                        ()=>{
                            console.log('Requested Permission Success');
                            document.getElementById('debug').innerHTML += '<p>Requested Permission Success</p>';
                        },
                        ()=>{
                            console.log('Requested Permission Error');
                            document.getElementById('debug').innerHTML += '<p>Requested Permission Error</p>';
                        }
                    );//EO requestPermission
                }
            );//EO hasPermission

            
            
        },
        (notavailable)=>{   
           

        });
}

setTimeout(startPressed,7000);