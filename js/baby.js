/**
 * Created by Vincent on 2018/5/22.
 */
var babyObj = function () {
    this.x;
    this.y;
    this.angle;
    //this.babyEye = new Image();
    this.babyEye = [];
    this.babyBody = new Image();
    this.babyTail = [];

    this.babyTailTimer = 0;
    this.babyTailCount = 0;

    this.babyEyeTimer = 0;
    this.babyEyeCount = 0;
    this.babyEyeInterval = 1000;

}

babyObj.prototype.init = function () {
    this.x = canWidth * 0.5 - 50;
    this.y = canHeight * 0.5 + 50;
    this.angle = 0;
    this.babyEye.src = "./src/babyEye0.png";
    this.babyBody.src = "./src/babyFade0.png";
    //this.babyTail.src = "./src/babyTail0.png";
    for(var i = 0; i < 8; i++){
        this.babyTail[i] = new Image();
        this.babyTail[i].src = "./src/babyTail" + i + ".png";
    }
    for(var i = 0; i < 2; i++){
        this.babyEye[i] = new Image();
        this.babyEye[i].src = "./src/babyEye" + i + ".png";
    }
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

    //baby tail count
    this.babyTailTimer += deltaTime;
    if(this.babyTailTimer >= 50){
        this.babyTailCount = (this.babyTailCount + 1)%8;
        this.babyTailTimer %= 50;
    }
    //baby eye count
    this.babyEyeTimer += deltaTime;
    if(this.babyEyeTimer > this.babyEyeInterval){
        this.babyEyeCount = (this.babyEyeCount + 1) % 2;
        this.babyEyeTimer %= this.babyEyeInterval;

        if(this.babyEyeCount == 1){
            this.babyEyeInterval = 200;
        }
        else{
            this.babyEyeInterval = 1500 + Math.random()*2000;
        }
    }

    ctx1.save();
    //translate
    ctx1.translate(this.x,this.y);
    ctx1.rotate(this.angle);
    ctx1.drawImage(this.babyTail[this.babyTailCount],0 - this.babyTail[this.babyTailCount].width * 0.5 + 23, 0 - this.babyTail[this.babyTailCount].height * 0.5);
    ctx1.drawImage(this.babyBody,0 - this.babyBody.width * 0.5, 0 - this.babyBody.height * 0.5);
    ctx1.drawImage(this.babyEye[this.babyEyeCount],0 - this.babyEye[this.babyEyeCount].width * 0.5, 0 - this.babyEye[this.babyEyeCount].height * 0.5);

    ctx1.restore();
}