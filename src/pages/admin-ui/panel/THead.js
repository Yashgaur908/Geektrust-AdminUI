import React, { useState } from 'react'

/**
 * THead component to render the table header.
 *
 * @returns {JSX.Element} - The rendered THead component.
 */
function THead() {
    const [checked, setChecked] = useState(false);

    /**
     * Event handler for selecting/deselecting all checkboxes.
     *
     * @param {Object} e - The event object.
     */
    const selectAllHandler = (e) => {
        let checkboxes = document.querySelectorAll('.tRow-checkbox');

        if (!e.target.checked) {
            // Deselect all checkboxes and update background color
            checkboxes.forEach((checkbox) => {
                checkbox.children[0].checked = false;
                checkbox.parentElement.style.background = '#fff';
            });
        } else {
            // Select all checkboxes and update background color
            checkboxes.forEach((checkbox) => {
                checkbox.children[0].checked = true;
                checkbox.parentElement.style.background = '#e0e0e0';
            });
        }

        setChecked(e.target.value);
    };

    return (
        <thead>
            <tr className='admin-table-row'>
                <th className='admin-table-heading tHead-checkbox '>
                    <input id='checkBoxHead' className='checkbox-custom' type="checkbox" value={checked} onChange={selectAllHandler} />
                </th>
                <th className='admin-table-heading'>ID</th>
                <th className='admin-table-heading'>Name</th>
                <th className='admin-table-heading'>Email</th>
                <th className='admin-table-heading'>Role</th>
                <th className='admin-table-heading'>Action</th>
            </tr>
        </thead>
    )
}

export default THead;
