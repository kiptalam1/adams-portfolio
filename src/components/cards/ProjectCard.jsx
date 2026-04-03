import { useState } from "react";

function ProjectCard({ project }) {
	const [isExpanded, setIsExpanded] = useState(false);
	const [isHovered, setIsHovered] = useState(false);

	const shouldTruncate = project.description.length > 100;
	const displayDescription =
		isExpanded ? project.description : project.description.slice(0, 100);

	return (
		<div
			className="rounded-xl bg-surface shadow-lg hover:shadow-xl transition-all duration-300 shadow-bg flex flex-col h-105 overflow-hidden border border-border/50 hover:border-border group"
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}>
			{/* image container */}
			<div className="relative h-48 overflow-hidden bg-gray-100">
				<img
					loading="lazy"
					className={`w-full h-full object-cover transition-transform duration-500 ${isHovered ? "scale-105" : "scale-100"}`}
					src={project.image}
					alt={project.title}
				/>
				{/* gradient overlay */}
				<div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
			</div>

			{/* content container */}
			<div className="flex flex-col grow p-4 space-y-3">
				<h3 className="text-base font-semibold font-inter  line-clamp-1 px-2">
					{project.title}
				</h3>
				{/* tech stack */}
				<div className="flex items-center flex-wrap gap-2 px-2">
					{project.tech.map((t) => (
						<span
							key={t}
							className="text-xs bg-surface-muted rounded-full px-2.5 py-1 font-medium text-text-muted">
							{t}
						</span>
					))}
				</div>
				{/* description */}
				<div className="grow px-1">
					<p className={`text-sm px-2 text-text-muted leading-relaxed`}>
						{displayDescription}
						{shouldTruncate && !isExpanded && "..."}
					</p>
					{shouldTruncate && (
						<button
							type="button"
							className="text-xs cursor-pointer mt-2 font-semibold text-primary hover:text-primary-hover transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 rounded-lg px-1"
							onClick={() => setIsExpanded(!isExpanded)}>
							{isExpanded ? "show less ↑" : "show more ↓"}
						</button>
					)}
				</div>

				{/* Optional: Action Buttons */}
				<div className="flex gap-4 pt-1 items-center">
					{project.liveUrl && (
						<a
							href={project.liveUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="text-xs font-medium text-primary hover:text-primary-dark transition-colors">
							Live Demo →
						</a>
					)}
					{project.githubUrl && (
						<a
							href={project.githubUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="text-xs font-medium text-text-muted hover:text-text transition-colors">
							GitHub →
						</a>
					)}
				</div>
			</div>
		</div>
	);
}

export default ProjectCard;
