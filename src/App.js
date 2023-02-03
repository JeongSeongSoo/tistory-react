import { useAxiosGet } from './axios/axios';

const App = () => {
  const data = useAxiosGet('https://codingapple1.github.io/shop/data2.json', {}, {});
  return <div>{JSON.stringify(data)}</div>;
};

export default App;
