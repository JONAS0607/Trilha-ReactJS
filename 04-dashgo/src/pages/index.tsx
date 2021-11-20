import { Flex } from '@chakra-ui/react';

export default function Home() {
	return (
		<Flex
		  w='100vw'
		  h='100vh'
		  align='center'
		  justify='center'
		>
			<Flex
			  as="form"
				w="100%"
				maxWidth={360}
			>
			teste
			</Flex>
		</Flex>
	);
}
