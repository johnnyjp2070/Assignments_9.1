function createObject(name, height){
    this.name = name;
    this.height = height;
}

var me = new createObject("bala", 180);

me.aboutYourSelf = function(){
    return "I am "+this.name+". I am "+this.height+" cm height.";
}

console.log(me.aboutYourSelf());

