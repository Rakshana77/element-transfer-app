
import React, { useState } from 'react';

const ElementTransfer = () => {
  const [bucket1, setBucket1] = useState(['Item 1', 'Item 2', 'Item 3', 'Item 5']);
  const [bucket2, setBucket2] = useState(['Item 4', 'Item 6']);

  const handleAdd = (item) => {
    setBucket1(bucket1.filter((i) => i !== item));
    setBucket2([...bucket2, item]);
  };

  const handleRemove = (item) => {
    setBucket2(bucket2.filter((i) => i !== item));
    setBucket1([...bucket1, item]);
  };

  const handleAddAll = () => {
    setBucket2([...bucket2, ...bucket1]);
    setBucket1([]);
  };

  const handleRemoveAll = () => {
    setBucket1([...bucket1, ...bucket2]);
    setBucket2([]);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '2rem' }}>
      {/* Bucket 1 */}
      <div>
        <h3>Bucket 1</h3>
        <ul>
          {bucket1.map((item) => (
            <li key={item}>
              {item}{' '}
              <button onClick={() => handleAdd(item)}>Add</button>
            </li>
          ))}
        </ul>
        <button onClick={handleAddAll}>Add All</button>
      </div>

      {/* Bucket 2 */}
      <div>
        <h3>Bucket 2</h3>
        <ul>
          {bucket2.map((item) => (
            <li key={item}>
              {item}{' '}
              <button onClick={() => handleRemove(item)}>Remove</button>
            </li>
          ))}
        </ul>
        <button onClick={handleRemoveAll}>Remove All</button>
      </div>
    </div>
  );
};

export default ElementTransfer;
