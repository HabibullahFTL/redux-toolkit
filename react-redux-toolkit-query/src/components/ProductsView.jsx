import { useGetAllProductsQuery } from '../store/slices/apiSlice';

const ProductsView = () => {
  const { data, isLoading, isError, error } = useGetAllProductsQuery();
  return (
    <div>
      <h2 className="">List of All Products:</h2>
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

export default ProductsView;
