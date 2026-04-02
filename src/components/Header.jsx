import { FaNodeJs, FaReact } from "react-icons/fa";

export default function Header() {
	const dot = "●";

	return (
		<div className="space-y-4">
			<h1 className="text-3xl font-semibold">Adams Kiptalam</h1>
			<p className="text-lg text-muted ">
				Full-stack Software Engineer{" "}
				<span className="mx-2 text-gray-500">{dot}</span> Based in Kenya
			</p>
			<p className="">
				I design and build production-grade full-stack systems, from{" "}
				<span className="inline-flex items-center gap-1 bg-surface-muted w-fit px-2 rounded-lg">
					<FaReact size={12} color="#61DAFB" />
					React{" "}
				</span>{" "}
				interfaces to{" "}
				<span className="inline-flex items-center gap-1 bg-surface-muted w-fit px-2 rounded-lg">
					<FaNodeJs size={12} color="#68A063" /> Node.js{" "}
				</span>{" "}
				APIs, with a focus on <strong>scalability</strong>,{" "}
				<strong>security</strong>, and <strong>maintainability</strong>.
			</p>
		</div>
	);
}
