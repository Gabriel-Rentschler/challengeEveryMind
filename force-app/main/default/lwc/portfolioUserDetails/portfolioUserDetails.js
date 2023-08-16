import { LightningElement, api } from 'lwc';

export default class PortfolioUserDetails extends LightningElement {

    @api recordId
    @api objectApiName

    downloadResume() {    
        window.open("https://github.com/mathugolini/Matheus-Resume/raw/main/Matheus%20Hugolini%20-%20Resume%20(Updated).pdf","_blank")
    }

}