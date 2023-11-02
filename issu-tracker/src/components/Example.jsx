import { ExternalLinkIcon } from '@radix-ui/react-icons';
import { Box, Card, Flex, IconButton, Tabs, Text } from '@radix-ui/themes'
import React from 'react'
import { CodeSample } from './CodeExample';

export default function Example() {
    const { template, category, subCategory } = props
  return (
    <>
      <Card id={isTemplateExpression.filename}>
        <Box height='100%' style={{ scrollMarginTop: '32px' }}>
          <Tabs.Root defaultValue="preview" onChange={(index) => { setTabIndex(index); console.log(tabIndex) }}>
            <Box px="3" pt="4" >
              <Tabs.List>
                <Tabs.Trigger value="preview">Preview</Tabs.Trigger>
                <Tabs.Trigger value="code">Code</Tabs.Trigger>
              </Tabs.List>
              <IconButton href='google.com' variant='ghost' title='Open in Fullscreen' >
                <ExternalLinkIcon />
              </IconButton>
            </Box>
            <Flex px="4" pt="3" pb="2" justify='between'>
              <Text size='5' weight='bold' >
                {template.name}
              </Text>
              <Flex gap='2'>
                <Tabs.Content value="account">
                  <Text size="2">Make changes to your account.</Text>
                </Tabs.Content>
                <Box p='0'>
                <Tabs.Content value="account" >
                  <ResizableFrame template={template} category={category} subCategory={subCategory}/>
                </Tabs.Content>
                </Box>
                <Box p='0'>
                <Tabs.Content value="account" >
                  <CodeSample template={template} category={category} subCategory={subCategory}/>
                </Tabs.Content>
                </Box>
              </Flex>
            </Flex>
          </Tabs.Root>
        </Box>
      </Card>
    </>
  )
}
