import { LightningElement, api } from "lwc";

export default class App extends LightningElement {
@api names;
numberFieldValue;
buttonValue;
     bike = {
        name: 'Electra X4',
        picture: 'https://s3-us-west-1.amazonaws.com/sfdc-demo/ebikes/electrax4.jpg'
    };
    @api message = 'This is my bike site';
    name = 'Electra X4';
   description = 'A sweet bike built for comfort.';
   category = 'Mountain';
   material = 'Steel';
   price = '$2,700';
   pictureUrl = 'https://s3-us-west-1.amazonaws.com/sfdc-demo/ebikes/electrax4.jpg';

   ready = false;
   connectedCallback() {
       setTimeout(() => {
           this.ready = true;
       }, 3000);
   }

   handleNumberChange(event){
   this.numberFieldValue = event.target.value;
}

handleButtonChange(event){
    this.buttonValue = 'Button is clicked';
}

}
