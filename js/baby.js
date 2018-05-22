/**
 * Created by Vincent on 2018/5/22.
 */
var babyObj = function () {
    this.x;
    this.y;
    this.angle;
    this.babyEye = new Image();
    this.babyBody = new Image();
    this.babyTail = new Image();
}

babyObj.prototype.init = function () {
    this.x = canWidth * 0.5 - 50;
    this.y = canHeight * 0.5 + 50;
    this.angle = 0;
    this.babyEye.src = "./src/babyEye0.png";
    this.babyBody.src = "./src/babyFade0.png";
    this.babyTail.src = "./src/babyTail0.png";

}

babyObj.prototype.draw = function () {

    //follow big fish
    this.x = lerpDistance(mom.x,this.x, 0.99);
    this.y = lerpDistance(mom.y,this.y, 0.99);

    //delta angle
    // Math.atan2(y,x)
    var deltaY = mom.y - this.y;
    var deltaX = mom.x - this.x;
    var beta = Math.atan2(deltaY,deltaX) + Math.PI;

    //lerp angle
    this.angle = lerpAngle(beta,this.angle,0.6);

    ctx1.save();
    //translate
    ctx1.translate(this.x,this.y);
    ctx1.rotate(this.angle);
    ctx1.drawImage(this.babyTail,0 - this.babyTail.width * 0.5 + 23, 0 - this.babyTail.height * 0.5);
    ctx1.drawImage(this.babyBody,0 - this.babyBody.width * 0.5, 0 - this.babyBody.height * 0.5);
    ctx1.drawImage(this.babyEye,0 - this.babyEye.width * 0.5, 0 - this.babyEye.height * 0.5);

    ctx1.restore();
}