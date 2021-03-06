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
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';

import { Header } from '../../components/Header/';
import { SideBar } from '../../components/Sidebar/';
import Link from 'next/link';
type CreateUserFormData = {
	name: string;
	email: string;
	password: string;
	password_confirmation: string;
};
const createUserFormSchema = yup.object().shape({
	name: yup.string().required('Digite seu nome'),
	password: yup
		.string()
		.required('Digite sua senha')
		.min(6, 'Minimo 6 caracteres'),
	password_confirmation: yup
		.string()
		.oneOf([null, yup.ref('password')], 'Senha não é igual'),
	email: yup.string().required('E-mail obrigatório').email('e-mail inválido'),
});

export default function CreateUser() {
	const { register, handleSubmit, formState } = useForm({
		resolver: yupResolver(createUserFormSchema),
	});
	const { errors } = formState;
	const handleCreateUser: SubmitHandler<CreateUserFormData> = async (
		values,
	) => {
		await new Promise((resolve) => setTimeout(resolve, 2000));
		console.log(values);
	};

	return (
		<Box>
			<Header />
			<Flex w='100%' my='6' maxW={1480} mx='auto' px='6'>
				<SideBar />
				<Box
					as='form'
					flex='1'
					borderRadius={8}
					bg='gray.700'
					p={['6', '8']}
					onSubmit={handleSubmit(handleCreateUser)}>
					<Heading size='lg' fontWeight='normal'>
						Criar usuário
					</Heading>
					<Divider my='6' borderColor='gray.500' />
					<VStack>
						<SimpleGrid minChildWidth='240px' spacing={['6', '8']} w='100%'>
							<Input
								name='name'
								label='Nome
							  completo'
								type='text'
								error={errors.name}
								{...register('name')}
							/>
							<Input
								name='email'
								type='email'
								label='E-mail'
								error={errors.email}
								{...register('email')}
							/>
						</SimpleGrid>
						<SimpleGrid minChildWidth='240px' spacing={['6', '8']} w='100%'>
							<Input
								name='password'
								label='Senha'
								type='password'
								error={errors.password}
								{...register('password')}
							/>
							<Input
								name='password_confirmation'
								type='password'
								label='Confirmar Senha'
								error={errors.password_confirmation}
								{...register('password_confirmation')}
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
							<Button
								type='submit'
								colorScheme='pink'
								isLoading={formState.isSubmitting}>
								Salvar
							</Button>
						</HStack>
					</Flex>
				</Box>
			</Flex>
		</Box>
	);
}
