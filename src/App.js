import axios from 'axios';
import { useEffect } from 'react';
import { ReactQueryDevtools } from 'react-query/devtools';
import useStore from 'store';

const getMeFn = async () => {
  try {
    let config = {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    }
    const result = await axios.get('http://localhost:5004/api/auth/me', config)
    return result.data;
  } catch (error) {
    return error
  }
}



function App({ children }) {
  const user = useStore(state => state.authUser);
  const setUser = useStore(state => state.setAuthUser);
  const isLoading = useStore(state => state.requestLoading);
  const setLoading = useStore(state => state.setRequestLoading);
  useEffect(() => {
    setLoading(false);
    getMeFn().then(data => {
      setUser(data);
      setLoading(false)
    }).catch(err => console.log(err));
  }, [])

  console.log('user' , user);
  const isAuthenticated = !!localStorage.getItem('token')
  // const isAuthenticated = token;
  // console.log(isAuthenticated);

  return children({ isLoading , isAuthenticated })
}

export default App;
