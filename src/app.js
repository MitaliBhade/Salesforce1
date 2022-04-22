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

}
