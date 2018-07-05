describe("StringUtils", function() {
  var stringUtil;

  //This will be called before running each spec
  beforeEach(function() {
      stringUtil = new StringUtils();
  });

  describe("when string operations are performed", function(){
       
      //Spec for Concatenation operation
      it("should be able to concatenate hello and world", function() {
          expect(stringUtil.concatenate('Hello','World')).toEqual('HelloWorld');
      });

      //Spec for camelcase operation
      it("should be able to camelcase", function() {
          expect(stringUtil.camelcase('hello-world')).toEqual('helloWorld');
      });

      //Spec for capitalizeFirstLetter
      it("should be able to capitalize First Letter", function() {
          expect(stringUtil.capitalizeFirstLetter('world')).toEqual('World');
      }); 
  });
});