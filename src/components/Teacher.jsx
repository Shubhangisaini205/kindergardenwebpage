import { Box, Button, Divider, Flex, Grid, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import OfferCard from './OfferCard'
import TeacherCard from './TeacherCard'
let imageArray = [
  {
    image: "https://preview.colorlib.com/theme/kindergarten/assets/img/gallery/team1.png",
    id: 1,
    name: "Mr. Jackson Clay"
  },
  {
    image: "https://preview.colorlib.com/theme/kindergarten/assets/img/gallery/team2.png",
    id: 2,
    name: "Bustar Hyman"
  },
  {
    image: "https://preview.colorlib.com/theme/kindergarten/assets/img/gallery/team3.png",
    id: 3,
    name: "Amilia Cauli"
  },
  {
    image: "https://preview.colorlib.com/theme/kindergarten/assets/img/gallery/team2.png",
    id: 4,
    name:"Mr. Jane Doe"
  }
]

function Teacher() {
  return (
    <Box>
      <Box  width="80%" margin={"auto"} mt={"5%"}>
        <Text color={"#423F8D"} fontWeight={"extrabold"} fontSize={"2.5rem"}>Classes We Offer</Text>
        <Text fontSize={"1.2rem"} width="70%" margin={"auto"} mt="10px" color={"#423F8D"} >Our set he for firmament morning sixth subdue today the darkness creeping gathered divide our let god moving today. Moving in fourth air night bring upon lesser subdue.</Text>
      </Box>

      <Grid  gridTemplateColumns={{lg:"repeat(4,1fr)",md:"repeat(2,1fr)",sm:"repeat(1,1fr)",base:"repeat(1,1fr)"}} width="80%" margin={"auto"} mt={"5%"} gap={10} >
        {imageArray.map((el) => {
          return (
           <TeacherCard key={el.id} item={el}/>
          )
        })}
      </Grid>


    </Box>
  )
}

export default Teacher