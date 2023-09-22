import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ordered, restocked } from '../store/slices/icecreamSlice';

const IceCreamView = () => {
  const numOfIceCream = useSelector((state) => state.iceCream.numOfIceCream);
  const dispatch = useDispatch();

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
            onChange={(e) => setValue(e.target.value)}
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
