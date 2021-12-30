describe("About Mutability", function() {
  // 객체 mutable
  it("should expect object properties to be public and mutable", function () {
    var aPerson = {firstname: "John", lastname: "Smith" };
    aPerson.firstname = "Alan";

    expect(aPerson.firstname).toBe("Alan");
  });

  it("should understand that constructed properties are public and mutable", function () {
    function Person(firstname, lastname)
    {
      this.firstname = firstname;
      this.lastname = lastname;
    }
    var aPerson = new Person ("John", "Smith");
    aPerson.firstname = "Alan"; // 객체 속성이 바뀐다.

    expect(aPerson.firstname).toBe("Alan");
  });
  // 프로토타입 mutable
  it("should expect prototype properties to be public and mutable", function () {
    function Person(firstname, lastname)
    {
      this.firstname = firstname;
      this.lastname = lastname;
    }
    Person.prototype.getFullName = function () {
      return this.firstname + " " + this.lastname;
    };

    var aPerson = new Person ("John", "Smith");
    expect(aPerson.getFullName()).toBe("John Smith");

    // 프로토타입이 바뀐다.(해당 객체의 프로토타입만?)
    aPerson.getFullName = function () {
      return this.lastname + ", " + this.firstname;
    };

    expect(aPerson.getFullName()).toBe("Smith, John");
  });

  // 매개변수는 변하지 않는다.
  it("should know that variables inside a constructor and constructor args are private", function () {
    function Person(firstname, lastname)
    {
      var fullName = firstname + " " + lastname;
      // 객체의 속성이 아닌 매개변수를 이용한 함수
      this.getFirstName = function () { return firstname; };
      this.getLastName = function () { return lastname; };
      this.getFullName = function () { return fullName; };
    }
    var aPerson = new Person ("John", "Smith");

    aPerson.firstname = "Penny";
    aPerson.lastname = "Andrews";
    aPerson.fullName = "Penny Andrews";

    expect(aPerson.getFirstName()).toBe("John");
    expect(aPerson.getLastName()).toBe("Smith");
    expect(aPerson.getFullName()).toBe("John Smith");

    // 해당 객체의 함수만 변경 -> 매개변수가 아닌 객체의 속성값을 사용해서 풀네임 생성
    aPerson.getFullName = function () {
      return aPerson.lastname + ", " + aPerson.firstname;
    };

    expect(aPerson.getFullName()).toBe("Andrews, Penny");
  });

});
