import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'

function TeacherCard({item}) {
  return (
    <Box key={item.id} borderRadius={"30px"}  paddingBottom={"30px"}>
    <Box>
      <Image width={"100%"} src={item.image} />
    </Box>

    <Box mt={"15px"}>
      <Text  color={"#18173e"} fontWeight={"bold"} fontSize={"1.3rem"} >{item.name}</Text>
      <Text color={"gray.700"}>Sports Instructor</Text>
    </Box>
    
  </Box>
  )
}

export default TeacherCard