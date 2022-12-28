import { Box, Alert, AlertDescription, AlertIcon } from '@chakra-ui/react'

export const ErrorMessage = ({message}: { message: string }) => {
    return (
        <Box py={4}>
            <Alert status="error" borderRadius={4}>
                <AlertIcon />
                <AlertDescription>{message}</AlertDescription>
            </Alert>
        </Box>
    )
}
