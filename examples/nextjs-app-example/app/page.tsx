import {
  MyComponent
} from './components';
import Head from 'next/head';


const Home = () => {
 
  return (
    <>
      <Head>
        <title> Page  Components</title>
      </Head>
      <MyComponent />
      </>
  );
};

export default Home;
