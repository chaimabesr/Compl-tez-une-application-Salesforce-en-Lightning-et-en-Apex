public with sharing class AccountCasesController {
<<<<<<< HEAD

    @AuraEnabled
    public static void findCasesBySubject(){

    }


=======
/**
     * Méthode pour rechercher les cas associés à un compte par sujet.
     * @param accountId : ID de l'Account pour lequel on recherche les cas.
     * @param subject : Filtre optionnel sur le sujet des cas.
     * @return Liste des cas associés au compte, filtrés par sujet si spécifié.
     */
    @AuraEnabled(cacheable=true)
    public static List<Case> getCases(Id accountId, String subject) {
       
      // Appel à la méthode utilitaire pour récupérer les cases
    return CaseSelector.findCasesBySubject(accountId, subject);
    }
>>>>>>> Projet 3 Chaima Gharbi
}