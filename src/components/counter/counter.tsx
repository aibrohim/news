import { FC, useState } from "react";

import classes from "./counter.module.scss"

export const Counter: FC = () => {
  const [count, setCount] = useState(0);

  return <button className={classes.counter} onClick={() => setCount(count + 1)}>Click {count}</button>
}