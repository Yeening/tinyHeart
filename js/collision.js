/**
 * Created by Vincent on 2018/5/22.
 */
//determine the distance between big fish and fruit
//big fish eat the fruit while distance is short enough

function momFruitsCollision() {
    if(data.gameOver) return;
    for(var i = 0; i < fruit.num; i++){
        if(fruit.alive[i] && fruit.l[i] > 14){
            //get length
            //solved: judge whether the fruit is mature
            var distance = calLength2(fruit.x[i],fruit.y[i], mom.x, mom.y);

            if(distance < data.attract_dis && data.timeCounter[0] > 0){
                fruit.fly(i);
            }

            if(distance < 900){
                fruit.dead(i);
                if(fruit.fruitType[i]=="blue"){
                    data.times = 2;
                }
                else if(fruit.fruitType[i]=="orange"){
                    data.fruitNum++;
                }
                else if(fruit.fruitType[i] == "box"){
                    data.fruitNum += 10;
                }
                else if(fruit.fruitType[i]=="magnet"){  //exist time of magnet fruit
                    data.timeCounter[0] = 6000;
                }
                wave.born(fruit.x[i],fruit.y[i]);
            }
        }
    }
}

//mom baby collision
function momBabyCollision() {
    if(data.gameOver) return;
    //get length
    //to solve: judge whether the fruit is mature
    var distance = calLength2(mom.x, mom.y, baby.x, baby.y);
    if (distance < 900&&data.fruitNum) {
        //feed baby fish
        baby.recover();
        waveRed.born(baby.x,baby.y);
        //add score.
        data.addScore();

        //big fish recover
        mom.bigBodyCount = 0;


    }
}

