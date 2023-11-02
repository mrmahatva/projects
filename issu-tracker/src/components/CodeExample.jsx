'use client'
// import { Template } from '#/data/types'
import { Box, Button, Flex } from '@radix-ui/themes'
// interface Props { template: Template category: Category subCategory: SubCategory }
export const CodeSample = () => {
  const { template, category, subCategory } = props
  
  return (
    <Flex gap='3'>
      {template.map((t) => {
        <Example key={t.filename} template={t} subCategory={subCategory} />
      })}
    </Flex>
  )
}