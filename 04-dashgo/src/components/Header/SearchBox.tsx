import { Flex, Icon, Input } from '@chakra-ui/react';
import { RiSearchLine } from 'react-icons/ri';
import { useState, useRef } from 'react';
export function SearchBox() {
	//controlled component
	//const [search, setSearch] = useState('');
	// uncontrolled with ref
	const serchInputRef = useRef<HTMLInputElement>(null);
	//pegando o valor de ref
	console.log(serchInputRef.current.value);
	return (
		<Flex
			as='label'
			flex='1'
			py='4'
			px='8'
			ml='6'
			maxW={400}
			alignSelf='center'
			color='gray.200'
			position='relative'
			bg='gray.700'
			borderRadius='full'>
			<Input
				color='gray.50'
				variant='unstyled'
				px='4'
				mr='4'
				placeholder='Buscar na Plataforma'
				_placeholder={{
					color: 'gray.400',
				}}
				ref={serchInputRef}
				// value={search}
				// onChange={(event) => setSearch(event.target.value)}
			/>
			<Icon as={RiSearchLine} fontSize='20' />
		</Flex>
	);
}
