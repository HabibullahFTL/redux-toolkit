import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/store-hook';
import { fetchUsers } from '../store/slices/userSlice';

const UserView = () => {
  const { loading, users, error } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  return (
    <div>
      <h2 className="">List of users:</h2>
      {loading ? <div>Loading...</div> : null}
      {error ? <div>{error}</div> : null}
      <ul>
        {users?.map((user) => (
          <li key={user?.id}>{user?.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserView;
