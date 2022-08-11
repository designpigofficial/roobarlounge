import { useRouter } from 'next/router';

import { Box, Flex, HStack, useColorModeValue as mode } from '@chakra-ui/react';
import { IconType } from 'react-icons';
import { BiMessageRoundedDetail } from 'react-icons/bi'
import { GiBarStool, GiWineBottle, GiPriceTag } from 'react-icons/gi';
import { MdEventNote, MdOutlineEventAvailable } from 'react-icons/md';

import ColorModeSwitcher from '@/components/ColorModeSwitcher';
import Container from '@/components/Container';
import MobileNav from '@/components/layout/MobileNav';
import NavLink from '@/components/layout/NavLink';
import Logo from '@/components/Logo';

export type NavLinksType = {
  label: string;
  href: string;
  icon: IconType;
}[];

const links: NavLinksType = [
  { label: 'The Club', href: '#club', icon: GiBarStool },
  { label: 'Events', href: '#events', icon: MdEventNote },
  { label: 'Bottle Service', href: '#bottle', icon: GiWineBottle },
  { label: 'Nightly Specials', href: '#nightly', icon: GiPriceTag },
  { label: 'Book Event', href: '#forms', icon: MdOutlineEventAvailable },
  { label: 'Contact Us', href: '#forms', icon: BiMessageRoundedDetail },
];

const NavBar = () => {
  const { asPath } = useRouter();

  return (
    <Box
      as='header'
      position='sticky'
      top={0}
      zIndex={5}
      width='full'
      bg={mode('rgba(255, 255, 255, 0.8)', 'rgba(23, 25, 35, 0.8)')}
      style={{ backdropFilter: 'blur(8px)' }}
    >
      <Container
        as='nav'
        display='flex'
        alignItems='center'
        justifyContent='space-between'
        w='100%'
        minH={{ base: '3.5rem', md: '4rem' }}
      >
        <HStack spacing={8}>
          <Logo />
          <HStack display={{ base: 'none', md: 'flex' }} spacing={4}>
            {links.map((link, idx) => (
              <NavLink.Desktop
                key={idx}
                href={link.href}
                active={
                  asPath === link.href ||
                  (asPath.includes('projects') && link.href === '/projects')
                }
              >
                {link.label}
              </NavLink.Desktop>
            ))}
          </HStack>
        </HStack>
        <Flex align='center'>
          <ColorModeSwitcher
            aria-label={`Switch to ${mode('dark', 'light')} mode`}
            display={{ base: 'none', md: 'flex' }}
          />
          <Box>
            <MobileNav links={links} />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default NavBar;
