import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";


function Accordion({ items }) {
    const [expandedIndex, setExpandedIndex] = useState(1);

    const renderedItems = items.map((item, index) => {

        const isExpanded = (index === expandedIndex);
        const handelClick = (nextIndex) => {
            setExpandedIndex((mostUpdatedIndex) => {
                if (mostUpdatedIndex === nextIndex) {
                    return -1;
                } else {
                    return nextIndex;
                }
            });
        };

        const icon = (
            <span className="text-2xl"> {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}</span>
        );

        return (
            <div className="" key={item.id}>
                <div
                    className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer"
                    onClick={() => { handelClick(index) }}>

                    {item.label}
                    {icon}

                </div>
                {isExpanded && <div className="border-b p-5">{item.content}</div>}
            </div>
        );
        // A && B = A if A is coerced to false else B
        // boolean is not "printed out"        

    });
    return (
        <div className="border-x border-t rounded">{renderedItems}</div>
    );
}

export default Accordion
