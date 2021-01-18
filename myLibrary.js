function isTouching(movingRect, fixedRect){
    if(movingRect.x- fixedRect.x<movingRect.width/2+fixedRect.width/2 && fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2&& movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2&&fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2)
    {
      return true;
    }
    else{
      return false;
    }
  }

  
  function bounceOff(movingRect, fixedRect){
    if(movingRect.x- fixedRect.x<movingRect.width/2+fixedRect.width/2 && fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2)
    {
      movingRect.velocityX = movingRect.velocityX*(-1);
      fixedRect.velocityX = fixedRect.velocityX*(-1);
    }

    if(movingRect.x>800){
       movingRect.velocityX = -3;
    }else if(fixedRect.x<0){
        fixedRect.velocityX = 3;
     }
  }
