import Card from '../ui/Card';

const Loading = () => {
	return (
		<Card padding={true} flex={false}>
			<div className="flex h-full w-full flex-col items-center">
				<p className="text-gray-900 dark:text-white mb-4">Loading...</p>
			</div>
		</Card>
	);
};

export default Loading;