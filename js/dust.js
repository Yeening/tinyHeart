/**
 * Created by Vincent on 2018/5/23.
 */
var dustObj = function () {
    this.pic = [];
    this.x = [];
    this.y = [];
    this.amp = [];
    this.picNO = [];
    this.num = 30;

}


dustObj.prototype.init = function () {
    for(var i = 0; i < 7; i++) {
        this.pic[i] = new Image();
        this.pic[i].src = "./src/dust" + i + ".png";
    }
    for(var i = 0; i < 30; i++){
        this.x[i] = Math.random() * canWidth;
        this.y[i] = Math.random() * canHeight;
        this.amp[i] = 10 + Math.random() * 25;
        this.picNO[i] = Math.floor(Math.random() * 7);  //R[0,7)
    }
    this.alpha = 0;
}

dustObj.prototype.draw = function() {
    for(var i = 0; i <this.num; i++){
        var l = Math.sin(ane.alpha) * this.amp[i];
        ctx1.drawImage(this.pic[this.picNO[i]], this.x[i] + l, this.y[i]);
    }
}