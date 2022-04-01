import React from 'react';
import ReactDOM from 'react-dom';

export default function Car() {
  return <h2>I am a Car!</h2>;
}

export default function Garage() {
  return (
    <>
	    <h1>Who lives in my Garage?</h1>
	    <Car />
    </>
  );
}

ReactDOM.render(<Garage />, document.getElementById('root'));
import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by ddddediting <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}