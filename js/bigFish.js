/**
 * Created by Vincent on 2018/5/22.
 */
var momObj = function () {
    this.x;
    this.y;
    this.angle;

    this.bigEye = [];
    this.bigBodyOrange = [];
    this.bigBodyBlue = [];
    this.bigTail = [];

    this.bigTailTimer = 0;
    this.bigTailCount = 0;

    this.bigEyeTimer = 0;
    this.bigEyeCount = 0;
    this.bigEyeInterval = 1000;

    this.bigBodyTimer = 0;
    this.bigBodyCount = 0;
}
momObj.prototype.init = function(){
    this.x = canWidth * 0.5;
    this.y = canHeight * 0.5;
    this.angle = 0;

    //load img sequence
    for(var i = 0; i < 8; i++){
        this.bigTail[i] = new Image();
        this.bigTail[i].src = "./src/bigTail" + i + ".png";
    }
    for(var i = 0; i < 2; i++){
        this.bigEye[i] = new Image();
        this.bigEye[i].src = "./src/bigEye" + i + ".png";
    }
    for(var i = 0; i < 8; i++){
        this.bigBodyOrange[i] = new Image();
        this.bigBodyOrange[i].src = "./src/bigSwim" + i + ".png";
    }
    for(var i = 0; i < 8; i++){
        this.bigBodyBlue[i] = new Image();
        this.bigBodyBlue[i].src = "./src/bigSwimBlue" + i + ".png";
    }
}
momObj.prototype.draw = function () {
    //lerp x,y
    this.x = lerpDistance(mx, this.x, 0.98);
    this.y = lerpDistance(my, this.y, 0.98);

    //delta angle
    // Math.atan2(y,x)
    var deltaY = my - this.y;
    var deltaX = mx - this.x;
    var beta = Math.atan2(deltaY,deltaX) + Math.PI;

    //lerp angle
    this.angle = lerpAngle(beta,this.angle,0.6);

    //big tail count
    this.bigTailTimer += deltaTime;
    if(this.bigTailTimer >= 50){
        this.bigTailCount = (this.bigTailCount + 1)%8;
        this.bigTailTimer %= 50;
    }

    //big eye count
    this.bigEyeTimer += deltaTime;
    if(this.bigEyeTimer >= this.bigEyeInterval){
        this.bigEyeCount = (this.bigEyeCount + 1) % 2;
        this.bigEyeTimer %= this.bigEyeInterval;

        if(this.bigEyeCount == 1){
            this.bigEyeInterval = 200;
        }
        else{
            this.bigEyeInterval = 1500 + Math.random()*2000;
        }
    }

    //big body count
    if(data.fruitNum){
        this.bigBodyTimer += deltaTime;
        if(this.bigBodyTimer >= 200){
            this.bigBodyCount = this.bigBodyCount + 1;
            this.bigBodyTimer %= 200;
            if(this.bigBodyCount > 7){
                this.bigBodyCount = 7;

            }
        }
    }
    else{ this.bigBodyCount = 0;}


    ctx1.save();

    ctx1.translate(this.x,this.y);   //set base point for big fish
    ctx1.rotate(this.angle);
    ctx1.drawImage(this.bigTail[this.bigTailCount],-this.bigTail[this.bigTailCount].width * 0.5 + 30, -this.bigTail[this.bigTailCount].height * 0.5);
    if(data.times==1){
        ctx1.drawImage(this.bigBodyOrange[this.bigBodyCount],-this.bigBodyOrange[this.bigBodyCount].width * 0.5, -this.bigBodyOrange[this.bigBodyCount].height * 0.5);
    }
    else{
        ctx1.drawImage(this.bigBodyBlue[this.bigBodyCount],-this.bigBodyBlue[this.bigBodyCount].width * 0.5, -this.bigBodyBlue[this.bigBodyCount].height * 0.5);
    }
    ctx1.drawImage(this.bigEye[this.bigEyeCount],-this.bigEye[this.bigEyeCount].width * 0.5, -this.bigEye[this.bigEyeCount].height * 0.5);


    ctx1.restore();

}