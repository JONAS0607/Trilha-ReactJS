import { Text } from '@chakra-ui/react';
const breakPoints = ['2xl', '3xl', '4xl', '5xl'];
export function Logo() {
	return (
		<Text fontSize={breakPoints} fontWeight='bold' letterSpacing='tight' w='64'>
			dashgo
			<Text as='span' ml='1' color='pink.500'>
				.
			</Text>
		</Text>
	);
}
