import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/Seo'

export default function NotFoundPage() {
  return (
    <Layout>
      <SEO pageTitle="404" />
      <h1>Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  )
}
