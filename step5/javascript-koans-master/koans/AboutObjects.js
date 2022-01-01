describe("About Objects", function () {

  describe("Properties", function () {
    var megalomaniac;

    beforeEach(function () {
       megalomaniac = {  mastermind: "Joker", henchwoman: "Harley" };
    });
    // 객체란 속성들의 모음
    it("should confirm objects are collections of properties", function () {
      expect(megalomaniac.mastermind).toBe("Joker");
    });
    // 속성은 대문자 소문자 구분
    it("should confirm that properties are case sensitive", function () {
      expect(megalomaniac.henchwoman).toBe("Harley");
      expect(megalomaniac.henchWoman).toBe(undefined);
    });
  });
  // 함수는 메소드와 같은 원리로 작동한다.
  it("should know properties that are functions act like methods", function () {
    var megalomaniac = {
      mastermind : "Brain",
      henchman: "Pinky",
      battleCry: function (noOfBrains) {
        return "They are " + this.henchman + " and the" + Array(noOfBrains + 1).join(" " + this.mastermind);
      }
    };

    var battleCry = megalomaniac.battleCry(4);
    expect("They are Pinky and the Brain Brain Brain Brain").toMatch(battleCry);
  });

  it("should confirm that when a function is attached to an object, 'this' refers to the object", function () {
    var currentDate = new Date();
    var currentYear = (currentDate.getFullYear()); // 현재 연도 계산
    var megalomaniac = {
      mastermind: "James Wood",
      henchman: "Adam West",
      birthYear: 1970,
      calculateAge: function () {
        return currentYear - this.birthYear;
      }
    };

    expect(currentYear).toBe(2022);
    expect(megalomaniac.calculateAge()).toBe(2022 - 1970);
  });
  // in 키워드 활용법
  describe("'in' keyword", function () {
    var megalomaniac;
    beforeEach(function () {
      megalomaniac = {
        mastermind: "The Monarch",
        henchwoman: "Dr Girlfriend",
        theBomb: true
      };
    });

    it("should have the bomb", function () {

      var hasBomb = "theBomb" in megalomaniac;

      expect(hasBomb).toBe(true); // 존재하면 true, 없으면 false
    });

    it("should not have the detonator however", function () {

      var hasDetonator = "theDetonator" in megalomaniac; // 없으면 false??

      expect(hasDetonator).toBe(false);
    });
  });

  it("should know that properties can be added and deleted", function () {
    var megalomaniac = { mastermind : "Agent Smith", henchman: "Agent Smith" };

    expect("secretary" in megalomaniac).toBe(false);

    megalomaniac.secretary = "Agent Smith";
    expect("secretary" in megalomaniac).toBe(true);

    delete megalomaniac.henchman; // 삭제
    expect("henchman" in megalomaniac).toBe(false);
  });

  // prototype
  it("should use prototype to add to all objects", function () {
      function Circle(radius)
      {
        this.radius = radius;
      }

      var simpleCircle = new Circle(10);
      var colouredCircle = new Circle(5);
      colouredCircle.colour = "red";

      expect(simpleCircle.colour).toBe(undefined);
      expect(colouredCircle.colour).toBe("red");

      Circle.prototype.describe = function () {
        return "This circle has a radius of: " + this.radius;
      };

      expect(simpleCircle.describe()).toBe("This circle has a radius of: 10");
      expect(colouredCircle.describe()).toBe("This circle has a radius of: 5");
  });
});
