import { LightningElement, wire, api} from 'lwc';
import PortfolioAssets from '@salesforce/resourceUrl/PortfolioAssets'
import {getRecord, getFieldValue} from 'lightning/uiRecordApi'
import FULLNAME from '@salesforce/schema/Portfolio__c.FullName__c'
import COMPANY_LOCATION from '@salesforce/schema/Portfolio__c.CompanyLocation__c'
import COMPANY_NAME from '@salesforce/schema/Portfolio__c.CompanyName__c'
import DESIGNATION from '@salesforce/schema/Portfolio__c.Designation__c'


export default class PortfolioBanner extends LightningElement {

    @api recordId = 'a01Hu00000x9SiYIAU'
    @api linkedinUrl = "https://www.linkedin.com/in/matheus-hugolini/"
    @api githubUrl = "https://github.com/mathugolini"
    @api trailheadUrl = "https://www.salesforce.com/trailblazer/mathugolini"

    userPic = `${PortfolioAssets}/PortfolioAssets/matheusLogo.png`
    linkedin = `${PortfolioAssets}/PortfolioAssets/Social/linkedin.svg`
    github = `${PortfolioAssets}/PortfolioAssets/Social/github.svg`
    trailhead = `${PortfolioAssets}/PortfolioAssets/Social/trailhead1.svg`

   
    @wire(getRecord, {recordId:'$recordId', fields:[FULLNAME, COMPANY_LOCATION, COMPANY_NAME, DESIGNATION]})
    portfolioData

    // verificar qual dado esta retornando no console --- usar inspect
// portfolioHandler({data, error}) {
//     if(data) {
//        console.log("record Data", JSON.stringify(data))
//     } 
//      if (error) {
//          console.error("error", error)
//       }
//   }

    get fullName() {
        return getFieldValue(this.portfolioData.data, FULLNAME)
    }

    get companyLocation() {
        return getFieldValue(this.portfolioData.data, COMPANY_LOCATION)
    }

    get companyName() {
        return getFieldValue(this.portfolioData.data, COMPANY_NAME)
    }

    get designation() {
        return getFieldValue(this.portfolioData.data, DESIGNATION)
    }

}