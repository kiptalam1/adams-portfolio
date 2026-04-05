import { SiGithub, SiMailgun } from "react-icons/si";
import { SlSocialLinkedin } from "react-icons/sl";

export default function Contacts() {
	return (
		<section className="max-w-4xl mx-auto space-y-4 py-10">
			<h2 className="text-2xl font-semibold">Let's Connect</h2>
			<p className="text-base">
				If you are interested in working together or just want to chat about
				tech, kindly reach out!
			</p>
			<div className="flex gap-3 items-center">
				<span className="flex gap-2 items-center bg-surface-muted p-2 text-text-muted rounded-lg border border-border hover:border-accent/70 transition-colors duration-200 cursor-pointer">
					<SiMailgun size={14} />
					<a href="mailto:adamskiptalam0@gmail.com">Email →</a>
				</span>

				<span className="flex gap-2 items-center bg-surface-muted p-2 text-text-muted rounded-lg border border-border hover:border-accent/70 transition-colors duration-200 cursor-pointer">
					<SiGithub size={14} />
					<a href="https://github.com/kiptalam1">GitHub →</a>
				</span>

				<span className="flex gap-2 items-center bg-surface-muted p-2 text-text-muted rounded-lg border border-border hover:border-accent/70 transition-colors duration-200 cursor-pointer">
					<SlSocialLinkedin color="#0A66C2" size={14} />
					<a href="https://linkedin.com/in/adams-kiptalam">LinkedIn →</a>
				</span>
			</div>
		</section>
	);
}
