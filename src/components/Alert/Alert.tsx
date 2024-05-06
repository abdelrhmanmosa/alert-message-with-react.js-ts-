import { ReactNode } from "react";
import { AlertTypes } from "../../types/type";
import "./index.scss";
import { X } from "lucide-react";

interface IProps {
  type: AlertTypes
  description?: string;
  title: string;
  icon: ReactNode;
  children?: ReactNode;
}

const Alert = ({
  type = "alert-default",
  icon,
  title = "Something Went Wrong",
  description,
  children
}: IProps) => {
  return (
    <div className={type}>
      <div className="alert-head">
        <div className="title">
          {icon}
          <h2>{title}</h2>
        </div>
        <X className="close-btn" />
      </div>
      <p>
        {description}
      </p>
      {children}
    </div>
  );
};

export default Alert;
