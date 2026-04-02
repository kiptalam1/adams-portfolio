import {
	SiExpress,
	SiGit,
	SiGithub,
	SiJavascript,
	SiJest,
	SiMongodb,
	SiNodedotjs,
	SiPostgresql,
	SiPrisma,
	SiReact,
	SiSocketdotio,
	SiTailwindcss,
	SiTypescript,
} from "react-icons/si";

export default function Technologies() {
	const LEVELS = {
		BEGINNER: "●○○○",
		INTERMEDIATE: "●●○○",
		ADVANCED: "●●●○",
		EXPERT: "●●●●",
	};

	const skills = {
		Frontend: [
			{
				name: "React",
				icon: SiReact,
				color: "#61DAFB",
				level: LEVELS.ADVANCED,
			},
			{
				name: "TypeScript",
				icon: SiTypescript,
				color: "#3178C6",
				level: LEVELS.ADVANCED,
			},
			{
				name: "JavaScript",
				icon: SiJavascript,
				color: "#F7DF1E",
				level: LEVELS.ADVANCED,
			},
			{
				name: "Tailwind",
				icon: SiTailwindcss,
				color: "#06B6D4",
				level: LEVELS.ADVANCED,
			},
		],
		Backend: [
			{
				name: "Node.js",
				icon: SiNodedotjs,
				color: "#339933",
				level: LEVELS.ADVANCED,
			},
			{
				name: "Express",
				icon: SiExpress,
				color: "#000000",
				level: LEVELS.ADVANCED,
			},
			{
				name: "PostgreSQL",
				icon: SiPostgresql,
				color: "#4169E1",
				level: LEVELS.ADVANCED,
			},
			{
				name: "MongoDB",
				icon: SiMongodb,
				color: "#47A248",
				level: LEVELS.ADVANCED,
			},
			{
				name: "Prisma",
				icon: SiPrisma,
				color: "#2D3748",
				level: LEVELS.EXPERT,
			},
			{
				name: "Socket.io",
				icon: SiSocketdotio,
				color: "#010101",
				level: LEVELS.INTERMEDIATE,
			},
		],
		Tools: [
			{ name: "Git", icon: SiGit, color: "#F05032", level: LEVELS.ADVANCED },
			{
				name: "GitHub",
				icon: SiGithub,
				color: "#181717",
				level: LEVELS.ADVANCED,
			},
			{
				name: "Jest",
				icon: SiJest,
				color: "#C21325",
				level: LEVELS.INTERMEDIATE,
			},
		],
	};

	return (
		<section className="space-y-8 max-w-4xl mx-auto py-10">
			<h2 className="text-2xl font-semibold text-text">Skills</h2>

			{Object.entries(skills).map(([category, items]) => (
				<div key={category} className="space-y-4">
					<h3 className="text-lg font-semibold text-text">{category}</h3>

					<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
						{items.map((tech) => (
							<div
								key={tech.name}
								className="flex items-center justify-between gap-3 p-3
                bg-surface
                border border-border
                rounded-md
                hover:shadow-sm transition">
								<div className="flex items-center gap-2">
									<tech.icon size={18} color={tech.color} />
									<span className="text-sm text-text">{tech.name}</span>
								</div>

								<span className="text-xs text-text-muted">{tech.level}</span>
							</div>
						))}
					</div>
				</div>
			))}
		</section>
	);
}
