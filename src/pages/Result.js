// src/pages/Result.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import { findMedicineByCode, getAllMedicines } from '../data/medicineStore';

function Result() {
  const location = useLocation();
  const { code } = location.state || {};

  const found = findMedicineByCode(code);
  const totalMedicines = getAllMedicines().length;

  return (
    <div>
      <h2>Verification Result</h2>
      <p><strong>Searched Code:</strong> {code || 'No code provided'}</p>
      {found ? (
        <p style={{ color: 'green' }}>✅ Genuine Medicine: {found.name}</p>
      ) : (
        <p style={{ color: 'red' }}>❌ Counterfeit or Not Found</p>
      )}
      
      <p><small>Total medicines in database: {totalMedicines}</small></p>
    </div>
  );
}

export default Result;