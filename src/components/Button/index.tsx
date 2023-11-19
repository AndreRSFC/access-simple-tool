import './Button.css'

export const Button: React.FC<any> = ({ children, ...props }) => {
  return <button className="button" {...props}>{children}</button>;
};
