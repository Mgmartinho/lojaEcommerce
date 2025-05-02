import styles from './button.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'danger';
    fullWidth?: boolean;
}



export function Button({
    variant = "primary",
    children,
    fullWidth = false,
    className,
    ...props }
    : ButtonProps) {
    return (
        <button
            className={`
            ${styles.button} 
            ${styles[variant]} 
            ${fullWidth ? styles.fullWidth : ''}
            ${className ?? ""}
            `}
            {...props}
        >
            {children}
        </button>
    );

};

