import { Box, Divider, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'

function OfferCard({item}) {
    // console.log(item)
  return (
    <Box key={item.id} borderRadius={"30px"} boxShadow="rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px" paddingBottom={"30px"} width="95%">
    <Box>
      <Image width={"100%"} src={item.image} />
    </Box>
    <Box mt="10px" mb="10px">
      <Text
        cursor={"pointer"}
        color={"#423F8D"} _hover={{ color: "#ed078b" }} fontWeight={"bold"} fontSize={"1.3rem"} >Intelligent Challenge</Text>
      <Text mt="5px" color={"GrayText"} lineHeight={"7"}>The word you use in written <br />communica speak volumes</Text>
    </Box>
    <Divider />
    <Flex justifyContent={"space-around"} mt="20px">
      <Flex flexDir={"column"}>
        <Text cursor={"pointer"}
          color="#ed078b" fontWeight={"bold"} fontSize={"1.3rem"} >3-5</Text>
        <Text color={"GrayText"}>Age Group</Text>
      </Flex>
      <Flex flexDir={"column"}>
        <Text cursor={"pointer"}
          color="#edce07" fontWeight={"bold"} fontSize={"1.3rem"}>30</Text>
        <Text color={"GrayText"}>Classes</Text>
      </Flex>
      <Flex flexDir={"column"}>
        <Text cursor={"pointer"}
          color="#12d9df" fontWeight={"bold"} fontSize={"1.3rem"}>10/h</Text>
        <Text color={"GrayText"}>Class Price</Text>
      </Flex>

    </Flex>
  </Box>

  )
}

export default OfferCard