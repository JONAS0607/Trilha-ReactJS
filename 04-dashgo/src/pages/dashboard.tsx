import { Header } from '../components/Header/';
import dynamic from 'next/dynamic';
import { Flex, SimpleGrid, Box, Text } from '@chakra-ui/react';
import { SideBar } from '../components/Sidebar/';
import { theme } from '../styles/theme';
const Chart = dynamic(() => import('react-apexcharts'), {
	ssr: false, // grafico apenas será carregado pelo clientSide
});
const options = {
	chart: {
		toolbar: {
			show: false,
		},
		zoom: {
			enabled: false,
		},
		foreColor: theme.colors.gray[500],
	},
	grid: {
		show: false,
	},
	dataLabels: {
		enabled: false,
	},
	tooltip: {
		enabled: false,
	},
	xaxis: {
		type: 'datetime',
		axisBorder: {
			color: theme.colors.gray[600],
		},
		axisTicks: {
			color: theme.colors.gray[600],
		},
		categories: [
			'2021-03-11T00:00:00.000Z',
			'2021-03-12T00:00:00.000Z',
			'2021-03-13T00:00:00.000Z',
			'2021-03-14T00:00:00.000Z',
			'2021-03-15T00:00:00.000Z',
			'2021-03-16T00:00:00.000Z',
			'2021-03-17T00:00:00.000Z',
		],
	},
	fill: {
		opacity: 0.3,
		type: 'gradient',
		gradient: {
			shade: 'dark',
			opacityFrom: 0.7,
			opacityTo: 0.7,
		},
	},
};

const series = [
	{
		name: 'series1',
		data: [31, 120, 10, 28, 61, 18, 109],
	},
];
export default function DashBoard() {
	return (
		<Flex direction='column' h='100vh'>
			<Header />
			<Flex w='100%' my='6' maxW={1480} mx='auto' px='6'>
				<SideBar />
				<SimpleGrid flex='1' gap='4' minChildWidth='320px'>
					<Box p='8' bg='gray.700' borderRadius='8'>
						<Text fontSize='lg' mb='4'>
							Inscritos da Semana
						</Text>
						<Chart options={options} series={series} type='area' height={160} />
					</Box>
					<Box p='8' bg='gray.700' borderRadius='8'>
						<Text fontSize='lg' mb='4'>
							Taxa de Abertura
						</Text>
						<Chart options={options} series={series} type='area' height={160} />
					</Box>
				</SimpleGrid>
			</Flex>
		</Flex>
	);
}
