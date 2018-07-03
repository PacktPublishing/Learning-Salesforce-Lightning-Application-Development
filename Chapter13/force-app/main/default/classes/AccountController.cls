public with sharing class AccountController {
    
    @AuraEnabled
    public Static String getAccountInfo(String recordId){
        String response = '{}';
        list<Account> lstaccounts = [Select Id,
                                    Name ,
                                    (Select Id FROM Contacts),
                                    (Select Id from Cases)
                                    FROM Account
                                    WHERE ID =:recordId];
        if(lstaccounts.size() >0 ){
            response = JSON.serialize(lstaccounts[0]) ;
        }
        return response;
    }
}
