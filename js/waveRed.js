/**
 * Created by Vincent on 2018/5/22.
 */
var waveRedObj = function () {
    //num of objects
    this.num = 5;

    this.x = [];
    this.y = [];
    this.alive = [];
    this.r = [];

}

waveRedObj.prototype.init = function () {
    for(var i = 0; i < this.num; i++ ){
        this.alive[i] = false;
        this.r[i] = 0;
        this.x[i] = 0;
        this.y[i] = 0;
    }
}

waveRedObj.prototype.draw = function () {
    ctx1.save();
    ctx1.lineWidth = 2;
    ctx1.shadowBlur = 10;
    ctx1.shadowBlur = "rgba(203,91,0)";
    for(var i = 0; i < this.num; i++ ){
        if(this.alive[i]){
            this.r[i] += deltaTime * 0.05;
            if(this.r[i] > 100){
                this.alive[i] = false;
                break;
            }
            var alpha = 1 - this.r[i] / 100;
            //api
            ctx1.beginPath();
            ctx1.arc(this.x[i],this.y[i],this.r[i],0,Math.PI *2);
            ctx1.closePath();
            ctx1.strokeStyle = "rgba(203, 91, 0," + alpha + ")";
            ctx1.stroke();
            //draw
        }
    }
    ctx1.restore();
}

waveRedObj.prototype.born = function (x,y) {
    for(var i = 0; i < this.num; i++ ){
        if(this.alive[i] == false){
            //born
            this.alive[i] = true;
            this.r[i] = 10;
            this.x[i] = x;
            this.y[i] = y;
            return;
        }
    }
}
