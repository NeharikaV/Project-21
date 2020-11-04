function hasCollided(lBullet, lWall){
    if(lWall.x-lBullet.x<=lBullet.width/2+lWall.width/2){
      return true
    }
      return false;
  }  
  