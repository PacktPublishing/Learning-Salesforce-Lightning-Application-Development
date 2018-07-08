@isTest
private class YoutubesearchTest {

    static testMethod void testsearch(){
        Test.startTest();
        Test.setMock(HttpCalloutMock.class, new MockHttpResponseGenerator());
        // Call method to test.
        // This causes a fake response to be sent
        // from the class that implements HttpCalloutMock. 
        String res = Youtubesearch.search('Test');
        Test.stopTest();
        String expectedValue = MockHttpResponseGenerator.json;
        System.assertEquals(res, expectedValue);
    }
   
}
