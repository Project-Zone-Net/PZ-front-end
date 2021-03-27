import {NextPage, GetServerSideProps, GetServerSidePropsContext} from 'next'
import Head from 'next/head'
import {ParsedUrlQuery} from 'querystring'

import {parseCookies} from '@utils/parseCookies'
import Navbar from '@components/Navbar'

const Collabs: NextPage = () => {
  return (
    <div className='min-h-screen'>
      <Head>
        <title>Collaborators</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
    </div>
  )
}

export default Collabs

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext<ParsedUrlQuery>
) => {
  //* Get the user's session based on the request
  const {session: token} = parseCookies(context.req)

  if (!token) {
    //* If no user, redirect to login
    return {
      props: {},
      redirect: {
        destination: '/signin',
        permanent: false,
      },
    }
  }

  //* If there is a user, return the current session
  return {props: {}}
}