import React, { useState } from 'react';
import Button from '../../../../common/button/Button';

// Edit component
function Edit({ item, data, setData, closeModal }) {
  const { id, name, email, role } = item;
  const [nameState, setNameState] = useState(name);
  const [emailState, setEmailState] = useState(email);
  const [roleState, setRoleState] = useState(role);

  // Function to update the data with new values
  const updateHandler = () => {
    if (nameState.length && emailState.length && roleState.length) {
      const filtered = data.map((item) => {
        if (item.id === id) {
          item.name = nameState;
          item.email = emailState;
          item.role = roleState;
        }
        return item;
      });
      setData([...filtered]);
      closeModal();
    }
  };

  return (
    <div className='flex justify-center items-center bg-white rounded w-[300px] h-[400px]'>
      <div className='flex items-center justify-center flex-col gap-[5px] w-[95%] h-[90%]'>
        <h1 className='font-bold'>Name</h1>
        <input
          className='w-[100%] rounded border-black p-[5px] border-[1px]'
          type='text'
          value={nameState}
          onChange={(e) => setNameState(e.target.value)}
        />
        {nameState.length === 0 && (
          <p className='text-[11px] text-red-700'>Name can't be empty</p>
        )}

        <h1 className='font-bold'>Email</h1>
        <input
          className='w-[100%] rounded border-[1px] border-black p-[5px]'
          type='text'
          value={emailState}
          onChange={(e) => setEmailState(e.target.value)}
        />
        {emailState.length === 0 && (
          <p className='text-[11px] text-red-700'>Email can't be empty</p>
        )}

        <h1 className='font-bold'>Role</h1>
        <input
          className='w-[100%] border-black p-[5px] rounded border-[1px]'
          type='text'
          value={roleState}
          onChange={(e) => setRoleState(e.target.value)}
        />
        {roleState.length === 0 && (
          <p className='text-[11px] text-red-700'>Role can't be empty</p>
        )}

        <div className='flex flex-col gap-[10px] mt-[15px]'>
          <div role='button' onClick={() => updateHandler()}>
            <Button>Update</Button>
          </div>
          <div onClick={closeModal}>
            <Button>Cancel</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Edit;
