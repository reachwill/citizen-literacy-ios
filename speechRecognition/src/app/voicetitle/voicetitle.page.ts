import { Component, OnInit } from '@angular/core';
import { SpeechRecognition } from '@ionic-native/speech-recognition/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-voicetitle',
  templateUrl: './voicetitle.page.html',
  styleUrls: ['./voicetitle.page.scss'],
})
export class VoicetitlePage implements OnInit {
  responseList: Array<any> = [];

  answers:Array<string> = ['Cat','Dog','Sat','Constantinople'];

  feedback: string;
  stepper: number = 0;
  correctAnswer: string = this.answers[this.stepper];
  console: string = this.answers[this.stepper];
  constructor(private speech: SpeechRecognition, private router:Router) { }
  check():void{
    (this.responseList.indexOf(this.correctAnswer)!=-1)?this.feedback='CORRECT':this.feedback='NOT CORRECT';
    (this.stepper<this.answers.length-1)?this.stepper++:this.stepper=0;
    this.console = this.answers[this.stepper];
    this.correctAnswer = this.answers[this.stepper];
    
  }

  listen():void{
    setTimeout(function(){
      this.stop();
    },5000);
    this.speech.startListening({matches:1})
  .subscribe(
    (matches: Array<string>) => {this.responseList= matches;},
    (onerror) => console.log('error:', onerror)
  )
  }
  stop():void{
    this.speech.stopListening();
    setTimeout(this.getPermission,1000)
    //console.log(this.responseList);
  }
  async getPermission():Promise<void>{
    try{
      const permission = await this.speech.requestPermission();
    }
    catch(e){

    }
  }

  async isSpeechSupported():Promise<boolean>{
    const isAvailable = await this.speech.isRecognitionAvailable();
    console.log(isAvailable);
    return isAvailable;
  }
  ngOnInit() {
  }

}
