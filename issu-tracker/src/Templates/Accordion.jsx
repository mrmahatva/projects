import { InstagramLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons'
import { Container, Flex, IconButton, Link, Text } from '@radix-ui/themes'
import React from 'react'

export default function Footer() {
  return (
    <>


    </>
  )
}

// import { ReactNode } from 'react' { children }: { children: ReactNode }
// import { Box, Container, Stack, SimpleGrid, Text, VisuallyHidden, chakra, useColorModeValue, } from '@chakra-ui/react'
// import { FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa'
// import { AppStoreBadge } from '#/components/AppStoreBadge'
// import { PlayStoreBadge } from '#/components/PlayStoreBadge' { children, label }: { children: ReactNode label: string href: string}

const ListHeader = () => {
  return (<Text weight='medium' size='6' mb='1'> {children} </Text>)
}

const SocialButton = () => {
  return (
    <IconButton radius='full' size='2' href={href}> {children} </IconButton>
  )
}

export default function LargeWithAppLinksAndSocial() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container py='8'>
        <Grid columns={{ initial: 1, sm: 2, md: 4 }} spacing={8}>
          <Flex align='start'>
            <Text>Company</Text>
            <Link href={'#'}>About Us</Link>
            <Link href={'#'}>Blog</Link>
            <Link href={'#'}>Careers</Link>
            <Link href={'#'}>Contact Us</Link>
          </Flex>
          <Flex align='start'>
            <Text>Support</Text>
            <Link href={'#'}>Help Center</Link>
            <Link href={'#'}>Safety Center</Link>
            <Link href={'#'}>Community Guidelines</Link>
          </Flex>
          <Flex align='start'>
            <Text>Legal</Text>
            <Link href={'#'}>Cookies Policy</Link>
            <Link href={'#'}>Privacy Policy</Link>
            <Link href={'#'}>Terms of Service</Link>
            <Link href={'#'}>Law Enforcement</Link>
          </Flex>

          <Flex align='start'>
            <Text>Install App</Text>
            {/* <AppStoreBadge /> */}
            {/* <PlayStoreBadge /> */}
          </Flex>
        </Grid>
      </Container>

      <Box borderTopWidth={1} borderStyle={'solid'} borderColor={useColorModeValue('gray.200', 'gray.700')}>
        <Flex py='4' direction={{ base: 'column', md: 'row' }} gap='4' justify={{ md: 'space-between' }} align={{ md: 'center' }}>
          <Text>© 2022 Chakra Templates. All rights reserved</Text>
          <Flex direction={'row'} gap='2'>
            <SocialButton label={'Twitter'} href={'#'}><TwitterLogoIcon /></SocialButton>
            <SocialButton label={'LinkedIn'} href={'#'}><LinkedInLogoIcon /></SocialButton>
            <SocialButton label={'Instagram'} href={'#'}><InstagramLogoIcon /></SocialButton>
          </Flex>
        </Flex>
      </Box>
    </Box>
  )
}


// 'use client'
// import { ReactNode } from 'react'
// import { Box, Container, SimpleGrid, Stack, Text, useColorModeValue,} from '@chakra-ui/react'


// const ListHeader = ({ children }: { children: ReactNode }) => {
//   return (
//     <Text fontWeight={'500'} fontSize={'lg'} mb={2}> {children}</Text>
//   )
// }

export default function LargeWithLogoLeft() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <Grid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 1fr 1fr' }}
          gap='2'>
          <Flex gap='2'>
            <Box>
              <Logo color={useColorModeValue('gray.700', 'white')} />
            </Box>
            <Text size='2'>© 2022 Chakra Templates. All rights reserved</Text>
          </Flex>
          <Flex align='start'>
            <ListHeader>Product</ListHeader>

            {/* <Link href={'#'}>Overview</Link> */},

          </Flex>
          <Flex align='start'>
            <ListHeader>Company</ListHeader>
          </Flex>
          <Flex align='start'>
            <ListHeader>Support</ListHeader></Flex>
          <Flex align='start'>
            <ListHeader>Follow Us</ListHeader>,
          </Flex>
        </Grid>
      </Container>
    </Box>
  )
}
const links = [
  [{ text: 'Overview', href: '#' }, { text: 'Features', href: '#' }, { text: 'Tutorials', href: '#' }, { text: 'Pricing', href: '#' }, { text: 'Releases', href: '#' }],
  [{ text: 'Facebook', href: '#' }, { text: 'Twitter', href: '#' }, { text: 'Dribbble', href: '#' }, { text: 'Instagram', href: '#' }, { text: 'LinkedIn', href: '#' }],
  [{ text: 'Help Center', href: '#' }, { text: 'Terms of Service', href: '#' }, { text: 'Legal', href: '#' }, { text: 'Privacy Policy', href: '#' }, { text: 'Status', href: '#' },],
  [{ text: 'About', href: '#' }, { text: 'Press', href: '#' }, { text: 'Careers', href: '#' }, { text: 'Contact', href: '#' }, { text: 'Partners', href: '#' }]
]
