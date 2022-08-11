import Image from 'next/image';

import { Box } from '@chakra-ui/react';

function Hero() {
  return (
    <>
<Box width='100%' height='100vh' m-0 p-0>
<Image src="/hero.jpg" width={2560} height={1440} alt="hero image" />
</Box>
</>
  )
}

export default Hero