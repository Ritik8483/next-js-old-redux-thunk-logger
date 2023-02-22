import { Provider } from 'react-redux';
import store from '../redux/store'

function MyApp({ Component, ...rest }:any) {
  return (
    <Provider store={store}>
      <Component {...rest} />
    </Provider>
  );
}

export default MyApp;