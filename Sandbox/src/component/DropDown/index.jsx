"use client";
import React, {useState} from 'react';

const DropDown = ({isMulitpleSelect, name, items, Label}) => {
  const [search, setSearch] = useState('');

  const searchItems = (item) => {
    setSearch(item);
  };

  const filteredItems = Object.keys(items).filter((key) => {
    return items[key].toLowerCase().includes(search.toLowerCase());
  });
  return (
        <>
          <label>{Label} </label>
          <input type="text" className='form-control mt-1 mb-3' placeholder='Search From input' 
            onChange={(e) => searchItems(e.target.value)}
          />
          <select className='form-control' multiple={isMulitpleSelect} name={name}>
            {filteredItems.map((key) => {
              return <option key={key} value={key}>{items[key]}</option>
            })}
          </select>
    </>
  );

};

export default DropDown;