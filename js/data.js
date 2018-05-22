/**
 * Created by Vincent on 2018/5/22.
 */
var dataObj = function () {
    this.fruitNum = 0;
    this.times = 1;
}

dataObj.prototype.reset = function () {
    data.times = 1;
    data.fruitNum = 0;
}

dataObj.prototype.draw = function () {
    var w = can1.width;
    var h = can1.height;

    ctx1.fillStyle = "white";
    ctx1.fillText(""+this.fruitNum, w*0.5, h - 50);
}