import React from "react";
import s from "./SpinnerbLoader.module.css";
import cn from "clsx";

type SpinnerbLoaderProps = {
  className?: string; // Define the type for className explicitly
};

const SpinnerbLoader: React.FC<SpinnerbLoaderProps> = ({ className }) => {
  return <span className={cn(s.Loader, className)}></span>;
};

export default SpinnerbLoader;
