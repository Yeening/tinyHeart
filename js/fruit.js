/**
 * Created by Vincent on 2018/5/21.
 */
var fruitObj = function () {
    this.alive = []; //bool
    this.aneNumber = [];
    this.x = [];
    this.y = [];
    this.l = [];      //fruit size
    this.spd = [];    //speed of grow and float
    this.fruitType = [];
    this.orange = new Image();
    this.blue = new Image();
    this.magnet = new Image();

    this.typeNum = 6;
}
fruitObj.prototype.num = 30;
fruitObj.prototype.init = function(){
    for(var i = 0; i <this.num; i++){
        this.alive[i] = false;
        this.aneNumber[i] = 0;
        this.x[i] = 0;
        this.y[i] = 0;
        this.fruitType[i] = "";
        //this.born(i);
    }
    this.orange.src = "./src/fruit.png";
    this.blue.src = "./src/blue.png";
    this.magnet.src="./src/magnet.png";
}
fruitObj.prototype.draw = function () {
    for(var i = 0; i < this.num;i++){
        //draw
        //find an ane, grow, fly up
        if(this.alive[i]){
            if(this.l[i] <= 14){  //grow
                this.x[i] = ane.headX[this.aneNumber[i]];
                this.l[i] += this.spd[i] * deltaTime;
            }
            else{
                this.y[i] -= this.spd[i] * 7 * deltaTime;
            }
            if(this.y[i] < 0){
                this.alive[i] = false;
            }
            if(this.fruitType[i] == "orange"){
                ctx2.drawImage(this.orange, this.x[i] - this.l[i] * 0.5,this.y[i] - this.l[i] * 0.5, this.l[i], this.l[i]);
            }
            else if(this.fruitType[i] == "blue"){
                ctx2.drawImage(this.blue, this.x[i] - this.l[i] * 0.5,this.y[i] - this.l[i] * 0.5, this.l[i], this.l[i]);
            }
            else if(this.fruitType[i] == "magnet"){
                ctx2.drawImage(this.magnet, this.x[i] - this.l[i] * 0.5,this.y[i] - this.l[i] * 0.5, this.l[i] * 1.5, this.l[i] * 1.5);
            }
        }
    }
}
fruitObj.prototype.born = function (i) {
    this.aneNumber[i] = Math.floor(Math.random() * ane.num);
    this.alive[i] = true;
    this.x[i] = ane.headX[this.aneNumber[i]];
    this.y[i] = ane.headY[this.aneNumber[i]];
    this.l[i] = 0;
    this.spd[i] = Math.random() * 0.017 +0.003; //[0.003. 0.02)
    if(Math.random() < 0.15){
        this.fruitType[i] = "blue";
    }
    else if(Math.random() < 0.05){
        //born a bonus fruit
        this.fruitType[i] = "magnet";
    }
    else this.fruitType[i] = "orange";
}

fruitObj.prototype.dead = function (i) {
    fruit.alive[i] = false;
}


function fruitMonitor() {
    var num = 0;
    for(var i = 0; i < this.num;i++){
        if(fruit.alive[i]) num++;
    }
    if(num < 15){
        //send fruit
        sendFruit();
    }
}
function sendFruit() {
    for(var i = 0; i < fruit.num;i++){
        if(!fruit.alive[i]){
            fruit.born(i);
            return;
        }
    }
}

fruitObj.prototype.fly = function (i) {  //fruit attracted by magnet
    if(this.fruitType[i] == "orange" || this.fruitType[i] == "blue"){
        this.x[i] = lerpDistance(mom.x,this.x[i],0.92);
        this.y[i] = lerpDistance(mom.y,this.y[i],0.92);
    }

}