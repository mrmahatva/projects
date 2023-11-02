'use client'
import { ArrowLeftIcon, AvatarIcon, ChatBubbleIcon, CheckCircledIcon, CheckIcon, CircleIcon, Cross2Icon, CrossCircledIcon, DotsVerticalIcon, ExclamationTriangleIcon, ExternalLinkIcon, GitHubLogoIcon, HamburgerMenuIcon, InfoCircledIcon, InstagramLogoIcon, LinkedInLogoIcon, MoonIcon, StarFilledIcon, StarIcon, SunIcon, TwitterLogoIcon } from '@radix-ui/react-icons'
import { Avatar, Badge, Box, Button, Callout, Card, Checkbox, DropdownMenu, Flex, Heading, IconButton, Inset, Link, Popover, Separator, Tabs, Text, TextArea, } from '@radix-ui/themes'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer'
import { CodeBlock, a11yDark } from 'react-code-blocks'
import Image from 'next/image'
import img from '../../utils/vercel.svg'
import { useDisclosure } from '@chakra-ui/hooks'


export default function page() {
  const Links = ['Dashboard', 'Projects', 'Team']


  const { isOpen, onOpen, onClose } = useDisclosure()


  const code = `export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body className={inter.className}>
          <Theme appearance="dark" accentColor="gray" grayColor="slate" scaling="100%">
            {children}
            {/* <ThemePanel /> */}
          </Theme>
        </body>
      </html>
    )
  }`

  const colorMode = 'light'
  return (
    <>
      <Flex pt='4' m='5' gap='4' direction='column'>
        <Tabs.Content value='7'>
          <Box width='100%'>
            <Card size={'4'} mt='4'>
              <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                  <Box>Logo</Box>

                  <Flex alignItems={'center'}>
                    <Flex direction={'row'} gap={7}>
                      <Button onClick={toggleColorMode}> {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}</Button>

                      <Flex>
                        <Button> <Avatar size={'2'} fallback={<AvatarIcon />} /> </Button>
                        {/* <MenuList alignItems={'center'}>
                  <br /> <Avatar size={'2'} fallback={<AvatarIcon />}/><br /><p>Username</p><br />
                  <MenuDivider /> <MenuItem>Your Servers</MenuItem> <MenuItem>Account Settings</MenuItem> <MenuItem>Logout</MenuItem>
                </MenuList> */}
                      </Flex>
                    </Flex>
                  </Flex>
                </Flex>
              </Box>
            </Card>
          </Box>
        </Tabs.Content>
      </Flex >
    </>
  )
}
