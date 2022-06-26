import { useState } from 'react';

type ReturnType = {
  isHovered: boolean;
  onMouseEnter(): void;
  onMouseLeave(): void;
};

export const useHover = (): ReturnType => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const onMouseEnter = (): void => {
    setIsHovered(true);
  };
  const onMouseLeave = (): void => {
    setIsHovered(false);
  };
  return { isHovered, onMouseEnter, onMouseLeave };
};
