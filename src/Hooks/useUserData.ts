import { useDispatch } from 'react-redux';
import axios from 'axios';
import { setData, setLoading } from '../redux/reducers/UserSlice';

export const useUserData = () => {
  const dipatch = useDispatch();
  const getUserData = async () => {
    try {
      dipatch(setLoading(true));
      const res = await axios.get('https://jsonplaceholder.typicode.com/users');
      dipatch(setLoading(false));
      dipatch(setData(res.data));
      console.log(res);
    } catch (error) {
      dipatch(setLoading(false));
    }
  };

  return { getUserData };
};
