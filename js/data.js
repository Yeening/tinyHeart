/**
 * Created by Vincent on 2018/5/22.
 */
var dataObj = function () {
    this.fruitNum = 0;
    this.times = 1;
    this.score = 0;
    this.alpha = 0;
    this.gameOver = false;
}


dataObj.prototype.addScore = function () {
    data.score += data.fruitNum * 10 * data.times;
    data.times = 1;
    data.fruitNum = 0;
}

dataObj.prototype.draw = function () {
    var w = can1.width;
    var h = can1.height;

    ctx1.save();
    ctx1.shadowBlur = 10;
    ctx1.shadowColor = "white";
    ctx1.fillStyle = "white";
    ctx1.font = "30px Verdana";
    ctx1.textAlign = "center";  //align: left,center,right
    ctx1.fillText("Score: "+this.score, w*0.5, h - 50);
    //game over
    if(this.gameOver){
        this.alpha += deltaTime * 0.0005;
        if(this.alpha > 1) this.alpha = 1;
        ctx1.fillStyle = "rgba(255, 255, 255," + this.alpha + ")";
        ctx1.fillText("Game Over", w * 0.5, h * 0.5);
    }
    ctx1.restore();


}