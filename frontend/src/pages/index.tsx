import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { ButtonLink } from "../components/ButtonLink";
import PageContainer from "../components/page/PageContainer";

const Home: NextPage = () => {
  return (
    <PageContainer>
      <Head>
        <title>Sangham - Home</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='flex justify-center min-h-screen pb-24 items-center'>
        <div className='mx-auto max-w-screen-xl px-8 gap-8 flex flex-col-reverse md:flex-row'>
          <div className='flex flex-col gap-4 w-1/2 justify-center'>
            <div>
              <h1 className='font-rubik font-black text-7xl'>Sangham</h1>
              <p className='font-rubik text-lg'>
                Sangham{"'"}s goal is to lower the barrier of entry for volinteer work by easing
                the process of finding volinteer opportunities near you.
              </p>
            </div>
            <div>
              <ButtonLink href='/event' size='large' color='primary'>
                Browse Opportunities
              </ButtonLink>
            </div>
          </div>

          <div className='w-1/2'>
            <Image width={640} height={427} src='/img1.jpg' alt='' />
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default Home;
