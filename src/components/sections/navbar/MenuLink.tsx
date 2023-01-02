import { Box, Stack, Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { MenuItem } from './MenuItem';

export const MenuLinks = ({ isOpen }: { isOpen: boolean }) => {
    const token = localStorage.getItem('token')
    const username = localStorage.getItem('username')
    const navigate = useNavigate()
    const handleLogout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('username')
        navigate('/login')
    }
    return (
        <Box
            display={{ base: isOpen ? "block" : "none", md: "block" }}
            flexBasis={{ base: "100%", md: "auto" }}
        >
            <Stack
                spacing={8}
                align="center"
                justify={["center", "space-between", "flex-end", "flex-end"]}
                direction={["column", "row", "row", "row"]}
                pt={[4, 4, 0, 0]}
            >
                <MenuItem to="/">Home</MenuItem>
                <MenuItem to="/products">Shop</MenuItem>
                <MenuItem to="/">Blog </MenuItem>
                <MenuItem to="/">Contact </MenuItem>
                {token ? <Button onClick={handleLogout}>Logout </Button> : <MenuItem to="/login">Login</MenuItem>}
                {username ? <MenuItem to='/'>{username}</MenuItem> : <MenuItem to="/register" isLast>
                    <Button
                        size="sm"
                        rounded="md"
                        color={["primary.500", "primary.500", "white", "white"]}
                        bg={["white", "white", "primary.500", "primary.500"]}
                        _hover={{
                            bg: ["primary.100", "primary.100", "primary.600", "primary.600"]
                        }}
                    >
                        Create Account
                    </Button>
                </MenuItem>}
            </Stack>
        </Box>
    );
};