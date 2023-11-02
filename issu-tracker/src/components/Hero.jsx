import { CheckIcon, ExternalLinkIcon, GitHubLogoIcon } from '@radix-ui/react-icons'
import { Box, Button, Flex, Heading, Text } from '@radix-ui/themes'
import React from 'react'

export default function Hero() {
  return (
    <Box pt='9'>
      <Flex mx='5' mt='9' pt='9' direction='column' gap='7' width='60%'>
        <Heading size='9' weight='bold'>134 responsive components built with Mantine</Heading>
        <Text size='4' weight='light' color='gray'>Build your next website even faster with premade responsive components
          designed and built by Mantine maintainers and community. All components are free forever for everyone.</Text>
        <Flex gap='8'>
          <Flex direction='column' gap='4'>
            <Flex align='center' gap='2'><CheckIcon color='lime'/><Text weight='bold' color='gray'>Responsive Demos</Text></Flex>
            <Flex align='center' gap='2'><CheckIcon color='lime'/><Text weight='bold' color='gray'>Easy Customizable</Text></Flex>
            <Flex align='center' gap='2'><CheckIcon color='lime'/><Text weight='bold' color='gray'>Written in TypeScript</Text></Flex>
          </Flex>
          <Flex direction='column' gap='4'>
            <Flex align='center' gap='2'><CheckIcon color='lime'/><Text weight='bold' color='gray'>100% Open Source</Text></Flex>
            <Flex align='center' gap='2'><CheckIcon color='lime'/><Text weight='bold' color='gray'>77 Templates</Text></Flex>
            <Flex align='center' gap='2'><CheckIcon color='lime'/><Text weight='bold' color='gray'>26 Categories</Text></Flex>
          </Flex>
          
        </Flex>
        <Flex gap='8'>
            <Button color='iris' size='4'>Browse Templates</Button>
            <Button variant='soft' size='4'><GitHubLogoIcon />GitHub</Button>
            <Button variant='soft' size='4'> Get Started with RedixUI <ExternalLinkIcon /></Button>
          </Flex>
      </Flex>
          <Box width='9'> </Box>
    </Box>
  )
}
