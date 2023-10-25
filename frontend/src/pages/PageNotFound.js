import React from 'react'
import Layout from '../components/Layout/Layout'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
      <Layout>
          <div className='flex flex-col items-center justify-center my-20'>
              <h1 className='my-3 font-bold text-8xl'>404</h1>
              <h2 className='my-5 text-4xl'>Oops! Page Not Found</h2>
              <Link to="/">
                  <button className='border mt-2 border-solid border-black p-2 text-2xl hover:bg-gray-400 font-semibold'>Go Back</button>
              </Link>
         </div>
          
    </Layout>
  )
}

export default PageNotFound