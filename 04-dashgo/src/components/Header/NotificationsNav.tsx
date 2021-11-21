import { HStack, Icon } from '@chakra-ui/react';
import { RiNotificationLine, RiUserAddLine } from 'react-icons/ri';

const breakPoints = ['6', '8'];

export function Notification() {
	return (
		<HStack
			spacing={breakPoints}
			mx={breakPoints}
			pr={breakPoints}
			py='1'
			color='gray.300'
			borderRightWidth={1}
			borderColor='gray.600'>
			<Icon as={RiNotificationLine} fontSize='20' />
			<Icon as={RiUserAddLine} fontSize='20' />
		</HStack>
	);
}
