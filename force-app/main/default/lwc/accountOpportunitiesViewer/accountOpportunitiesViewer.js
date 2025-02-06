import { LightningElement, api, wire, track } from 'lwc';
import getOpportunities from '@salesforce/apex/AccountOpportunitiesController.getOpportunities';
<<<<<<< HEAD
=======
import { refreshApex } from '@salesforce/apex';

>>>>>>> Projet 3 Chaima Gharbi

export default class AccountOpportunitiesViewer extends LightningElement {
    @api recordId;
    @track opportunities;
    @track error = {};
<<<<<<< HEAD
=======
    @track showError = false; // Contrôle si le message d'erreur doit être affiché
    wiredResult; // Pour stocker les données renvoyées par l'@wire

    // Configuration des colonnes pour lightning-datatable
>>>>>>> Projet 3 Chaima Gharbi
    columns = [
        { label: 'Nom Opportunité', fieldName: 'Name', type: 'text' },
        { label: 'Montant', fieldName: 'Amount', type: 'currency' },
        { label: 'Date de Clôture', fieldName: 'CloseDate', type: 'date' },
        { label: 'Phase', fieldName: 'StageName', type: 'text' }
    ];
<<<<<<< HEAD

    @wire(getOpportunities, { recordId: '$accountId' }) //error
    wiredOpportunities({ error, data }) {
        if (data) {
            this.opportunities = data;
        } else if (error) {
            this.error = error;
            this.opportunities = undefined;
        }
    }
=======
 // Chargement des opportunités via une méthode Apex
    @wire(getOpportunities, { accountId: '$recordId' }) //error
    wiredOpportunities(result) {
        this.wiredResult = result; // Stocker le résultat pour le rafraîchissement
        const { error, data } = result;

        if (data) {
            this.opportunities = data; // Affectation des opportunités
            this.showError = false; // Réinitialiser l'affichage de l'erreur
        } else if (error) {
            this.error = error; // Stocker l'erreur
            this.opportunities = undefined;
            this.showError = true; // Activer l'affichage de l'erreur

        }
        
  // Gestion du bouton Rafraîchir

    }
    handleRafraichir() {
        
        if  (this.wiredResult) { // Vérifier si l'@wire est déjà défini
            refreshApex(this.wiredResult)  // Rafraîchir les données liées à l'@wire
                .then(() => {
                    console.log('Données rafraîchies avec succès');
                })
                .catch((error) => {
                    console.error('Erreur lors du rafraîchissement des données : ', error);
                });
        }
    }
    
>>>>>>> Projet 3 Chaima Gharbi


}