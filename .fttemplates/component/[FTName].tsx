import { FC, HTMLAttributes } from "react";
import classes from "./[FTName].module.scss"

interface [FTName | pascalcase]Props extends HTMLAttributes<HTMLElement> {

}

export const [FTName | pascalcase]: FC = ({...props}: [FTName | pascalcase]Props) => {
  return <div className={classes.[FTName | pascalcase]} {...props}></div>
};

