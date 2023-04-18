declare module "*.scss" {
  interface IClassNames {
    [className: string]: string;
  }
  const classNames: IClassNames;
  export = classNames;
}

declare module "*.svg" {
  const SVG: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default SVG;
}
