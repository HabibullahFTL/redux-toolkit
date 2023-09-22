import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../store/slices/userSlice';

const UserView = () => {
  const { loading, users, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();
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
