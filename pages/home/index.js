// pages/index.js
import Head from "next/head";
import Layout from '../../components/layout';
import useAppContext  from '../../utils/useAppContext'; // Import the context

export default function Home() {
  const { count, incrementCount } = useAppContext(); // Use the context
  return (
    <Layout>
      <div>
        <Head>
          <title>icloud|Home</title>
        </Head>
        <main>
          <div>
            <h1>
              lets bigin to develop
            </h1>
          </div>
        </main>
      </div>
    </Layout>
  );
}
