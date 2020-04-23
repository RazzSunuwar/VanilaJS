// There are two ways to define class in JavaScript using class keyword:
// Class Declaration
// Class Expression

// Class Declaration
/*
  class class-name {
    constructor {
    Properties
    }
    Methods
  }
*/

/* Constructor: The constructor method is a special method for creating and initializing 
an object created within a class. There can be only one special method within the "constructor" in a class.
*/

class Mobile {
  // class Declaration
  constructor(){
    // Instance Member;
    this.a = 12;
    this.show = function(){
      return "Instance Member";
    };
  }
  // Prototype Member
  display() {
    return "Prototype Member";
  }

}
var nokia = new Mobile(); //New Object Created
// document.write(nokia.a)
// document.write(nokia.show());
document.write(nokia.display());
