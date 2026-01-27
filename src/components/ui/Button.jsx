import React from 'react';
import { Link } from 'react-router-dom';

export default function Button({
    children,
    variant = 'primary',
    to,
    onClick,
    className = '',
    type = 'button'
}) {
    const baseStyles = "btn";
    const variants = {
        primary: "btn-primary",
        outline: "btn-outline",
        ghost: "text-white hover:text-primary transition-colors"
    };

    const combinedClasses = `${baseStyles} ${variants[variant] || variants.primary} ${className}`;

    if (to) {
        return (
            <Link to={to} className={combinedClasses}>
                {children}
            </Link>
        );
    }

    return (
        <button type={type} className={combinedClasses} onClick={onClick}>
            {children}
        </button>
    );
}
