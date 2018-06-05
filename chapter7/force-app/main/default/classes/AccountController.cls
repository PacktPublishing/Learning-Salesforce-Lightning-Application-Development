global with sharing class AccountController {
    
    @RemoteAction
    global static Account saveAccount(Account acc) {
       insert acc;
       return acc;
    }
    
}