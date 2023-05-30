import { ReactNode } from 'react';

import {
    Box,
    Container,
    Grid,
    Heading,
    Image,
    Link,
    SimpleGrid,
    Stack,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';


const ListHeader = ({ children }) => {
    return (
        <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
            {children}
        </Text>
    );
};

function Footer() {
    return (
        <Box
            backgroundColor={"#4255a4"}
            color="white">
            <Container as={Stack} maxW={'6xl'} py={10}    >
                <Grid  gap="20px"
                     gridTemplateColumns={{lg:"repeat(3,1fr)",md:"repeat(3,1fr)",sm:"repeat(1,1fr)",base:"repeat(1,1fr)"}}
                    justifyContent={"space-around"}>
                    <Stack spacing={6}>
                        <Box>
                            <Image src="https://preview.colorlib.com/theme/kindergarten/assets/img/logo/logo2_footer.png" />
                        </Box>
                        <Text fontSize={"1rem"} width="70%" margin={"auto"} mt="10px">
                            Users and submit their own items. You can create different packages and by connecting with your PayPal or Stripe account charge users for registration.
                        </Text>

                    </Stack>

                    <Stack  align={'flex-start'}>
                        <ListHeader fontWeight="extrbold">QuickLinks</ListHeader>
                        <Link href={'#'}>Classes</Link>
                        <Link href={'#'}>join with us</Link>
                        <Link href={'#'}>About</Link>
                        <Link href={'#'}>Blog </Link>
                        <Link href={'#'}>Events</Link>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <ListHeader fontWeight="extrabold">About Us</ListHeader>
                        <Link href={'#'}>Our Team</Link>
                        <Link href={'#'}>Privacy Policy</Link>
                        <Link href={'#'}>Testimonial</Link>
                        <Link href={'#'}>Programming</Link>
                        <Link href={'#'}>User Stories</Link>
                    </Stack>
                </Grid>
               
            </Container>
            <Text mt={"20px"} mb="10px" fontSize={"1.2rem"}>Copyright ©2023 All rights reserved | This template is made with ❤️  by Colorlib</Text>
        </Box>
    );
}

export default Footer