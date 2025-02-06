<<<<<<< HEAD
import { LightningElement, track, api } from 'lwc';
import findCasesBySubject from '@salesforce/apex/AccountCasesController.findCasesBySubject';
=======
import { LightningElement, track, api, wire } from 'lwc';
import findCasesBySubject from '@salesforce/apex/AccountCasesController.getCases';
import Subject from '@salesforce/schema/Case.Subject';
>>>>>>> Projet 3 Chaima Gharbi

const COLUMNS = [
    { label: 'Sujet', fieldName: 'Subject', type: 'text' },
    { label: 'Statut', fieldName: 'Status', type: 'text' },
    { label: 'Priorité', fieldName: 'Priority', type: 'text' },
];

export default class AccountCaseSearchComponent extends LightningElement {
    @api recordId;
    @track cases;
    @track error;
    searchTerm = '';
    columns = COLUMNS;

    updateSearchTerm(event) {
<<<<<<< HEAD
        this.searchTerm = event.target.value;
    }

    handleSearch() {
        findCasesBySubject({ accountId: this.recordId, subjectSearchTerm: this.searchTerm })
            .then(result => {
                this.cases = result;
                this.error = undefined;
            })
            .catch(error => {
=======
        this.searchTerm= event.target.value;
    }

    handleSearch() {
        console.log('bouton appuyé');
        findCasesBySubject({ accountId: this.recordId, subject: this.searchTerm })
            .then(result => {
                this.cases = result;
                this.error = undefined;
                console.log(this.cases);
            })
            .catch(error => {
                console.log(error);
>>>>>>> Projet 3 Chaima Gharbi
                this.error = 'Une erreur est survenue lors de la recherche des cases.';
            });
    }
}