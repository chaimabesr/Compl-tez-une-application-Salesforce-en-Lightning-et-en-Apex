import { LightningElement, track, api } from 'lwc';
import findCasesBySubject from '@salesforce/apex/AccountCasesController.findCasesBySubject';

const COLUMNS = [
    { label: 'Sujet', fieldName: 'Subject', type: 'text' },
    { label: 'Statut', fieldName: 'Status', type: 'text' },
    { label: 'Priorité', fieldName: 'Priority', type: 'text' },
];

export default class AccountCaseSearchComponent extends LightningElement {

    @api recordId;
    @track cases;
    @track error;
    @track errorMessage = ''; // Ajout de cette variable
    searchTerm = '';
    columns = COLUMNS;

    updateSearchTerm(event) {
        this.searchTerm = event.target.value;
    }

    handleSearch() {
        findCasesBySubject({ accountId: this.recordId, subjectSearchTerm: this.searchTerm })
          .then(result => {
              if (result && result.length > 0) {
                  this.cases = result;
                  this.errorMessage = ''; // Réinitialiser le message d'erreur
              } else {
                  this.cases = [];
                  this.errorMessage = 'Aucun cas trouvé pour ce compte.';
              }
              this.error = '';
          })
          .catch(error => {
              this.cases = [];
              this.error = 'Une erreur est survenue lors de la recherche des cas.';
              this.errorMessage = '';
          });
    }
}