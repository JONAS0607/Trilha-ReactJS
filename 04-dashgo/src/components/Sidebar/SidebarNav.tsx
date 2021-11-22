import { Stack } from '@chakra-ui/react';
import {
	RiContactsLine,
	RiDashboardLine,
	RiInputMethodLine,
	RiGitMergeLine,
} from 'react-icons/ri';
import { NavSection } from './NavSection';
import { NavLinks } from './NavLink';

export function SidebarNav() {
	return (
		<Stack spacing='12' align='flex-start'>
			<NavSection title='GERAL'>
				<NavLinks href='/dashboard' icon={RiDashboardLine}>
					Dashboard
				</NavLinks>
				<NavLinks href='/users' icon={RiContactsLine}>
					Usuários
				</NavLinks>
			</NavSection>
			<NavSection title='AUTOMAÇÃO'>
				<NavLinks href='/forms' icon={RiInputMethodLine}>
					Formulários
				</NavLinks>
				<NavLinks href='/automation' icon={RiGitMergeLine}>
					Automação
				</NavLinks>
			</NavSection>
		</Stack>
	);
}
