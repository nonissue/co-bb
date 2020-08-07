import React, { ReactNode } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { PageContent, PageWithHeader, TopNav, Button, Text } from 'bumbag';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>

    <PageWithHeader
      // alignX='center'

      header={
        <TopNav altitude='200' paddingX='major-3'>
          <TopNav.Section>
            <TopNav.Item href='https://bumbag.style'>
              {/* <Image src='/logo.png' height='44px' /> */}
              <Button
                fontWeight='800'
                size='large'
                palette='primary'
                variant='ghost'
              >
                Collate
              </Button>
            </TopNav.Item>
            <TopNav.Item href='#' fontWeight='300'>
              About
            </TopNav.Item>
            <TopNav.Item href='#'>Contact</TopNav.Item>
          </TopNav.Section>
          <TopNav.Section marginRight='major-2'>
            <TopNav.Item>
              <Button variant='ghost' palette='primary'>
                Sign up
              </Button>
            </TopNav.Item>
            <TopNav.Item>
              <Button palette='primary' variant='outlined'>
                Login
              </Button>
            </TopNav.Item>
          </TopNav.Section>
        </TopNav>
      }
      border='default'
      headerHeight='80px'
    >
      <PageContent>{children}</PageContent>
    </PageWithHeader>
  </div>
);

export default Layout;
