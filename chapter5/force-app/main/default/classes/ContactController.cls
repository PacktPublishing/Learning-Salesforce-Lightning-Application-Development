public with sharing class ContactController {

    @AuraEnabled
    public static list<Contact> getServerContacts(){
        return [Select Id, Name, Email, Phone From Contact ORDER BY CREATEDDATE DESC limit 10];
    }
}
