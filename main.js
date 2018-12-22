function Person(name,height) {
    this.name = name;
    this.height = height;
    this.aboutYourself=function(){
        return "I am "+this.name+". I am "+this.height+"cm height";
    }
  };
var me= new Person("Rohit",180);
console.log(me.aboutYourself());