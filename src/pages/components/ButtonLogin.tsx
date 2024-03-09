import { Link } from "react-router-dom";

const ButtonLogin = ({
  className,
  content,
  direction,
}: {
  className: string;
  content: string;
  direction: string;
}) => {
  return (
    <button className={className}>
      {direction.startsWith("/") ? (
        <Link to={direction}>{content}</Link>
      ) : (
        <a href={direction}>{content}</a>
      )}
    </button>
  );
};

export default ButtonLogin;
