import { useState } from 'react';
import './selector.css';
const Selector = ({ setColumsDisplay }) => {
  const [checked1, setChecked1] = useState(true);
  const [checked2, setChecked2] = useState(true);
  const handleChange = (e, col) => {
    const val = e.target.checked;
    if (val) {
      setColumsDisplay((cols) => {
        return [...cols, col];
      });
    } else {
      setColumsDisplay((cols) => {
        return cols.filter((c) => c !== col);
      });
    }
  };
  return (
    <div className="select">
      <div className="switch rating">
        <label>
          <h6>Rating</h6>
          <input
            type="checkbox"
            onChange={(e) => {
              handleChange(e, 'average_rating');
              setChecked1(e.target.checked);
            }}
            checked={checked1}
          />
          <span className="lever"></span>
        </label>
      </div>
      <div className="switch price">
        <label>
          <h6>Price</h6>
          <input
            type="checkbox"
            onChange={(e) => {
              handleChange(e, 'price');
              setChecked2(e.target.checked);
            }}
            checked={checked2}
          />
          <span className="lever"></span>
        </label>
      </div>
    </div>
  );
};

export default Selector;
