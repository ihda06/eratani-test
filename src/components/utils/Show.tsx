import { ReactNode } from "react";

interface ShowProps {
  when: boolean;
  children: ReactNode;
  fallback?: ReactNode;
}

export default function Show({ when, children, fallback }: ShowProps) {
  return <>{when ? children : fallback}</>;
}
