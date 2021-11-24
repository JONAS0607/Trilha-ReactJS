import {
	FormControl,
	FormLabel,
	Input as ChakraInput,
	InputProps as ChakraInputProps,
	FormErrorMessage,
} from '@chakra-ui/react';
import { FieldError } from 'react-hook-form';
import React, { forwardRef, ForwardRefRenderFunction } from 'react';

interface InputProps extends ChakraInputProps {
	name: string;
	label?: string;
	error?: FieldError;
}
const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
	{ name, error = null, label, ...rest },
	ref,
) => {
	return (
		<FormControl isInvalid={!!error}>
			{!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
			<ChakraInput
				name={name}
				id={name}
				type='email'
				focusBorderColor='pink.500'
				bg='gray.800'
				variant='filled'
				_hover={{
					bgColor: 'gray.800',
				}}
				size='lg'
				error={error}
				{...rest}
				ref={ref}
			/>
			{!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
		</FormControl>
	);
};

export const Input = forwardRef(InputBase);