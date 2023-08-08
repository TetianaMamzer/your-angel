import style from "./counter.module.scss";
import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);
    
     const handleIncrement = () => {
       setCount(count + 1);
     };

     const handleDecrement = () => {
       if (count > 0) {
         setCount(count - 1);
       }
     };

 
  return (
    <div className={style.counterWrapper}>
      <button className={style.decrement} onClick={handleDecrement}>
        -
      </button>
      <p className={style.count}>{count}</p>
      <button className={style.increment} onClick={handleIncrement}>
        +
      </button>
    </div>
  );
};

export default Counter;
