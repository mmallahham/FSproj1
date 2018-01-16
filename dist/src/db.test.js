
var expect = require('chai').expect;
var db = require('./db');


describe("test geting questions data",function(){
  it("Get all questions",function(done){
    db.getAllQuestions(function(res){
      expect(res.length).to.be.greaterThan(0);
      done();
    });
  });
  it("Get question number 1",function(done){
    db.getQuestionByID(1,function(res){
      expect(res.length).to.equal(1);
      done();
    });
  });
  it("test question insertion in the DB",function(done){
    db.newQuestion({'id':0,'name':'forget'},function(res){
      expect(res).to.not.equal(null);
      done();
    });
  });

});

