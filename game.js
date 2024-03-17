class Game{
  constructor(select,scores,gameoverbg){
    this.gameoverimg=document.querySelector(gameoverbg);
    // 地图
    this.map=document.querySelector(select);
    //得分
    this.scoreEle=document.querySelector(scores);
    // 食物
    this.food=new Food(select);
    // 蛇
    this.snake=new Snake(select); 
    //定义计时器
    this.timer=null;
    //得分
    this.count=0;
  }
  start(){
    this.timer = setInterval(() => {
      //让蛇动起来
      this.snake.move();
      //判断是否吃到食物
      if(this.snake.isEat(this.food.x,this.food.y)){
        //吃到食物边长
        this.snake.createHead();
        //食物的位置更新
        this.food.foodPos();
        //得分增加
        this.changeScore();
      }
      //判断蛇是否死亡
      if(this.snake.isDie()){
        this.gameOver();
      }
    }, 500);
  }
  //暂停游戏
  pause(){
    clearInterval(this.timer);
  }
  //继续游戏
  reStart(){
    window.location.reload();
  }
  //改变方向的方法
  change(type){
    this.snake.direction=type;
  }
  //改变得分
  changeScore(){
    this.count++;
    this.scoreEle.innerHTML=this.count;
  }
  //游戏结束
  gameOver(){
    clearInterval(this.timer);
    this.gameoverimg.style.display="block";
  }

}