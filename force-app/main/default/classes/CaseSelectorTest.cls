@IsTest
private class CaseSelectorTest {
    private static final String TEST_SUBJECT = 'Test Case Subject';
    @TestSetup
    static void setup() {
        Account testAccount = TestDataFactory.createTestAccount();
        TestDataFactory.createTestCase(testAccount.Id, TEST_SUBJECT);
    }

    
    @IsTest
    static void testfindCasesBySubject() {
        Account testAccount = [SELECT Id FROM Account LIMIT 1];
        Test.startTest();
        List<Case> results = CaseSelector.findCasesBySubject(testAccount.Id, TEST_SUBJECT);
        
        Test.stopTest();
        Assert.areNotEqual(0, results.size(), 'Should return at least one Case');
    }
}