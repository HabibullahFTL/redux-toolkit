import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/store-hook';
import { ordered, restocked } from '../store/slices/icecreamSlice';

const IceCreamView = () => {
  const numOfIceCream = useAppSelector((state) => state.iceCream.numOfIceCream);
  const dispatch = useAppDispatch();

  const [value, setValue] = useState(1);
  return (
    <div>
      <div className="">Number of Ice Cream - {numOfIceCream}</div>
      <div className="">
        <button onClick={() => dispatch(ordered())}>Order Ice Cream</button>
        <div className="">
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(+(e.target.value || 1))}
          />
          <button onClick={() => dispatch(restocked(+value))}>
            Restock Ice Cream
          </button>
        </div>
      </div>
    </div>
  );
};

export default IceCreamView;
