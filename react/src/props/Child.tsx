import { ReactNode } from "react";

interface ChildProps {
  color: string;
  onClick(): void;
  children?: ReactNode;
}

export function Child({ color, onClick }: ChildProps) {
  return (
    <>
      <div>
        <h1>Hello, {color}</h1>
        <button onClick={onClick}>click</button>
      </div>
    </>
  );
}

export const ChildAsFunctionalComponent: React.FC<ChildProps> = ({
  color,
  onClick,
  children,
}) => {
  return (
    <>
      <div>
        <h1>Hello, {color}</h1>
        <button onClick={onClick}>click</button>
        {children}
      </div>
    </>
  );
};
