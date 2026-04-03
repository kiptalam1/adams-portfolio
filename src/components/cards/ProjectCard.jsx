import { useState } from "react";

function ProjectCard({ project }) {
	const [isExpanded, setIsExpanded] = useState(false);
	const [isHovered, setIsHovered] = useState(false);
	const [isImageModalOpen, setIsImageModalOpen] = useState(false);

	const shouldTruncate = project.description.length > 100;
	const displayDescription =
		isExpanded ? project.description : project.description.slice(0, 100);

	console.log(project.image);
	
	
	return (
		<>
			<div
				className="rounded-xl bg-surface shadow-lg hover:shadow-xl transition-all duration-300 shadow-bg flex flex-col h-110 overflow-hidden border border-border/50 hover:border-border group py-2"
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}>
				{/* image container */}
				<div
					onClick={() => setIsImageModalOpen(true)}
					className="relative h-48 overflow-hidden bg-gray-100">
					<img
						loading="lazy"
						className={`w-full h-full object-cover transition-transform duration-500 ease-in-out ${isHovered ? "scale-105" : "scale-100"}`}
						src={project.image}
						alt={project.title}
					/>
					{/* gradient overlay */}
					<div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
						<svg
							className="w-8 h-8 text-white transform scale-90 group-hover:scale-100 transition-transform duration-300 "
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
							/>
						</svg>
					</div>
				</div>

				{/* content container */}
				<div className="flex flex-col grow p-4 space-y-3">
					<h3 className="text-base font-semibold font-inter  line-clamp-1 px-2">
						{project.title}
					</h3>
					{/* tech stack */}
					<div className="flex items-center flex-wrap gap-2 px-1">
						{project.tech.slice(0, 4).map((t) => (
							<span
								key={t}
								className="text-xs bg-surface-muted rounded-full px-2.5 py-0.5 font-medium text-text-muted ">
								{t}
							</span>
						))}
						{project.tech.length > 4 && (
							<span className="text-xs text-text-muted">
								+{project.tech.length - 4}
							</span>
						)}
					</div>
					{/* description */}
					<div className="grow px-1">
						<p className={`text-sm px-1 text-text-muted leading-relaxed`}>
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

					{/* Action Buttons */}
					<div className="flex gap-4 pt-0.5 items-center px-2">
						{project.liveUrl && (
							<a
								href={project.liveUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="text-xs font-medium text-primary hover:text-primary-hover transition-colors">
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
			{/* image modal */}
			{isImageModalOpen && (
				<div
					className="fixed inset-0 z-50 bg/black/90 backdrop-blur-sm animate-fadeIn flex items-center justify-center"
					onClick={() => setIsImageModalOpen(false)}>
					<div className="relative max-w-5xl max-h-[90vh] m-4">
						{/* close modal button */}
						<button
							onClick={() => setIsImageModalOpen(false)}
							className="absolute -top-12 right-0 text-gray-400 hover:text-gray-300 transition-colors duration-200 cursor-pointer"
							aria-label="Close modal">
							<svg
								className="w-8 h-8"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						</button>
						{/* image */}
						<img
							className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
							src={project.image}
							alt={project.title}
						/>
						{/* caption */}
						<div className="absolute bottom-0 left-0 right-0 rounded-b-lg bg-linear-to-t from-black/80 to-transparent p-4">
							<h3 className="font-semibold text-lg text-white font-inter">
								{project.title}
							</h3>
							<p className="text-white/80 text-sm mt-1">
								Click anywhere to close
							</p>
						</div>
					</div>
				</div>
			)}
		</>
	);
}

export default ProjectCard;
