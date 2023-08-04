function Button({ className, children, ...otherProps }) {
  return (
    <button
      type="button"
      className={`py-4 px-6 rounded-[10px] bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${className}`}
      {...otherProps}
    >
      {children}
    </button>
  );
}

export default Button;
