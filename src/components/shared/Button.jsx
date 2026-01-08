const Button = ({ children, variant = 'primary', size = 'md', className = '', ...props }) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 hover:opacity-80';

  const variants = {
    primary: 'bg-primary text-white focus:ring-primary',
    secondary: 'bg-secondary text-white focus:ring-secondary',
    green: 'bg-green text-white focus:ring-green',
    brown: 'bg-brown text-white focus:ring-brown',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary hover:opacity-100',
    ghost: 'text-primary hover:bg-primary/10 focus:ring-primary hover:opacity-100',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
