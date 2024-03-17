// food类的定义 相关食物的操作
//1、坐标位置 2、生成食物 3、更新
class Food{
    constructor(select){
      this.map=document.querySelector(select);
      //创建食物
      this.food=document.createElement("div");
      //定义样式
      this.food.className="food";
      //放到地图之中
      this.map.appendChild(this.food);
      //定义坐标
      this.x=0;
      this.y=0;
      this.foodPos();
    }
    //随机坐标点
    foodPos(){
        //拿到地图范围
        const w_num = this.map.clientWidth / 40;
        const h_num = this.map.clientHeight / 40;
        //随机生成数字
        let n1=Math.floor(Math.random()*w_num); //0~25
        let n2=Math.floor(Math.random()*h_num); //0~15
        //转换成坐标
        this.x=n1*40;
        this.y=n2*40;
        //赋值
        this.food.style.left=this.x+"px";
        this.food.style.top=this.y+"px";
    }
}