import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'

function Welcome() {
    return (
        <>
            <Box width="80%" margin={"auto"} mt={"20px"}>
                <Text color={"#423F8D"} fontWeight={"extrabold"} fontSize={"2.5rem"}>Welcome to our <Text color="#ed078b" display={"inline-block"}> Kindergarten</Text></Text>
                <Text fontSize={"1.2rem"} width="70%" margin={"auto"} mt="10px" color={"#423F8D"} >Our set he for firmament morning sixth subdue today the darkness creeping gathered divide our let god moving today. Moving in fourth air night bring upon lesser subdue fowl male signs.</Text>
            </Box>
            <Flex width="80%" margin={"auto"} mt={"5%"} gap={10} flexDir={{lg:"row",md:"column",sm:"column",base:"column"}}>
                <Flex width={{lg:"40%",base:"90%"}} flexDir={"column"} gap={"30px"} mt={"8%"}>
                    <Flex  >
                        <Box width="20%" margin={"auto"} ml="40px">
                            <Image src="https://preview.colorlib.com/theme/kindergarten/assets/img/icon/about-icon1.svg" />
                        </Box>
                        <Box width="60%">
                            <Text color={"#1f97d4"} fontWeight={"bold"} fontSize={"1.4rem"}>Inter School Sports</Text>
                            <Text  color={"#4855a4"}>The words you use in your written communica speak volumes.</Text>
                        </Box>
                    </Flex>
                    <Flex  >
                        <Box width="20%" margin={"auto"} ml="40px">
                            <Image src="https://preview.colorlib.com/theme/kindergarten/assets/img/icon/about-icon2.svg" />
                        </Box>
                        <Box width="60%">
                            <Text fontWeight={"bold"} color={"#fbce0f"} fontSize={"1.4rem"}>Inter School Sports</Text>
                            <Text color={"#4855a4"}>The words you use in your written communica speak volumes.</Text>
                        </Box>
                    </Flex>
                    <Flex  >
                        <Box width="20%" margin={"auto"} ml="40px">
                            <Image src="https://preview.colorlib.com/theme/kindergarten/assets/img/icon/about-icon3.svg" />
                        </Box>
                        <Box width="60%">
                            <Text fontWeight={"bold"} color={"#12d9df"} fontSize={"1.4rem"}>Inter School Sports</Text>
                            <Text  color={"#4855a4"}>The words you use in your written communica speak volumes.</Text>
                        </Box>
                    </Flex>
                </Flex>
                <Box width={{lg:"60%",base:"90%"}}>
                    <Image src="https://preview.colorlib.com/theme/kindergarten/assets/img/gallery/about2.png" />
                </Box>
            </Flex>

        
        </>
    )
}

export default Welcome