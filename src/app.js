import { LightningElement, api } from "lwc";

export default class App extends LightningElement {

  clickedButtonLabel;
   buttonStatefulState = false;
    buttonIconStatefulState = false;

    handleClick(event) {
        this.clickedButtonLabel = event.target.label;
    }

    handleButtonStatefulClick() {
        this.buttonStatefulState = !this.buttonStatefulState;
    }

    handleButtonIconStatefulClick() {
        this.buttonIconStatefulState = !this.buttonIconStatefulState;
    }

    handleZoomIn(){

        var body = document.querySelector("body");
                var currWidth = body.clientWidth;
                if(currWidth == 1000000){
                    alert("Maximum zoom-in level of 1 Million reached.");
                } else{
                    body.style.width = (currWidth + 50) + "px";
                } 
    }

    handleZoomOut() {

        var body = document.querySelector("body");
                var currWidth = body.clientWidth;
                if(currWidth == 500000){
                    alert("Maximum zoom-out level reached.");
                } else{
                    body.style.width = (currWidth - 50) + "px";
                }
    }

}
