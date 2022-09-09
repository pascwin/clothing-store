import './Button.scss';

const Button = ({ children, buttonType, ...otherProps }: any) => {
  return (
    <button
      className={`button-container ${buttonType}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;