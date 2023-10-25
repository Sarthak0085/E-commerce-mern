import React from 'react'
import Footer from './Footer'
import Header from './Header'
import { Helmet } from 'react-helmet'

const Layout = ({children,description, keyword, author, title}) => {
  return (
      <>
          <Helmet>
              <meta charSet='utf-8' />
              <meta name='description' content={description} />
              <meta name='keywords' content={keyword} />
              <meta name='author' content={author} />
              <title>{title}</title>
          </Helmet>
          <Header/>
          <main className='static'>
              {children}
          </main>
          <Footer/>
      </>
  )
}

Layout.defaultProps = {
    title: "E-commerce app",
    description: "mern stack projects",
    keyword: "mern react node mongodb",
    author: "Sarthak",
}

export default Layout