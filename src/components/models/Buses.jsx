import React, { useEffect, useState } from 'react'
import { Bus2 } from './bus2';
import { Bus3 } from './bus3';

const Buses = (props) => {
  const [randInt, setRandInt] = useState(null);

  useEffect(() => {
    setRandInt(Math.floor(Math.random() * 2 + 1));
  }, []);

  if (randInt === null) {
    return null; // or a loading spinner if you prefer
  }
  if (randInt === 1) {
    return <Bus2 {...props} speed={0.2} />;
  } else {
    return <Bus3 {...props} speed={0.2} />;
  }
}

export default Buses