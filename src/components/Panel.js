import classNames from "classnames";

const Panel = ({
    children, 
    className,
    ...otherProps
}) => {
    const finalClassNames = classNames(
        'border rounded p-3 shadow bg-white w-full',
        className
    );
    return (
        <div {...otherProps} className={finalClassNames}>
            {children}
        </div>
    );
};

export default Panel;