/**
 * Created by Vincent on 2018/5/21.
 */
var fruitObj = function () {
    this.alive = []; //bool
    this.x = [];
    this.y = [];
    this.l = [];
    this.spd = [];    //speed of grow and float
    this.orange = new Image();
    this.blue = new Image();
}
fruitObj.prototype.num = 30;
fruitObj.prototype.init = function(){
    for(var i = 0; i <this.num; i++){
        this.alive[i] = true;
        this.x[i] = 0;
        this.y[i] = 0;
        this.born(i);
    }
    this.orange.src = "./src/fruit.png";
    this.blue.src = "./src/blue.png";
}
fruitObj.prototype.draw = function () {
    for(var i = 0; i < this.num;i++){
        //draw
        //find an ane, grow, fly up
        if(this.alive[i]){
            if(this.l[i] <= 14){
                this.l[i] += this.spd[i] * deltaTime;
            }
            else{
                this.y[i] -= this.spd[i] * 7 * deltaTime;
            }
            if(this.y[i] < 0){
                this.alive[i] = false;
            }
            ctx2.drawImage(this.orange, this.x[i] - this.l[i] * 0.5,this.y[i] - this.l[i] * 0.5, this.l[i], this.l[i]);
        }
    }
}
fruitObj.prototype.born = function (i) {
    var aneID = Math.floor(Math.random() * ane.num);
    this.x[i] = ane.x[aneID];
    this.y[i] = canHeight - ane.len[aneID];
    this.l[i] = 0;
    this.spd[i] = Math.random() * 0.01 +0.005; //[0.005. 0.015)
}

fruitObj.prototype.update = function () {
    var num = 0;
    for(var i = 0; i < this.num;i++){
        if(this.alive[i]) num++;
    }
}