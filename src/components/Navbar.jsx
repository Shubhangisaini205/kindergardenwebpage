import { ReactNode } from 'react';
import {
    Box,
    Flex,
    Avatar,
    HStack,
    Link,
    IconButton,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
    Heading,
    Image,
    Text,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const Links = ['Home', 'Class', 'About', 'Blog', 'Contact'];

const NavLink = ({ children }) => (
    <Link
        px={2}
        py={1}
        rounded={'md'}
        _hover={{
            textDecoration: 'none',
            bg: useColorModeValue('gray.200', 'gray.700'),
        }}
        href={'#'}>
        {children}
    </Link>
);

function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <IconButton
                        size={'md'}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={'Open Menu'}
                        display={{ md: 'none' }}
                        onClick={isOpen ? onClose : onOpen}
                    />
                    <HStack spacing={8} alignItems={'center'}>
                        <Box ml="20px">
                            <Image src="https://preview.colorlib.com/theme/kindergarten/assets/img/logo/logo2_footer.png" />
                        </Box>

                    </HStack>
                    <Flex alignItems={'center'} gap={"30px"}>
                        <HStack
                            as={'nav'}
                            spacing={9}
                            display={{ base: 'none', md: 'flex' }}>
                            {Links.map((link) => (
                                <Text cursor={"pointer"} _hover={{color:"#ed078b"}} color={"#423F8D"}  fontWeight="bold" key={link}>{link}</Text>
                            ))}
                        </HStack>
                        <Button
                            _hover={{ backgroundColor: "#12d9df" }}
                            backgroundColor={"#12d9df"}
                            borderRadius={"20px"}
                            display={{ sm: "none", base: "none", lg: "block", md: "block" }}
                        > Enroll Now </Button>


                    </Flex>
                </Flex>

                {isOpen ? (
                    <Box pb={4} display={{ md: 'none' }}>
                        <Stack as={'nav'} spacing={4}>
                            {Links.map((link) => (
                                <Text cursor={"pointer"} _hover={{color:"#ed078b"}} color={"#423F8D"}  fontWeight="bold" key={link}>{link}</Text>
                            ))}
                        </Stack>
                    </Box>
                ) : null}
            </Box>
        </>
    );
}
export default Navbar