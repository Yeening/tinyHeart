/**
 * Created by Vincent on 2018/5/21.
 */
var aneObj = function(){
    //start point, control point, end point(sin)
    this.rootX=[];
    this.headY = [];   //
    this.headX = [];   //sin
    this.amp = [];
    this.alpha = 0;
    //this.len=[];
}
aneObj.prototype.num=50;
aneObj.prototype.init = function() {
    for(var i =0;i<this.num;i++){
        this.rootX[i] = i*16 + Math.random() * 20;//[0,1)
        this.headX[i] = this.rootX[i];
        this.headY[i] = canHeight - (190 + Math.random() * 50);
        this.amp[i] = Math.random() * 50 + 50;
    }
}

aneObj.prototype.draw = function(){
    this.alpha += deltaTime * 0.0008;
    var l = Math.sin(this.alpha);  //[-1,1]


    ctx2.save();
    ctx2.globalAlpha = 0.6;
    ctx2.lineWidth = 20;
    ctx2.lineCap = "round";
    ctx2.strokeStyle = "#3b154e";
    for(var i = 0; i <this.num;i++){
        //beginPath, moveTo, lineTo, stoke, strokeStyle,lineWidth,
        this.headX[i] = this.rootX[i] + l * this.amp[i];
        ctx2.beginPath();
        ctx2.moveTo(this.rootX[i], canHeight);
        ctx2.quadraticCurveTo(this.rootX[i], canHeight - 145, this.headX[i],this.headY[i]);
        //ctx2.lineTo(this.x[i],canHeight - this.len[i]);
        ctx2.stroke();
    }
    ctx2.restore();

}