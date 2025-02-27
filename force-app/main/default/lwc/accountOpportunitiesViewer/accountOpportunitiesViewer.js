import { LightningElement, api, wire, track } from 'lwc';
import getOpportunities from '@salesforce/apex/AccountOpportunitiesController.getOpportunities';
import { refreshApex } from '@salesforce/apex';

export default class AccountOpportunitiesViewer extends LightningElement {
    @api recordId;
    @track opportunities = [];
    @track error = {};
    @track errorMessage = ''; // Ajout de cette variable
    wiredResult; // Pour stocker les données renvoyées par l'@wire

    columns = [
        { label: 'Nom Opportunité', fieldName: 'Name', type: 'text' },
        { label: 'Montant', fieldName: 'Amount', type: 'currency' },
        { label: 'Date de Clôture', fieldName: 'CloseDate', type: 'date' },
        { label: 'Phase', fieldName: 'StageName', type: 'text' }
    ];

    @wire(getOpportunities, { accountId: '$recordId' })
    wiredOpportunities(result) {
        this.wiredResult = result; // Stocker le résultat pour le rafraîchissement
        const { error, data } = result;

        if (data) {
            this.opportunities = Array.isArray(data) ? data : []; // Toujours assigner un tableau
            this.errorMessage = data.length ? '' : 'Aucune opportunité trouvée pour ce compte.';
        } else {
            this.opportunities = []; // Éviter undefined
            this.errorMessage = 'Une erreur est survenue lors du chargement des opportunités.';
        }
    }

    handleRafraichir() {
        if (this.wiredResult) { // Vérifier si l'@wire est déjà défini
            refreshApex(this.wiredResult)  // Rafraîchir les données liées à l'@wire
                .then(() => {
                    console.log('Données rafraîchies avec succès');
                })
                .catch((error) => {
                    console.error('Erreur lors du rafraîchissement des données : ', error);
                });
        }
    }
}