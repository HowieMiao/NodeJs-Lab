// Imports the server.js file to be tested.
const server = require("../server");
// Assertion (Test Driven Development) and Should,  Expect(Behaviour driven 
// development) library
const chai = require("chai");
// Chai HTTP provides an interface for live integration testing of the API's.
const chaiHttp = require("chai-http");
chai.should();
chai.use(chaiHttp);
const { assert, expect } = chai;

describe("Server!", () => {
  // Sample test case given to test / endpoint.
  it("Returns the default welcome message", (done) => {
    chai
      .request(server)
      .get("/")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.status).to.equals("success");
        assert.strictEqual(res.body.message, "Welcome!");
        done();
      });
  });

  // ===========================================================================
  // TODO: Please add your test cases for part A here.


  it("Returns operations", done => {
    chai
      .request(server)
      .get("/operations")
      .end((err, res) => {
        expect(res).to.have.status(200);
        res.body.should.be.a('array');
        res.body.length.should.not.be.eq(0);
        done();
      });
  });

  it("Returns details", done => {
    chai
    .request(server)
    .get("/operations/1")
    .end((err,res) => {
      expect(res).to.have.status(200);
      expect(res.body.id).to.equals(1);
      expect(res.body).to.have.property('name');
      expect(res.body).to.have.property('sign');
      done();
    });
  });

  it("Add operations", done => {
    chai
    .request(server)
    .post("/operations")
    .send({
      name: "division",
      sign: "/"
    })
    .end((err,res) => {
      expect(res).to.have.status(201);
      expect(res.body.id).to.equals(4);
      expect(res.body.name).to.equals('division');
      expect(res.body.sign).to.equals('/');
      done();
    });
  });




  // ===========================================================================
  // TODO: Please add your test cases for part B here.

  it("Add player", done => {
    chai
    .request(server)
    .post("/players/add")
    .send({
      id: 4,
      name: "apseoifhaseipof",
      dob: "2000-02-24"
    })
    .end((err,res) => {
      expect(res).to.have.status(201);
      expect(res.body.id).to.equals(4);
      expect(res.body.name).to.equals('apseoifhaseipof');
      expect(res.body.dob).to.equals('2000-02-24');
      done();
    });
  });

  it("Returns detail", done => {
    chai
    .request(server)
    .get("/players/1")
    .end((err,res) => {
      expect(res).to.have.status(200);
      expect(res.body.id).to.equals(1);
      expect(res.body).to.have.property('name');
      expect(res.body).to.have.property('dob');
      done();
    });
  });


});
