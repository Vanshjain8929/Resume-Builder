import { Box, chakra, Flex, Icon, SimpleGrid, useColorModeValue } from '@chakra-ui/react';
import { Helmet } from 'react-helmet';

const testimonials = [
    {
        name: 'Vansh Jain',
        role: 'Frontend Web Developer',
        content:
            'A resume builder website is a web-based tool that allows users to create and customize a professional resume to their desired specifications. These websites typically provide templates for creating a resume.',
    },
];

function TestimonialCard(props) {
    const { name, role, content } = props;

    return (
        <Flex
            boxShadow="lg"
            maxW="640px"
            direction={{ base: 'column', md: 'row' }}
            width="full"
            rounded="xl"
            p={10}
            justifyContent="space-between"
            position="relative"
            bg={useColorModeValue('white', 'gray.800')}
            _after={{
                content: '""',
                position: 'absolute',
                height: '37px',
                width: '41px',
                left: '35px',
                top: '-10px',
            }}
            _before={{
                content: '""',
                position: 'absolute',
                zIndex: '-1',
                height: 'full',
                maxW: '640px',
                width: 'full',
                filter: 'blur(40px)',
                transform: 'scale(0.98)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                top: 0,
                left: 0,
            }}
        >
            <Flex direction="column" textAlign="left" justifyContent="space-between">
                <chakra.p
                    color={useColorModeValue('gray.500', 'gray.50')}
                    fontFamily="Inter"
                    fontWeight="medium"
                    fontSize="15px"
                    pb={4}
                >
                    {content}
                </chakra.p>

                <chakra.p
                    fontFamily="Work Sans"
                    color={useColorModeValue('gray.700', 'gray.50')}
                    fontWeight="bold"
                    fontSize={14}
                >
                    {name}
                    <chakra.span
                        fontFamily="Inter"
                        fontWeight="medium"
                        color="gray.500"
                    >
                        {' '}– {role}
                    </chakra.span>
                </chakra.p>
            </Flex>
        </Flex>
    );
}

export default function About() {
    return (
        <>
            <Helmet>
                <title>About Us - Resume Builder</title>
                <meta
                    name="description"
                    content="Learn more about the Resume Builder website and its mission to provide easy-to-use tools for creating professional resumes."
                />
                <meta name="keywords" content="resume builder, about us, professional resumes" />
                <meta name="author" content="Vansh Jain" />
                <meta name="robots" content="index, follow" />
                <meta property="og:title" content="About Us - Resume Builder" />
                <meta
                    property="og:description"
                    content="Learn more about the Resume Builder website and its mission to provide easy-to-use tools for creating professional resumes."
                />
                <meta property="og:type" content="website" />
            </Helmet>

            <Flex
                textAlign="center"
                pt={10}
                justifyContent="center"
                direction="column"
                width="full"
            >
                <Box width={{ base: 'full', sm: 'lg', lg: 'xl' }} margin="auto">
                    <chakra.h3
                        fontFamily="Work Sans"
                        fontWeight="bold"
                        fontSize={20}
                        textTransform="uppercase"
                        color="teal.400"
                    >
                        People love us
                    </chakra.h3>

                    <chakra.h1
                        py={5}
                        fontSize={48}
                        fontFamily="Work Sans"
                        fontWeight="bold"
                        color={useColorModeValue('gray.700', 'gray.50')}
                    >
                        Resume Builder
                    </chakra.h1>

                    <chakra.h2
                        margin="auto"
                        width="70%"
                        fontFamily="Inter"
                        fontWeight="medium"
                        color={useColorModeValue('gray.500', 'gray.400')}
                    >
                        Build the Resume That Gets You Hired!
                    </chakra.h2>
                </Box>

                <SimpleGrid columns={1} spacing="20" mt={16} mx="auto">
                    {testimonials.map((cardInfo, index) => (
                        <TestimonialCard key={index} {...cardInfo} />
                    ))}
                </SimpleGrid>

                <Box>
                    <Icon viewBox="0 0 40 35" mt={14} boxSize={10} color="teal.400">
                        <path
                            fill="currentColor"
                            d="M10.7964 0C6.217 0 2.194 3.01 0.822 6.664c-1.37 3.655-.5 7.8 2.34 10.64L19.115 34.383a1.34 1.34 0 001.894 0L36.962 18.427c2.88-2.88 3.83-7.08 2.44-10.76C38.01 3.99 34.02 1.28 29.29 1.28c-2.88 0-5.64 1.16-7.59 3.1L20.06 4.79l-1.63-1.63C16.48 1.21 13.74 0 10.8 0z"
                        />
                    </Icon>
                </Box>
            </Flex>
        </>
    );
}

