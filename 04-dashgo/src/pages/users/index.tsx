import {
	Button,
	Flex,
	Text,
	Box,
	Heading,
	Icon,
	Table,
	Thead,
	Tbody,
	Tr,
	Td,
	Th,
	Checkbox,
	useBreakpointValue,
} from '@chakra-ui/react';
import { RiAddLine, RiEditLine } from 'react-icons/ri';
import { Header } from '../../components/Header/';
import { Pagination } from '../../components/Pagination/';
import { SideBar } from '../../components/Sidebar/';
import Link from 'next/link';

export default function UserList() {
	const isWideVersion = useBreakpointValue({
		base: false,
		lg: true,
	});

	return (
		<Box>
			<Header />
			<Flex w='100%' my='6' maxW={1480} mx='auto' px='6'>
				<SideBar />
				<Box flex='1' borderRadius={8} bg='gray.700' p='8'>
					<Flex mb='8' justify='space-between' align='center'>
						<Heading size='lg' fontWeight='normal'>
							Usuários
						</Heading>
						<Link href='/users/create' passHref>
							<Button
								as='a'
								size='sm'
								fontSize='sm'
								colorScheme='pink'
								leftIcon={<Icon as={RiAddLine} fontSize='20' />}>
								Criar novo
							</Button>
						</Link>
					</Flex>
					<Table colorScheme='whiteAlpha'>
						<Thead>
							<Tr>
								<Th px={['4', '4', '6']} color='gray.200' w='8'>
									<Checkbox colorScheme='pink'></Checkbox>
								</Th>
								<Th color='gray.300'>Usuário</Th>
								{isWideVersion && <Th color='gray.300'>Data de cadastro</Th>}
								{isWideVersion && <Th w='8' color='gray.300'></Th>}
							</Tr>
						</Thead>
						<Tbody>
							<Tr>
								<Td px={['4', '4', '6']}>
									<Checkbox colorScheme='pink'></Checkbox>
								</Td>
								<Td>
									<Box>
										<Text fontWeight='bold'>Jonas Pedroso Cabral</Text>
										<Text fontSize='sm' color='gray.200' fontWeight='bold'>
											cabral.j@unoesc.edu.br
										</Text>
									</Box>
								</Td>
								{isWideVersion && <Td>04 de Abril 2021</Td>}
								{isWideVersion && (
									<Td>
										<Button
											as='a'
											size='sm'
											fontSize='sm'
											colorScheme='purple'
											leftIcon={<Icon as={RiEditLine} />}>
											{isWideVersion ? 'Editar' : ''}
										</Button>
									</Td>
								)}
							</Tr>
						</Tbody>
					</Table>
					<Pagination />
				</Box>
			</Flex>
		</Box>
	);
}
