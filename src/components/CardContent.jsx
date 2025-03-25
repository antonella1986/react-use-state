import "./index.css";

export function CardContent({ children, className }) {
  return <div className={`card-content ${className}`}>{children}</div>;
}
