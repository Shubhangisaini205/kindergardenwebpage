import { Box, Button, Divider, Flex, Grid, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import OfferCard from './OfferCard'
let imageArray = [
  {
    image: "https://preview.colorlib.com/theme/kindergarten/assets/img/gallery/class-img1.png",
    id: 1
  },
  {
    image: "https://preview.colorlib.com/theme/kindergarten/assets/img/gallery/class-img2.png",
    id: 2
  },
  {
    image: "https://preview.colorlib.com/theme/kindergarten/assets/img/gallery/class-img1.png",
    id: 3
  }
]

function Offer() {
  return (
    <Box  backgroundColor={"#fff2f9"} pb="20px">
      <Box width="80%" margin={"auto"} mt={"5%"}>
        <Text color={"#423F8D"} fontWeight={"extrabold"} fontSize={"2.5rem"}>Classes We Offer</Text>
        <Text fontSize={"1.2rem"} width="70%" margin={"auto"} mt="10px" color={"#423F8D"} >Our set he for firmament morning sixth subdue today the darkness creeping gathered divide our let god moving today. Moving in fourth air night bring upon lesser subdue.</Text>
      </Box>

      <Grid gridTemplateColumns={{lg:"repeat(3,1fr)",md:"repeat(2,1fr)",sm:"repeat(1,1fr)",base:"repeat(1,1fr)"}} width="80%" margin={"auto"} mt={"5%"} gap={10} >
        {imageArray.map((el) => {
          return (
           <OfferCard key={el.id} item={el}/>
          )
        })}
      </Grid>
      <Box mt="50px">
        <Button color={"#ed078b"} padding="25px" backgroundColor={"white"} _hover={{backgroundColor:"#ed078b" ,color:"white"}}border={"1px solid #ed078b "}>More classes</Button>
      </Box>

    </Box>
  )
}

export default Offer