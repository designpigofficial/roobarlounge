import { Text } from '@chakra-ui/react';

import Container from '@/components/Container';

const Footer = () => {
  return (
    <Container
      as='footer'
      display='flex'
      flexDirection='column'
      alignItems='center'
      justifyContent='center'
      w='100%'
      minH='3rem'
    >
      <Text fontSize='sm' textAlign='center'>
        © Roo Bar Lounge, Denver {new Date().getFullYear()}
      </Text>
      <Text fontSize='xs' textAlign='center' color='pink'>
        site design by © Abner Development {new Date().getFullYear()}
      </Text>
    </Container>
  );
};

export default Footer;
