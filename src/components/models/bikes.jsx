import React, { useEffect, useState } from 'react'
import { Bike } from './bike';
import { Bike2 } from './bike2';

const Bikes = (props) => {
  // console.log(props)
  const [randInt, setRandInt] = useState(null);

  useEffect(() => {
    setRandInt(Math.floor(Math.random() * 2 + 1));
  }, []);

  if (randInt === null) {
    return null; // or a loading spinner if you prefer
  }
  if (randInt === 1) {
    return <Bike {...props} speed={0.8} />
  } else {
    return <Bike2 {...props} speed={0.8} />;
  }
  // return <Bike {...props} speed={0.5} />;
}

export default Bikes