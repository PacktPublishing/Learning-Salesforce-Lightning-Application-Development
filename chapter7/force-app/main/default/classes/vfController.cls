public with sharing class vfController {

   public String getSalesforceDomain(){
        return System.Url.getSalesforceBaseURL().getHost().substringBefore('--');
   }

}