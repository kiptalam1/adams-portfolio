const productsImage = new URL("../assets/products.png", import.meta.url).href;
const housekonektImage = new URL("../assets/housekonekt.png", import.meta.url)
	.href;
const projostackImage = new URL("../assets/workspaces.png", import.meta.url)
	.href;

const projectsData = [
	{
		title: "ProjoStack",
		description:
			"A multi-tenant workspace management platform — Users manage workspaces, projects, tasks, and team members with role-based access control. It features workspace invitations, task assignments, and project tracking across multiple organizations.",
		tech: ["React", "Express", "PostgreSQL", "TailwindCSS", "Typescript"],
		image: projostackImage,
		liveUrl: "https://projostack.onrender.com/",
		githubUrl: "https://github.com/kiptalam1/projostack",
	},
	{
		title: "HouseKonekt",
		description:
			"A property listing and tenant-landlord communication platform — Landlords post apartments with details and images. Tenants browse listings, filter by location/price/type, and chat directly with landlords to streamline the house-hunting process.",
		tech: [
			"React",
			"Express",
			"Socket.IO",
			"PostgreSQL",
			"TailwindCSS",
			"Typescript",
		],
		image: housekonektImage,
		liveUrl: "https://housekonekt.onrender.com/",
		githubUrl: "https://github.com/kiptalam1/housekonekt",
	},
	{
		title: "Malibaze",
		description:
			"A full-featured e-commerce platform — Complete online store with product catalog, shopping cart, user authentication, order management, and admin processing.",
		tech: ["React", "Express", "MongoDB", "TailwindCSS", "Typescript"],
		image: productsImage,
		liveUrl: "https://malibazee.onrender.com/",
		githubUrl: "https://github.com/kiptalam1/malibaze",
	},
];

export default projectsData;
