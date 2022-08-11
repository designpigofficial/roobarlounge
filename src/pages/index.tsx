import * as React from 'react';

import {
  VStack,
} from '@chakra-ui/react';

import Container from '@/components/Container';
import Layout from '@/components/layout';

import Hero from '../components/Hero';

const HomePage = () => {
  return (
    <Layout>
      <Container as='main'>
        <VStack
          as='section'
          id='hero'
          justify='center'
          minHeight={{ base: 'calc(100vh - 7.5rem)', md: 'calc(100vh - 8rem)' }}
          spacing={0}
          bgColor='pink.900'
        >
          <Hero />
        </VStack>
        <VStack
          as='section'
          id='cta'
          justify='center'
          minHeight={{ base: 'calc(50vh - 7.5rem)', md: 'calc(100vh - 8rem)' }}
          spacing={6}
          bgColor='blue.900'

        >
          <h6>cta</h6>
        </VStack>
        <VStack
          as='section'
          id='club'
          justify='center'
          minHeight={{ base: 'calc(100vh - 7.5rem)', md: 'calc(100vh - 8rem)' }}
          spacing={6}
          bgColor='green.900'

        >
          <h6>the club</h6>
        </VStack>
        <VStack
          as='section'
          id='nightly'
          justify='center'
          minHeight={{ base: 'calc(100vh - 7.5rem)', md: 'calc(100vh - 8rem)' }}
          spacing={6}
          bgColor='yellow.900'

        >
          <h6>nightly specials</h6>
        </VStack>
        <VStack
          as='section'
          id='events'
          justify='center'
          minHeight={{ base: 'calc(50vh - 7.5rem)', md: 'calc(100vh - 8rem)' }}
          spacing={6}
          bgColor='pink.900'

        >
          <h6>events</h6>
        </VStack>
        <VStack
          as='section'
          id='bottle'
          justify='center'
          minHeight={{ base: 'calc(100vh - 7.5rem)', md: 'calc(100vh - 8rem)' }}
          spacing={6}
          bgColor='blue.900'

        >
          <h6>bottle service</h6>
        </VStack>
        <VStack
          as='section'
          id='forms'
          justify='center'
          minHeight={{ base: 'calc(100vh - 7.5rem)', md: 'calc(100vh - 8rem)' }}
          spacing={6}
          bgColor='green.900'

        >
          <h6>forms</h6>
        </VStack>
        <VStack
          as='section'
          id='testimonials'
          justify='center'
          minHeight={{ base: 'calc(100vh - 7.5rem)', md: 'calc(100vh - 8rem)' }}
          spacing={6}
          bgColor='yellow.900'

        >
          <h6>our friends</h6>
        </VStack>
      </Container>
    </Layout>
  );
};

export default HomePage;
