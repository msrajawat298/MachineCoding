"use client";
import React, { useState } from 'react';

const DropDown = ({ isMulitpleSelect, name, items = {}, Label }) => {
  const [search, setSearch] = useState('');

  const searchItems = (item) => {
    setSearch(item);
  };

  // Ensure items is an object before trying to get keys
  const safeItems = items || {};

  const filteredItems = Object.keys(safeItems).filter((key) => {
    const itemLabel = safeItems[key];
    return itemLabel.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="p-4 border rounded">
      <label className="form-label fw-bold">{Label}</label>
      <input
        type="text"
        className='form-control mt-1 mb-3'
        placeholder='Search...'
        onChange={(e) => searchItems(e.target.value)}
      />
      <select className='form-control' multiple={isMulitpleSelect} name={name} style={{ minHeight: isMulitpleSelect ? '100px' : 'auto' }}>
        {filteredItems.map((key) => {
          return <option key={key} value={key}>{safeItems[key]}</option>
        })}
      </select>
    </div>
  );
};

export default function DropDownDemo() {
  const countries = {
    "us": "United States",
    "cn": "Canada",
    "gb": "United Kingdom",
    "de": "Germany",
    "in": "India",
    "jp": "Japan",
    "fr": "France",
    "au": "Australia"
  };

  return (
    <div className="container">
      <h3>Dropdown Component</h3>
      <p className="text-secondary mb-4">A reusable dropdown component with search functionality.</p>

      <div className="row">
        <div className="col-md-6 mb-4">
          <h5>Single Select</h5>
          <DropDown
            items={countries}
            Label="Select Country"
            name="country"
            isMulitpleSelect={false}
          />
        </div>

        <div className="col-md-6 mb-4">
          <h5>Multiple Select</h5>
          <DropDown
            items={countries}
            Label="Select Countries (Hold Ctrl/Cmd)"
            name="countries"
            isMulitpleSelect={true}
          />
        </div>
      </div>
    </div>
  );
}