/**
 * Created by Vincent on 2018/5/21.
 */
var aneObj = function(){
    this.x=[];
    this.len=[];
}
aneObj.prototype.num=50;
aneObj.prototype.init = function() {
    for(var i =0;i<this.num;i++){
        this.x[i] = i*10 + Math.random() * 20;//[0,1)
        this.len[i] = 200 + Math.random() * 50;
    }
    console.log("a");
}

aneObj.prototype.draw = function(){

}