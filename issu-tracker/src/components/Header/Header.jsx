import { Box, Flex, IconButton, Link } from '@radix-ui/themes'
import { Logo } from '../../utils/Logo'
import { DiscordLogoIcon, GitHubLogoIcon, SunIcon } from '@radix-ui/react-icons'
function Header() {
  return (
    <Box style={{ borderBottom: '1px solid gray' }} >
      <Flex justify='between' m='4' align='center' >
        <Flex pl='4'>
          <Logo />
        </Flex>
        <Flex justify='between' gap='5' align='center' pr='4' display={{ initial: "none", md: "flex" }}>
          <Link href='/templates' highContrast>Templates</Link>
          <Link href='/templates'>Docs</Link>
          <Link href='/templates'>Playground</Link>
          <IconButton variant="ghost"><GitHubLogoIcon /></IconButton>
          <IconButton variant="ghost"><SunIcon /></IconButton>
          <IconButton variant="ghost"><DiscordLogoIcon /></IconButton>
        </Flex>
      </Flex>
    </Box>
  )
}
export default Header