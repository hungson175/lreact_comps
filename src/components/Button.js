import PropType from 'prop-types';
import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';


function Button({
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded,
    ...otherProps
}) {
    const classes  = twMerge (
    classNames(otherProps.className, 'flex items-center border px-3 py-1.5', {
        'border-blue-500 bg-blue-500 text-white': primary,
        'border-gray-900 bg-gray-900 text-white': secondary,
        'border-green-500 bg-green-500 text-white': success,
        'border-yellow-400 bg-yellow-500 text-white': warning,
        'border-red-500 bg-red-500 text-white': danger,
        'rounded-full': rounded,
        'bg-white': outline,
        'text-blue-500': outline && primary,
        'text-gray-900': outline && secondary,
        'text-green-500': outline && success,
        'text-yellow-400': outline && warning,
        'text-red-500': outline && danger
        
    }));
    
    return (
        <button  {...otherProps} className={classes}> {children}</button>   
    );    
}

Button.propTypes = {
    checkVariationValue: ({ primary, secondary, success, warning, danger}) => {
        let count = 
            Number(!!primary) + 
            Number(!!secondary) + 
            Number(!!success) + 
            Number(!!warning) + 
            Number(!!danger);
        if ( count > 1 ) 
            return new Error("Only one of [primary, secondary, success, warning, danger] is allowed to be true");
    }

}

export default Button;