import React, { useEffect, useState } from 'react'
import { Car } from './car'
import { Car3 } from './car3'
import { Car4 } from './car4'

const Cars = (props) => {
  const [randInt, setRandInt] = useState(null);

  useEffect(() => {
    setRandInt(Math.floor(Math.random() * 2 + 1));
  }, []);

  if (randInt === null) {
    return null; // or a loading spinner if you prefer
  }
  if (randInt === 1) {
    return <Car {...props} speed={0.3} />;
  } else if(randInt === 2) {
    return <Car3 {...props} speed={0.3} />;
  }
  // else {
  //   return <Car4 {...props} speed={0.3} />;
  // }
}

export default Cars