// 'use client'

// import { Button, Flex, useColorMode } from '@chakra-ui/react'
// import { BsSun, BsMoonStarsFill } from 'react-icons/bs'

// export default function ColorModeToggle() {
//   const { colorMode, toggleColorMode } = useColorMode()
//   return (
//     /**
//      * Ideally, only the button component should be used (without Flex).
//      * Props compatible with <Button /> are supported.
//      */
//     <Flex h="100vh" justifyContent="center" alignItems="center">
//       <Button
//         aria-label="Toggle Color Mode"
//         onClick={toggleColorMode}
//         _focus={{ boxShadow: 'none' }}
//         w="fit-content">
//         {colorMode === 'light' ? <BsMoonStarsFill /> : <BsSun />}
//       </Button>
//     </Flex>
//   )
// }

// 'use client'

// import {
//   Popover,
//   PopoverTrigger,
//   PopoverContent,
//   PopoverBody,
//   PopoverArrow,
//   IconButton,
//   Button,
//   Stack,
//   Flex,
// } from '@chakra-ui/react'

// import { BsThreeDotsVertical, BsChatSquareQuote } from 'react-icons/bs'
// import { RiShutDownLine, RiRestartLine, RiFileShredLine } from 'react-icons/ri'

// export default function ServerSecondaryOptions() {
//   return (
//     /**
//      * You may move the Popover outside Flex.
//      */
//     <Flex justifyContent="center" mt={4}>
//       <Popover placement="bottom" isLazy>
//         <PopoverTrigger>
//           <IconButton
//             aria-label="More server options"
//             icon={<BsThreeDotsVertical />}
//             variant="solid"
//             w="fit-content"
//           />
//         </PopoverTrigger>
//         <PopoverContent w="fit-content" _focus={{ boxShadow: 'none' }}>
//           <PopoverArrow />
//           <PopoverBody>
//             <Stack>
//               <Button
//                 w="194px"
//                 variant="ghost"
//                 rightIcon={<BsChatSquareQuote />}
//                 justifyContent="space-between"
//                 fontWeight="normal"
//                 fontSize="sm">
//                 Request Access
//               </Button>
//               <Button
//                 w="194px"
//                 variant="ghost"
//                 rightIcon={<RiFileShredLine />}
//                 justifyContent="space-between"
//                 fontWeight="normal"
//                 colorScheme="red"
//                 fontSize="sm">
//                 Purge Redis Cache
//               </Button>
//               <Button
//                 w="194px"
//                 variant="ghost"
//                 rightIcon={<RiRestartLine />}
//                 justifyContent="space-between"
//                 fontWeight="normal"
//                 colorScheme="red"
//                 fontSize="sm">
//                 Restart Server
//               </Button>
//               <Button
//                 w="194px"
//                 variant="ghost"
//                 rightIcon={<RiShutDownLine />}
//                 justifyContent="space-between"
//                 fontWeight="normal"
//                 colorScheme="red"
//                 fontSize="sm">
//                 Disable Server
//               </Button>
//             </Stack>
//           </PopoverBody>
//         </PopoverContent>
//       </Popover>
//     </Flex>
//   )
// }

// 'use client'

// import { FcGoogle } from 'react-icons/fc'
// import { FaFacebook } from 'react-icons/fa'
// import { SiLinkedin, SiMessenger } from 'react-icons/si'
// import { Box, Button, Center, Stack, Text } from '@chakra-ui/react'

