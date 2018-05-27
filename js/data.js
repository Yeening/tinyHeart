/**
 * Created by Vincent on 2018/5/22.
 */
var dataObj = function () {
    this.fruitNum = 0;
    this.times = 1;
    this.score = 0;
    this.alpha = 0;
    this.alpha1 = 0;
    //this.floatStart = 0;
    this.scoreToAdd = 0;
    this.gameOver = false;

    this.timeCounter = [];  //magnet, freeze, party, box

    this.attract_dis = 22500;  //magnet distance

    this.lifes = 1;
}

dataObj.prototype.init = function () {
    for(var i = 0; i < fruit.typeNum; i++){
        this.timeCounter[i] = 0;
    }
}


dataObj.prototype.addScore = function () {
    this.scoreToAdd = this.fruitNum * 10 * this.times;
    if(this.fruitNum){
        this.alpha1 = 0.1 * Math.PI;
    }
    this.score += this.scoreToAdd;
    this.times = 1;
    this.fruitNum = 0;
}

dataObj.prototype.draw = function () {
    //time counter
    for(var i = 0; i < fruit.typeNum; i++){
        if(this.timeCounter[i] > 0)
            this.timeCounter[i] -= deltaTime;
    }


    var w = can1.width;
    var h = can1.height;

    ctx1.save();
    ctx1.shadowBlur = 10;
    ctx1.shadowColor = "white";
    ctx1.fillStyle = "white";
    ctx1.font = "30px Verdana";
    ctx1.textAlign = "center";  //align: left,center,right
    ctx1.fillText("Score: "+this.score, w*0.5, 50);
    //score of this time
    if(this.alpha1 && this.alpha1 < Math.PI){
        this.alpha1 += deltaTime * 0.002 * Math.PI;
        //this.alpha1 = Math.sin(this.floatStart);
        ctx1.save();
        ctx1.fillStyle = "rgba(255, 255, 255," + Math.sin(this.alpha1) + ")";
        ctx1.fillText("" + this.scoreToAdd, baby.x, baby.y - 50);
        ctx1.restore();
    }
    if(this.alpha1 > Math.PI){this.alpha1 = 0;}
    //game over
    if(this.gameOver){
        this.alpha += deltaTime * 0.0005;
        if(this.alpha > 1) this.alpha = 1;
        ctx1.fillStyle = "rgba(255, 255, 255," + this.alpha + ")";
        ctx1.fillText("Game Over", w * 0.5, h * 0.5);
    }
    ctx1.restore();

}