import {
	Flex,
	Box,
	Button,
	Heading,
	Divider,
	VStack,
	HStack,
	SimpleGrid,
} from '@chakra-ui/react';
import { Input } from '../../components/Form/Input';

import { Header } from '../../components/Header/';
import { SideBar } from '../../components/Sidebar/';
import Link from 'next/link';

export default function CreateUser() {
	return (
		<Box>
			<Header />
			<Flex w='100%' my='6' maxW={1480} mx='auto' px='6'>
				<SideBar />
				<Box flex='1' borderRadius={8} bg='gray.700' p={['6', '8']}>
					<Heading size='lg' fontWeight='normal'>
						Criar usuário
					</Heading>
					<Divider my='6' borderColor='gray.500' />
					<VStack>
						<SimpleGrid minChildWidth='240px' spacing={['6', '8']} w='100%'>
							<Input name='name' label='Nome completo' />
							<Input name='email' type='email' label='E-mail' />
						</SimpleGrid>
						<SimpleGrid minChildWidth='240px' spacing={['6', '8']} w='100%'>
							<Input name='password' label='Senha' type='password' />
							<Input
								name='password_confirmation'
								type='password'
								label='Confirmar Senha'
							/>
						</SimpleGrid>
					</VStack>
					<Flex mt='8' justify='flex-end'>
						<HStack spacing='4'>
							<Link href='/users' passHref>
								<Button as='a' colorScheme='whiteAlpha'>
									Cancelar
								</Button>
							</Link>
							<Button colorScheme='pink'>Salvar</Button>
						</HStack>
					</Flex>
				</Box>
			</Flex>
		</Box>
	);
}
