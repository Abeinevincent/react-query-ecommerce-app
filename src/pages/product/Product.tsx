import { Flex, Box, Badge, Image, chakra } from '@chakra-ui/react'
import { FaStar } from "react-icons/fa";
const CFaStar = chakra(FaStar);
export const Product = () => { 
    
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
        <Flex p={4} justifyContent={"center"} alignItems={"center"} gap={4} flexWrap="wrap">
            <Box maxW='sm' w={290} borderWidth='1px' borderRadius='lg' overflow='hidden'>
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
            <Box maxW='sm' w={290} borderWidth='1px' borderRadius='lg' overflow='hidden'>
                <Image src={property.imageUrl} alt={property.imageAlt} />
            </Box>
        </Flex>
    )
}