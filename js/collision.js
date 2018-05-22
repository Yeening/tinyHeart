/**
 * Created by Vincent on 2018/5/22.
 */
//determine the distance between big fish and fruit
//big fish eat the fruit while distance is short enough

function momFruitsCollision() {
    for(var i = 0; i < fruit.num; i++){
        if(fruit.alive[i]){
            //get length
            //to solve: judge whether the fruit is mature
            var distance = calLength2(fruit.x[i],fruit.y[i], mom.x, mom.y);
            if(distance < 900){
                //eat fruit
                // fruit.alive[i] = false;
                fruit.dead(i);
            }
        }
    }
}

//mom baby collision
function momBabyCollision() {
    //get length
    //to solve: judge whether the fruit is mature
    var distance = calLength2(mom.x, mom.y, baby.x, baby.y);
    if (distance < 900) {
        //feed baby fish
        baby.recover();
    }
}

