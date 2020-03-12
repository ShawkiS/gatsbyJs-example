import React, { useState } from 'react';
import { Motion, spring } from "react-motion";


function Toggle() {
  let [toogle, setToogle] = useState(true);


  return (
    <div>
      <span className={`${toogle ? 'bg-indigo-600' : 'bg-gray-200'} relative inline-block flex-no-shrink h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:shadow-outline`} role="checkbox" tabIndex={0} onClick={() => { toogle = setToogle(!toogle); }} aria-checked={toogle.toString()}>
        <span aria-hidden="true" className={`${toogle ? 'translate-x-5' : 'translate-x-0'} inline-block h-5 w-5 rounded-full bg-white shadow transform transition ease-in-out duration-200`}></span>
      </span>
    </div>

  );
}

export default Toggle;