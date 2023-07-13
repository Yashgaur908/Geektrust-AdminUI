import React from 'react';

function PaginationItem({ onClickHandler, active, children }) {
    // Render a div element that represents a pagination item
    return (
        <div
            role='button' // Indicate that the div serves as a button
            onClick={onClickHandler} // Attach the onClickHandler function to handle click events
            className={`flex mx-[3px] items-center justify-center rounded-full w-[28px] h-[28px] ${active === true ? 'bg-red-500 text-[#fff]' : 'hover:bg-black border-[1px] hover:text-white border-black text-black'}`}
            // Apply dynamic classNames based on the active prop value to style the pagination item accordingly
        >
            {children} {/* Render the content of the pagination item, typically a page number */}
        </div>
    );
}

export default PaginationItem;
