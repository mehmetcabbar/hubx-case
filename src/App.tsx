import { Provider } from 'react-redux';
import { store } from './redux/store';
import Home from './component/home/Home';

export function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}
