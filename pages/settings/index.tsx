import * as React from 'react'
import dynamic from 'next/dynamic'
import {
  NextPage,
  GetServerSideProps,
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from 'next'
import Head from 'next/head'

import {ParsedUrlQuery} from 'querystring'

import {parseCookies} from '@utils/parseCookies'

import Container from '@components/containers/Container/Container'
import Menu from '@components/navigation/Menu/Menu'
import Panel from '@components/navigation/Tablist/Panel'

import EditProfile from '@components/features/Edit/Profile'
const EditUsername = dynamic(() => import('@components/features/Edit/Username'))
const EditEmail = dynamic(() => import('@components/features/Edit/Email'))
const EditPassword = dynamic(() => import('@components/features/Edit/Password'))

const Settings: NextPage = ({
  token,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [selectedTab, setSelectedTab] = React.useState<number>(0)
  return (
    <Container>
      <Head>
        <title>Settings</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='h-92v container'>
        <section className='h-full p-12'>
          <div className='h-full grid grid-cols-3 divide-x divide-black-500'>
            <Menu selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
            <div className='w-200 h-auto border-2 border-solid rounded'>
              <EditProfile
                token={token}
                isSelectedTab={Boolean(selectedTab === 0)}
              />
              <EditUsername
                token={token}
                isSelectedTab={Boolean(selectedTab === 1)}
              />
              <EditEmail
                token={token}
                isSelectedTab={Boolean(selectedTab === 2)}
              />
              <EditPassword
                token={token}
                isSelectedTab={Boolean(selectedTab === 3)}
              />
              <Panel index={4} isSelectedTab={Boolean(selectedTab === 4)}>
                <span>Notifications</span>
              </Panel>
              <Panel index={5} isSelectedTab={Boolean(selectedTab === 5)}>
                <span>Security Logs</span>
              </Panel>
            </div>
          </div>
        </section>
      </main>
    </Container>
  )
}

export default Settings

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext<ParsedUrlQuery>
) => {
  //* Get the user's session based on the request
  const {session: token} = parseCookies(context.req)

  //* If no user, redirect to login
  if (!token) {
    return {
      props: {},
      redirect: {
        destination: '/signin',
        permanent: false,
      },
    }
  }

  //* return user token
  return {
    props: {
      token,
    },
  }
}
