import { Flex, Box, Text, Avatar } from '@chakra-ui/react';

interface ProfileProps {
	showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
	return (
		<Flex align='center'>
			{showProfileData && (
				<Box mr='4' textAlign='right'>
					<Text>Jonas Pedroso Cabral</Text>
					<Text color='gray.200' fontSize='small'>
						cabral.j@unoesc.edu.br
					</Text>
				</Box>
			)}
			<Avatar
				size='md'
				name='Jonas Pedroso Cabral'
				src='https://github.com/JONAS0607.png'
			/>
		</Flex>
	);
}
