
function ProjectCard({ project }) {
	return (
		<div
			className="rounded-lg bg-surface shadow-md shadow-bg space-y-2 h-80 overflow-y-hidden"
			key={project.title}>
			<div className="w-full h-1/2 rounded-lg border-b border-border">
				<img className="w-full h-full rounded-lg" src={project.image} />
			</div>
			<div className="px-2">
				<h3 className="text-base font-semibold font-inter">{project.title}</h3>
			</div>
			<div className="flex items-center flex-wrap gap-3 px-2">
				{project.tech.map((t) => (
					<span
						key={t}
						className="text-xs bg-surface-muted rounded-lg px-2 text-text-muted">
						{t}
					</span>
				))}
			</div>
			<div className="text-sm px-2 truncate whitespace-pre-wrap">
				{project.description}
			</div>
		</div>
	);
}

export default ProjectCard;