// export default function All() {
//   return (
//     <Center p={8}>
//       <Flex spacing={2} align={'center'} maxW={'md'} width='100%'>
//         <Button width='100%' colorScheme={'facebook'} leftIcon={<FaFacebook />}>
//           <Center>
//             <Text>Continue with Facebook</Text>
//           </Center>
//         </Button>
//         <Button width='100%' variant={'outline'} leftIcon={<FcGoogle />}>
//           <Center>
//             <Text>Sign in with Google</Text>
//           </Center>
//         </Button>
//         <Button width='100%' colorScheme={'messenger'} leftIcon={<SiLinkedin />}>
//           <Center>
//             <Text>Send to Linkedin</Text>
//           </Center>
//         </Button>
//         <Button width='100%' colorScheme={'messenger'} leftIcon={<SiMessenger />}>
//           <Center>
//             <Text>Send to Messenger</Text>
//           </Center>
//         </Button>
//       </Flex>
//     </Center>
//   )
// }

// 'use client'

// import { Box, Heading, Text } from '@chakra-ui/react'
// import { InfoIcon } from '@chakra-ui/icons'

// export default function Info() {
//   return (
//     <Box textAlign="center" py={10} px={6}>
//       <InfoIcon boxSize={'50px'} color={'blue.500'} />
//       <Heading as="h2" size="xl" mt={6} mb={2}>
//         This is the headline
//       </Heading>
//       <Text color={'gray.500'}>
//         Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
//         tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
//       </Text>
//     </Box>
//   )
// }
// 'use client'

// import { Box, Heading, Text, Button } from '@chakra-ui/react'

// export default function NotFound() {
//   return (
//     <Box textAlign="center" py={10} px={6}>
//       <Heading
//         display="inline-block"
//         as="h2"
//         size="2xl"
//         bgGradient="linear(to-r, teal.400, teal.600)"
//         backgroundClip="text">
//         404
//       </Heading>
//       <Text fontSize="18px" mt={3} mb={2}>
//         Page Not Found
//       </Text>
//       <Text color={'gray.500'} mb={6}>
//         The page you&apos;re looking for does not seem to exist
//       </Text>

//       <Button
//         colorScheme="teal"
//         bgGradient="linear(to-r, teal.400, teal.500, teal.600)"
//         color="white"
//         variant="solid">
//         Go to Home
//       </Button>
//     </Box>
//   )
// }

// 'use client'

// import {
//   Box,
//   Flex,
//   Avatar,
//   HStack,
//   Text,
//   IconButton,
//   Button,
//   Menu,
//   MenuButton,
//   MenuList,
//   MenuItem,
//   MenuDivider,
//   useDisclosure,
//   useColorModeValue,
//   Stack,
// } from '@chakra-ui/react'
// import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'

// interface Props {
//   children: React.ReactNode
// }

// const Links = ['Dashboard', 'Projects', 'Team']

// const NavLink = (props: Props) => {
//   const { children } = props

//   return (
//     <Box
//       as="a"
//       px={2}
//       py={1}
//       rounded={'md'}
//       _hover={{
//         textDecoration: 'none',
//         bg: useColorModeValue('gray.200', 'gray.700'),
//       }}
//       href={'#'}>
//       {children}
//     </Box>
//   )
// }

// export default function Simple() {
//   const { isOpen, onOpen, onClose } = useDisclosure()

//   return (
//     <>
//       <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
//         <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
//           <IconButton
//             size={'md'}
//             icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
//             aria-label={'Open Menu'}
//             display={{ md: 'none' }}
//             onClick={isOpen ? onClose : onOpen}
//           />
//           <HStack spacing={8} alignItems={'center'}>
//             <Box>Logo</Box>
//             <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
//               {Links.map((link) => (
//                 <NavLink key={link}>{link}</NavLink>
//               ))}
//             </HStack>
//           </HStack>
//           <Flex alignItems={'center'}>
//             <Menu>
//               <MenuButton
//                 as={Button}
//                 rounded={'full'}
//                 variant={'link'}
//                 cursor={'pointer'}
//                 minW={0}>
//                 <Avatar
//                   size={'sm'}
//                   src={
//                     'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
//                   }
//                 />
//               </MenuButton>
//               <MenuList>
//                 <MenuItem>Link 1</MenuItem>
//                 <MenuItem>Link 2</MenuItem>
//                 <MenuDivider />
//                 <MenuItem>Link 3</MenuItem>
//               </MenuList>
//             </Menu>
//           </Flex>
//         </Flex>

