const Button = (props) => {
    const {
        type = "button",
        className,
        onClick,
        disabled = false,
        children,
        ariaLabel,
    } = props;
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={className}
            aria-label={ariaLabel}
        >
            {children}
        </button>
    );
};

export default Button;
