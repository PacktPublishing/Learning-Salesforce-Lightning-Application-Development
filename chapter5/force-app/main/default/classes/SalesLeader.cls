public class SalesLeader implements Comparable{

    @AuraEnabled
    public String fullname {get;set;}
    @AuraEnabled
    public String email {get;set;}
    @AuraEnabled
    public String userId {get;set;}
    @AuraEnabled
    public Decimal netsales {get;set;}
    @AuraEnabled
    public String photoURL {get;set;}

    public SalesLeader(String fullName,String email,String userId,decimal netsales,string photourl){
      this.fullname = fullname;
      this.email = email;
      this.userId = userId;
      this.netsales = netsales;
      this.photoURL = photourl;
    }

    // Implement the compareTo() method
      public Integer compareTo(Object compareTo) {
          SalesLeader compareTonetrevenue = (SalesLeader)compareTo;
          if (netsales == compareTonetrevenue.netsales) return 0;
          if (netsales < compareTonetrevenue.netsales) return 1;
          return -1; 
      }

  }
