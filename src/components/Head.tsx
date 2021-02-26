import React from 'react';
import Head from 'next/head';

const HeadComponent = (props: { title?: string }) => {
  const title = props.title || 'Российская народная концептуальная программа';

  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta name="theme-color" content="#b10000" />
      <meta http-equiv="Cache-control" content="public" />

      <link rel="manifest" href="/manifest.json" />
      <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      <link rel="canonical" href="https://rnkp.org" />

      <meta name="description" content="Сайт партии РНКП - Российская народная концептуальная программа. Содержит описание партии РНКП, программу и планы. Название программы партии - 10 Пунктов партии РНКП." />
      <meta name="keywords" content="РНКП,Российская народная концептуальная программа,10 Пунктов партии РНКП" />
      <meta name="author" content="РНКП" />
      <title>РНКП | { title }</title>
    </Head>
  )
};

export default HeadComponent;
