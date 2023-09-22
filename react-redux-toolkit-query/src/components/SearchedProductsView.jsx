import { useState } from 'react';
import { useSearchProductsQuery } from '../store/slices/apiSlice';

const SearchedProductsView = () => {
  const [queryString, setQueryString] = useState('iphone');
  const [value, setValue] = useState('iphone');
  const { data, isLoading, isError, error } =
    useSearchProductsQuery(queryString);
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={() => setQueryString(value)}>Search</button>
      <h2 className="">Searched Products:</h2>
      {isLoading ? <div>Loading...</div> : null}
      {isError ? <div>{error?.message}</div> : null}
      <ul>
        {data?.products?.map((product) => (
          <li key={product?.id}>{product?.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchedProductsView;
