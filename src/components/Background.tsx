import React from 'react';
import { useRouter } from 'next/router';

const Background = () => {
  const router = useRouter();
  return <div className={ router.pathname === '/' ? 'bg' : 'bg blur' }></div>
};

export default Background;
