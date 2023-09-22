import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ordered, restocked } from '../store/slices/cakeSlice';

const CakeView = () => {
  const numOfCake = useSelector((state) => state.cake.numOfCake);
  const dispatch = useDispatch();

  const [value, setValue] = useState(1);
  return (
    <div>
      <div className="">Number of cakes - {numOfCake}</div>
      <div className="">
        <button onClick={() => dispatch(ordered())}>Order Cake</button>
        <div className="">
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button onClick={() => dispatch(restocked(+value))}>
            Restock Cake
          </button>
        </div>
      </div>
    </div>
  );
};

export default CakeView;
