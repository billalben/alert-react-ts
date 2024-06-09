import { ReactNode } from "react";
import { X } from "lucide-react";
import "./index.scss";
import { AlertTypes } from "../../../types";

interface IProps {
  type: AlertTypes;
  icon: ReactNode;
  title: string;
  description?: string;
  children?: ReactNode;
}

const Alert = ({ type, icon, title, description, children }: IProps) => {
  return (
    <div className={type}>
      <div className="alert-header">
        <div className="title">
          {icon}
          <h2>{title}</h2>
        </div>
        <X className="close" size={26} />
      </div>
      {children ? children : <p>{description}</p>}
    </div>
  );
};

export default Alert;
