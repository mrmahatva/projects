import { Box, Flex, Link, Text } from '@radix-ui/themes'
import Image from 'next/image'


const T = ['Page Sections', 'Blog', 'Navigation', 'Forms', 'Components']
const S = ['Discord Community', 'GitHub Repository', 'Twitter Account', 'Figma Design Resources']
const A = ['Pubalic Statistics', 'Spleetbee',]

export default function Footer() {
  return (
    <Box style={{ borderTop: '1px solid gray' }} >
      <Flex p='8' gap='8' mx='8'>
        <Flex gap='9'>
          <Flex gap='4' direction='column'>
            <Text size='5' weight='medium'>Templates</Text>
            <Flex gap='2' direction='column'>{T.map((e) => { return (<Link key={e} size='3'>{e}</Link>) })}</Flex>
          </Flex>
          <Flex gap='4' direction='column'>
            <Text size='5' weight='medium'>Social</Text>
            <Flex gap='2' direction='column'>{S.map((e) => { return (<Link key={e} size='3'>{e}</Link>) })}</Flex>
          </Flex>
          <Flex gap='4' direction='column'>
            <Text size='5' weight='medium'>Analytics</Text>
            <Flex gap='2' direction='column'>{A.map((e) => { return (<Link key={e} size='3'>{e}</Link>) })}</Flex>
          </Flex>
          <Flex gap='4' direction='column'>
            <Text size='5' weight='medium'>Support Us</Text>
            <Image src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" width={142} height={40} alt="Buy Me A Coffee"/>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  )
}
