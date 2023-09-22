import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/store-hook';
import { ordered, restocked } from '../store/slices/cakeSlice';

const CakeView = () => {
  const numOfCake = useAppSelector((state) => state.cake.numOfCake);
  const dispatch = useAppDispatch();

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
            onChange={(e) => setValue(+(e.target.value || 1))}
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
