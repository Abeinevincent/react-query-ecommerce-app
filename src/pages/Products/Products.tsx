import { Box, Badge, Image, chakra, Flex } from '@chakra-ui/react'
import { FaStar, FaLock } from "react-icons/fa";
import { Link } from 'react-router-dom';
const CFaStar = chakra(FaStar);

export function Products() {
    const property = {
        imageUrl: 'https://bit.ly/2Z4KKcF',
        imageAlt: 'Rear view of modern home with pool',
        beds: 3,
        baths: 2,
        title: 'Modern home in city center in the heart of historic Los Angeles',
        formattedPrice: '$1,900.00',
        reviewCount: 34,
        rating: 4,
    }

    return (
        <Flex p={10} flexWrap="wrap" alignItems={"center"} gap={2} justifyContent={"center"}>
            <Link to='/product/6778'  >
                <Box maxW='sm' w={290} borderWidth='1px' borderRadius='lg' overflow='hidden'>
                    <Image src={property.imageUrl} alt={property.imageAlt} />
                    <Box p='6'>
                        <Box display='flex' alignItems='baseline'>
                            <Badge borderRadius='full' px='2' colorScheme='teal'>
                                New
                            </Badge>
                            <Box
                                color='gray.500'
                                fontWeight='semibold'
                                letterSpacing='wide'
                                fontSize='xs'
                                textTransform='uppercase'
                                ml='2'
                            >
                                {property.beds} beds &bull; {property.baths} baths
                            </Box>
                        </Box>

                        <Box
                            mt='1'
                            fontWeight='semibold'
                            as='h4'
                            lineHeight='tight'
                            noOfLines={1}
                        >
                            {property.title}
                        </Box>

                        <Box>
                            {property.formattedPrice}
                            <Box as='span' color='gray.600' fontSize='sm'>
                                / wk
                            </Box>
                        </Box>

                        <Box display='flex' mt='2' alignItems='center'>
                            {Array(5)
                                .fill('')
                                .map((_, i) => (
                                    <CFaStar
                                        key={i}
                                        color={i < property.rating ? 'teal.500' : 'gray.300'}
                                    />
                                ))}
                            <Box as='span' ml='2' color='gray.600' fontSize='sm'>
                                {property.reviewCount} reviews
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Link>


        </Flex>
    )
}