import React from 'react';
import { Link } from 'react-router-dom';

export default function PageNotFound() {
  return (
    <div>

    <section className='content'>
    <h1>Sorry Page not Found</h1>
    <h1>Click <Link to='/about-us'>Go to Home</Link></h1>

    </section>
    </div>
  )
}
