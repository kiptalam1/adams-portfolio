import projectsData from "../data/projects.js";
import ProjectCard from "./cards/ProjectCard";

function Projects() {
	return (
		<section className="space-y-4 max-w-4xl mx-auto">
			<h2 className="text-2xl font-semibold">Featured Projects</h2>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
				{projectsData.map((p) => (
					<ProjectCard key={p.title} project={p} />
				))}
			</div>
		</section>
	);
}

export default Projects;
