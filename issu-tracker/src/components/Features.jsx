import { CopyIcon, FaceIcon, MagnifyingGlassIcon } from '@radix-ui/react-icons'
import { Badge, Box, Flex, Text } from '@radix-ui/themes'
import React from 'react'

export default function Features() {
  return (
    <Flex my='8' pt='8' direction='column' gap='6' align='center' style={{borderTop:'1px solid gray'}}>
      <Text size='8' weight='bold'>Getting started in <Text color='iris'>3 easy steps</Text></Text>
      <Flex gap='8'>
        <Flex gap='2' direction='column' m='8' align='center'>
          <Badge size='2' variant='soft' color='iris'><MagnifyingGlassIcon /></Badge>
          <Text weight='medium'>Find your template</Text>
          <Text align='center' color='gray'>Every template is embedded within an iframe, so you can easily check what they look like and test the responsive behaviour.</Text>
        </Flex>
        <Flex gap='2' direction='column' m='8' align='center'>
          <Badge size='2' variant='soft' color='iris'><CopyIcon /></Badge>
          <Text weight='medium'>Copy the code</Text>
          <Text align='center' color='gray'>Click the code tab to see the actual source code of the template. Copy and paste it into your project and adjust it to your needs.</Text>
        </Flex>
        <Flex gap='2' direction='column' m='8' align='center'>
          <Badge size='2' variant='soft' color='iris'><FaceIcon /></Badge>
          <Text weight='medium'>Enjoy your free time</Text>
          <Text align='center' color='gray'>You've just saved yourself a bunch of time not building the same stuff over and over again. Enjoy your free time, and build business features</Text>
        </Flex>
      </Flex>
    </Flex>
  )
}
