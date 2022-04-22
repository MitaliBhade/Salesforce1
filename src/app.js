import { LightningElement, api } from "lwc";

export default class App extends LightningElement {

  clickedButtonLabel;

    handleClick(event) {
        this.clickedButtonLabel = event.target.label;
    }

}