//         {isOpen ? (
//           <Box pb={4} display={{ md: 'none' }}>
//             <Stack as={'nav'} spacing={4}>
//               {Links.map((link) => (
//                 <NavLink key={link}>{link}</NavLink>
//               ))}
//             </Stack>
//           </Box>
//         ) : null}
//       </Box>

//       <Box p={4}>Main Content Here</Box>
//     </>
//   )
// }

'use client'

import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react'
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons'

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Box>
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}>
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Text
            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
            fontFamily={'heading'}
            color={useColorModeValue('gray.800', 'white')}>
            Logo
          </Text>

          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}>
          <Button as={'a'} fontSize={'sm'} fontWeight={400} variant={'link'} href={'#'}>
            Sign In
          </Button>
          <Button
            as={'a'}
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize={'sm'}
            fontWeight={600}
            color={'white'}
            bg={'pink.400'}
            href={'#'}
            _hover={{
              bg: 'pink.300',
            }}>
            Sign Up
          </Button>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  )
}

const DesktopNav = () => {
  const linkColor = useColorModeValue('gray.600', 'gray.200')
  const linkHoverColor = useColorModeValue('gray.800', 'white')
  const popoverContentBgColor = useColorModeValue('white', 'gray.800')

  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Box
                as="a"
                p={2}
                href={navItem.href ?? '#'}
                fontSize={'sm'}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                }}>
                {navItem.label}
              </Box>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                minW={'sm'}>
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  )
}

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Box
      as="a"
      href={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'pink.400' }}
            fontWeight={500}>
            {label}
          </Text>
          <Text fontSize={'sm'}>{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}>
          <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Box>
  )
}

const MobileNav = () => {
  return (
    <Stack bg={useColorModeValue('white', 'gray.800')} p={4} display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  )
}

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Box
        py={2}
        as="a"
        href={href ?? '#'}
        justifyContent="space-between"
        alignItems="center"
        _hover={{
          textDecoration: 'none',
        }}>
        <Text fontWeight={600} color={useColorModeValue('gray.600', 'gray.200')}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Box>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}>
          {children &&
            children.map((child) => (
              <Box as="a" key={child.label} py={2} href={child.href}>
                {child.label}
              </Box>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  )
}

interface NavItem {
  label: string
  subLabel?: string
  children?: Array<NavItem>
  href?: string
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Inspiration',
    children: [
      {
        label: 'Explore Design Work',
        subLabel: 'Trending Design to inspire you',
        href: '#',
      },
      {
        label: 'New & Noteworthy',
        subLabel: 'Up-and-coming Designers',
        href: '#',
      },
    ],
  },
  {
    label: 'Find Work',
    children: [
      {
        label: 'Job Board',
        subLabel: 'Find your dream design job',
        href: '#',
      },
      {
        label: 'Freelance Projects',
        subLabel: 'An exclusive list for contract work',
        href: '#',
      },
    ],
  },
  {
    label: 'Learn Design',
    href: '#',
  },
  {
    label: 'Hire Designers',
    href: '#',
  },
]

'use client'

import {
  Box,
  Flex,
  Avatar,
  Text,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

interface Props {
  children: React.ReactNode
}

const NavLink = (props: Props) => {
  const { children } = props

  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
      href={'#'}>
      {children}
    </Box>
  )
}

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode()
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box>Logo</Box>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    size={'sm'}
                    src={'https://avatars.dicebear.com/api/male/username.svg'}
                  />
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      size={'2xl'}
                      src={'https://avatars.dicebear.com/api/male/username.svg'}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Username</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>Your Servers</MenuItem>
                  <MenuItem>Account Settings</MenuItem>
                  <MenuItem>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  )
}
