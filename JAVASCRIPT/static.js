class s{
    constructor(name) {
      this.name = name;
    }
    static hello(x) {
      return "Hello " + x.name;
    }
  }
  const myname = new s("shruthika");
 console.log(s.hello(myCar));