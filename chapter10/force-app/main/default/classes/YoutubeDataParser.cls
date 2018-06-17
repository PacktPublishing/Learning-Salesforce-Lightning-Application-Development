public with sharing class YoutubeDataParser {

    @AuraEnabled
    public String kind {get;set;}
    @AuraEnabled
    public String etag {get;set;}
    @AuraEnabled
    public String nextPageToken {get;set;} //CAUQAA
    @AuraEnabled
    public String regionCode {get;set;} //US
    @AuraEnabled
    public cls_pageInfo pageInfo {get;set;}
    @AuraEnabled
    public cls_items[] items {get;set;}

    public class cls_pageInfo {
        @AuraEnabled
        public Integer totalResults;
        @AuraEnabled //4251
        public Integer resultsPerPage; //5
    }

    public class cls_items {
        @AuraEnabled
        public String kind {get;set;}
        @AuraEnabled //youtube#searchResult
        public String etag {get;set;}
        @AuraEnabled//"DsOZ7qVJA4mxdTxZeNzis6uE6ck/jQS1pN9bGthkAVfOJID_PxDCwO0"
        public cls_id id {get;set;}
        @AuraEnabled
        public cls_snippet snippet {get;set;}
    }

    public class cls_id {
        @AuraEnabled
        public String kind {get;set;} 
        @AuraEnabled//youtube#video
        public String videoId {get;set;} //A42GwYBmGYI
    }

    public class cls_snippet {
        @AuraEnabled
        public String publishedAt {get;set;}
        @AuraEnabled //2015-09-04T19:26:57.000Z
        public String channelId {get;set;}
        @AuraEnabled //UC0GDUNmsEUBbEzcsmEzTXNg
        public String title {get;set;}
        @AuraEnabled
        public String description {get;set;}
        @AuraEnabled
        public cls_thumbnails thumbnails {get;set;}
        @AuraEnabled
        public String channelTitle {get;set;}
        @AuraEnabled
        public String liveBroadcastContent {get;set;}
    }

    public class cls_thumbnails {
        @AuraEnabled
        public cls_image default_x {get;set;}
        @AuraEnabled
        public cls_image medium {get;set;}
        @AuraEnabled
        public cls_image high {get;set;}
    }

    public class cls_image {
        @AuraEnabled
        public String url {get;set;}
        @AuraEnabled //https://i.ytimg.com/vi/A42GwYBmGYI/default.jpg
        public Integer width {get;set;}
        @AuraEnabled
        public Integer height {get;set;}
    }

    public static YoutubeDataParser parse(String json){
        return (YoutubeDataParser) System.JSON.deserialize(json, YoutubeDataParser.class);
    }
}
