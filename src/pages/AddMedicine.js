import React, { useState } from 'react';
const medicineList = []; 
function AddMedicine() {
  const [name, setName] = useState('');
  const [code, setCode] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    medicineList.push({ name, code });
    alert('Medicine added successfully!');
    setName('');
    setCode('');
  };

  return (
    <div>
      <h2>Add Medicine</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Medicine Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        /><br />
        <input
          type="text"
          placeholder="Unique Code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          required
        /><br />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddMedicine;
