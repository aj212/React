import React from 'react';
import Heading from './Heading';
import SlotM from './SlotM';


const App=()=>{
  return(
    <>
   <Heading/>
   <SlotM x='😄' y='😄' z='😄'/>
   <SlotM x='😄' y='😧' z='😄'/>
   <SlotM x='🍎' y='🍌' z='🥭'/>
   <SlotM x='🍎' y='🍎' z='🍎'/>
   </>
  );
}

export default App;