import Header from "./components/Header";
import Technologies from "./components/Technologies";

export default function App() {
	return (
		<div className="h-full min-h-screen w-full min-w-screen bg-bg text-text text-base font-urbanist p-4 sm:p-6 md:p-8 lg:p-10 space-y-4">
			<Header />
			<Technologies />
		</div>
	);
}
