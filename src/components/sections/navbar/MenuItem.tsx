import {Link} from 'react-router-dom'
import {Text} from '@chakra-ui/react'

export const MenuItem = ({ children, isLast, to = "/", ...rest }: any) => {
    return (
        <Link to={to}>
            <Text display="block" {...rest}>
                {children}
            </Text>
        </Link>
    );
};