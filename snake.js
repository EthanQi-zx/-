class Snake{
  constructor(select){
    this.map=document.querySelector(select);
    //蛇的运动方向
    this.direction='right';
    //蛇的数组(蛇的头和身体都会存进来，头从数组的第0位开始)
    this.snakelist=[];
    //调用创建蛇方法
    this.createSnake();
    //调用蛇移动方法
    this.move();


  }
  //创建蛇头的函数
  createHead(){
    //定义坐标
    const pos={x:0, y:0};
    //获取蛇数组中第0位 即蛇头
    const head=this.snakelist[0];
    //判断蛇头是否存在
    if(head){
      //如果有蛇头 创建一个新的蛇头放在原蛇头之后
      const div=document.createElement('div');
      //新蛇头坐标一定发生改变，改变方向需要罗列一下
      switch(this.direction){
        case 'left':
          pos.x=head.offsetLeft-40;
          pos.y=head.offsetTop;
          break;
        case 'right':
          pos.x=head.offsetLeft+40;
          pos.y=head.offsetTop;
          break;
        case 'top':
          pos.x=head.offsetLeft;
          pos.y=head.offsetTop-40;
          break;
        case 'bottom':
          pos.x=head.offsetLeft;
          pos.y=head.offsetTop+40;
          break;
        default:
          break;
      }
      //之后把原先的蛇头变成身体
      head.className='body';
    }
    //创建蛇头
    const div=document.createElement('div');
    div.className="head";
    //把蛇头存入数组
    this.snakelist.unshift(div);
    //给蛇头定义坐标
    div.style.left=pos.x+'px';
    div.style.top=pos.y+'px';
    //放到地图当中
    this.map.appendChild(div);
  }

  //创建一条蛇
  createSnake(){
    for(let i=0;i<4;i++){
      this.createHead();
    }
  }

  //蛇的移动方式
  move(){
    //通过创建一个新蛇头删除身体末尾最后一个来达到视觉上的位移
    
    //删除最后一个
    this.snakelist.pop().remove(); 
    //新增蛇头
    this.createHead();
  }

  //判断蛇是否吃到食物
  isEat(foodX,foodY){
    //判断蛇头跟坐标是否重合
    const head= this.snakelist[0];
    if(head.offsetLeft===foodX&&head.offsetTop===foodY){
      return true;
    }
    return false;
  }

  //判断蛇die没die 即是否撞墙
  isDie(){
    //判断蛇头是否到边界
    const head=this.snakelist[0];
    if(head.offsetLeft<0||head.offsetLeft>=this.map.clientWidth||head.offsetTop<0||head.offsetTop>=this.map.clientHeight){
      return true;
    }
    return false;
  }
}
  
  