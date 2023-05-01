import { useState } from 'react';
import '../styles/calculator.css';

export default function Calculator() {
  const hookState = {
    total: 0,
  };

  const [state] = useState(hookState);

  return (
    <div className="myCalc">

      <div className="showCalc">
        {state.total}
      </div>
      <div className="keyboard-area">
        <button
          type="button"
          className="btn btn-zero"
        >
          0
        </button>
        <button
          type="button"
          className="btn btn-ac"
        >
          AC
        </button>
        <button
          type="button"
          className="btn btn-plus-minus"
        >
          +/-
        </button>
        <button
          type="button"
          className="btn btn-percent"
        >
          %
        </button>
        <button
          type="button"
          className="btn btn-divide"
        >
          /
        </button>
        <button
          type="button"
          className="btn btn-seven"
        >
          7
        </button>
        <button
          type="button"
          className="btn btn-eight"
        >
          8
        </button>
        <button
          type="button"
          className="btn btn-nine"
        >
          9
        </button>
        <button
          type="button"
          className="btn btn-times"
        >
          x
        </button>
        <button
          type="button"
          className="btn btn-four"
        >
          4
        </button>
        <button
          type="button"
          className="btn btn-five"
        >
          5
        </button>
        <button
          type="button"
          className="btn btn-six"
        >
          6
        </button>
        <button
          type="button"
          className="btn btn-minus"
        >
          -
        </button>
        <button
          type="button"
          className="btn btn-one"
        >
          1
        </button>
        <button
          type="button"
          className="btn btn-two"
        >
          2
        </button>
        <button
          type="button"
          className="btn btn-three"
        >
          3
        </button>
        <button
          type="button"
          className="btn btn-plus"
        >
          +
        </button>
        <button
          type="button"
          className="btn btn-dot"
        >
          .
        </button>
        <button
          type="button"
          className="btn btn-equal"
        >
          =
        </button>
      </div>
    </div>
  );
}
