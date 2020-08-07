import Layout from '../components/Layout';
import { PageContent, Heading, Paragraph } from 'bumbag';
import Test from '../components/Test';

const IndexPage = () => (
  <Layout title='Home | Next.js + TypeScript Example'>
    <PageContent>
      <Heading>Bumbag's Basic Next.js Example</Heading>
      <Paragraph>Welcome to your new Bumbag Next.js site.</Paragraph>
      <Paragraph>Now go build something great with your Bumbag!</Paragraph>

      <Test />
    </PageContent>
  </Layout>
);

export default IndexPage;
