import React from 'react';

const SlotM=(props)=>{

  if((props.x===props.y)&&(props.y===props.z)){
    return(
      <>
     <div class="panel panel-default">
  <div class="panel-body">
  <h1>{props.x}&nbsp;&nbsp;{props.y}&nbsp;&nbsp;{props.z}</h1><br/>
  <h1>You Win!BOOYAH 💯 </h1>
  </div>
</div>
      </>
    );
  }
  else{
    return(
      <>
     <div class="panel panel-default">
  <div class="panel-body">
  <h1>{props.x}&nbsp;&nbsp;{props.y}&nbsp;&nbsp;{props.z}</h1><br/>
  <h1>You Lose! Try Again 0️⃣ </h1>
  </div>
</div>
      </>
    );
  }
}
export default SlotM;

