public with sharing class OpportunitySelector {
    public static List<Opportunity> getOpportunitiesByAccountId(Id accountId) {
<<<<<<< HEAD
        return [SELECT Id, Name, Amount, CloseDate, StageName FROM Opportunity WHERE AccountId = :accountId];
=======
        return [SELECT Id, Name, Amount, CloseDate, StageName 
        FROM Opportunity 
        WHERE 
        AccountId = :accountId
        AND StageName = 'Closed Won' 
        LIMIT 100];
>>>>>>> Projet 3 Chaima Gharbi
    }
}