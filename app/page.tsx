import IconAtTheRate from "./ui/icons/svg/iconAtTheRate";
import IconGitHub from "./ui/icons/svg/iconGitHub";
import IconGlobe from "./ui/icons/svg/iconGlobe";
import IconLinkedIn from "./ui/icons/svg/iconLinkedIn";
import IconTelephone from "./ui/icons/svg/iconTelephone";
import IconBrandX from "./ui/icons/svg/iconX";

const skillsets = [
	"JavaScript",
	"TypeScript",
	"React/Next.js",
	"TailwindCSS/Shadcn",
	"Firebase/Supabase/Pinecone/MySQl/Postgres",
	"Node.js/Express.js",
	"Python",
	"C/C++",
	"Docker",
	"Azure/Google Cloud",
];

const projects = [
	{
		name: "DoppelgAInger",
		url: "https://www.youtube.com/watch?v=swwLsut_vIA",
		citations: [
			{
				id: "youtube",
				url: "https://www.youtube.com/watch?v=swwLsut_vIA",
			},
		],
		highlights: [
			"Developed the frontend and backend from scratch for a feature that auto-scrolls and scrapes tweets from a Twitter profile through a chrome extension to build an AI clone modeled after the individual, trained on the scraped tweets.",
			"Users can integrate their social media profiles and relevant links on their doppelgainger page, serving as a link-in-bio service, enhanced with a chatbot that mimics the user's Twitter account using Retrieval-Augmented Generation (RAG), psychology based schemas and prompting techniques. Over 3300 doppelgaingers built till date",
		],
		tags: [
			"Typescript",
			"Pinecone/Turbopuffer",
			"Firebase",
			"Express",
			"Next.js",
			"Mixtral-8x7B-Instruct-v0.1",
			"Claude 3",
		],
	},
	{
		name: "Apes & AI ",
		url: "https://www.producthunt.com/products/apes-and-ai-aaa",
		badges: [
			<a
				key="producthunt"
				href="https://www.producthunt.com/products/apes-and-ai-aaa/awards"
			>
				<span className="py-0.5 px-2 inline-flex items-center gap-x-1 text-xs font-medium rounded-full bg-amber-300/10 text-amber-500">
					#3 Product of the Day
				</span>
			</a>,
		],
		citations: [
			{
				id: "producthunt",
				url: "https://www.producthunt.com/products/apes-and-ai-aaa",
			},
			{
				id: "playstore",
				url: "https://play.google.com/store/apps/details?id=com.apesandai.app&hl=en&gl=US",
			},
			{
				id: "appstore",
				url: "https://apps.apple.com/in/app/apes-and-ai/id6451095625?at=1000l6eA",
			},
		],
		highlights: [
			"Solo developer responsible for building the back-end infrastructure from the ground up. Implemented a feed builder algorithm and functionalities for liking, commenting, reposting, tagging and push notifications.",
			"Utilized prompt engineering to develop and integrate over 30 AI-based bots, designed to post content, reply to users, and actively engage through an, ranking-based algorithm, managed and executed via cron jobs.",
		],
		tags: [
			"Typescript",
			"Express",
			"Next.js",
			"Algolia",
			"Firebase",
			"gpt-4-1106-preview",
		],
	},
	{
		name: "Url Preview",
		url: "https://www.youtube.com/watch?v=G6PoIw52JxQ",
		citations: [],
		highlights: [
			'Developed the "Link Preview" feature from concept to implementation, enabling users to preview the essence of hyperlinked content without navigating away from the current page.',
			"Implemented an efficient scraping mechanism to extract info from the user's end via a service worker. Also built a robust prompt mechanism to generate summaries with retries and error handlings",
			"The LLM generated summaries are elegantly displayed in a floating window, serving over 2000 daily active users",
		],
		tags: ["Plasmo", "Express", "Next.js", "gpt-3.5-turbo-16k"],
	},
	{
		name: "Leonardo Notification Alert System",
		citations: [],
		highlights: [
			"Developed a system for optimizing traffic distribution to the Leonardo AI service, ensuring balanced API key usage. Implemented a monitoring mechanism to detect API keys nearing usage limits or token expiration, with critical alerts sent through a designated Slack channel, resulting in a reduction of error rates by a factor of 14.",
		],
		tags: ["Google Big Query", "Express", "Log Based metrics", "Slack API"],
	},
	{
		name: "Integrated DALLE.2 & DALLE.3 API",
		citations: [],
		highlights: [
			"Integrated the newly launched DALL·E 2 and DALL·E 3 APIs, enabling users to harness the capabilities of OpenAI's DALL·E to create and refine images using text",
		],
		tags: ["Express", "Next.js", "DALL·E 2", "DALL·E 3"],
	},
];

export default function Home() {
	return (
		<main className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-12 md:p-16">
			<section className="mx-auto w-full max-w-3xl space-y-8 bg-white print:space-y-6">
				<div className="flex items-center justify-between">
					<div className="flex-1 space-y-1.5">
						<h1 className="text-4xl font-bold">Atharva Rane</h1>
						<p className="max-w-md text-pretty font-mono text-sm text-muted-foreground">
							Code Craftsmanship Catalyst
						</p>
						<p className="max-w-md items-center text-pretty font-mono text-xs text-muted-foreground">
							<a
								className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline "
								href="https://www.google.com/maps/place/Mumbai"
								target="_blank"
								rel="noreferrer"
							>
								<IconGlobe />
								Mumbai, India
							</a>
						</p>
						<div className="flex gap-x-1 pt-1 font-mono text-sm text-muted-foreground print:hidden">
							<a
								href="mailto:work.atharane@gmail.com"
								className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground size-8"
							>
								<IconAtTheRate />
							</a>
							<a
								href="tel:+919321662301"
								className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground size-8"
							>
								<IconTelephone />
							</a>
							<a
								href="https://github.com/atharane"
								className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground size-8"
							>
								<IconGitHub />
							</a>
							<a
								href="https://www.linkedin.com/in/atharane"
								className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground size-8"
							>
								<IconLinkedIn />
							</a>
							<a
								href="https://x.com/atharane"
								className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground size-8"
							>
								<IconBrandX />
							</a>
						</div>
					</div>
					<span className="relative flex shrink-0 overflow-hidden rounded-xl size-28">
						{/* <img
              className="aspect-square h-full w-full"
              alt="Bartosz Jarocki"
              src="https://avatars.githubusercontent.com/u/1017620?v=4"
            /> */}
					</span>
				</div>
				<section className="flex min-h-0 flex-col gap-y-3">
					<h2 className="text-xl font-bold">About</h2>
					<p className="text-pretty font-mono text-sm text-muted-foreground">
						A Full Stack Engineer, dedicated to developing robust products and
						composing elegant, refined code. With a keen eye for problem-solving
						and a builder&apos;s mindset, I thrive on tackling challenges and
						delivering innovative solutions. Continuous learning is my guiding
						principle, as I actively explore new ideas and technologies.
					</p>
				</section>
				<section className="flex min-h-0 flex-col gap-y-3">
					<h2 className="text-xl font-bold">Work Experience</h2>
					<div className="rounded-lg bg-card text-card-foreground mb-12">
						<div className="flex flex-col space-y-1.5">
							<div className="flex items-center justify-between gap-x-2 text-base whitespace-pre-wrap flex-wrap">
								<h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
									<a
										className="hover:underline"
										href="https://www.getmerlin.in"
									>
										Merlin by Foyer
									</a>
								</h3>
								<div className="text-sm tabular-nums text-gray-500">
									May 2023 - March 2024
								</div>
							</div>
							<h4 className="font-mono text-sm leading-none">
								Full Stack Developer Intern
							</h4>
						</div>

						<div className="-mx-2 mt-3 grid grid-cols-1 md:grid-cols-2 gap-3 print:grid-cols-3 print:gap-2">
							{projects.map((project, index) => {
								return (
									<div
										key={project.name}
										// spread last item to take up 2 columns, if uneven
										className={`rounded-lg bg-card text-card-foreground flex flex-col overflow-hidden border border-muted p-3
                      ${
												index % 2 === 0 && index === projects.length - 1
													? "md:col-span-2"
													: ""
											}
                    `}
									>
										<div className="flex flex-col space-y-1.5">
											<div className="space-y-1">
												<h3 className="font-semibold tracking-tight text-base">
													{project.url ? (
														<a
															href={project.url}
															target="_blank"
															rel="noreferrer"
															className="inline-flex items-center gap-1 hover:underline text-slate-800 mb-2"
														>
															{project.name}
															<span className="size-1 rounded-full bg-green-500" />
														</a>
													) : (
														<span className="inline-flex items-center gap-1 text-slate-800 mb-2">
															{project.name}
														</span>
													)}
													<span className="ml-2">
														{project.badges?.map((badge) => badge)}
													</span>
												</h3>
												<ul className="list-disc list-inside">
													{project.highlights.map((highlight) => (
														<li
															className="text-muted-foreground font-mono text-xs mb-2 text-slate-700"
															key={highlight}
														>
															{highlight}
														</li>
													))}
												</ul>
											</div>
										</div>
										<div className="text-pretty font-mono text-sm text-muted-foreground mt-auto flex">
											<div className="mt-2 flex flex-wrap gap-1">
												{project?.tags?.map((tag) => {
													return (
														<div
															key={tag}
															className="inline-flex items-center rounded-md border font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/60 px-1 py-0 text-[10px]"
														>
															{tag}
														</div>
													);
												})}
											</div>
										</div>
									</div>
								);
							})}
						</div>
					</div>
					<div className="rounded-lg bg-card text-card-foreground">
						<div className="flex flex-col space-y-1.5">
							<div className="flex items-center justify-between gap-x-2 text-base whitespace-pre-wrap flex-wrap">
								<h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
									<a
										className="hover:underline"
										href="https://www.linkedin.com/company/digitalprudentia"
									>
										Digital Prudentia
									</a>
									<span className="inline-flex gap-x-1">
										<div className="inline-flex items-center rounded-md border px-2 py-0.5 font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/60 align-middle text-xs">
											Remote
										</div>
									</span>
								</h3>
								<div className="text-sm tabular-nums text-gray-500">
									May 2023 - April 2024
								</div>
							</div>
							<h4 className="font-mono text-sm leading-none">
								Full Stack Developer Intern
							</h4>
						</div>
						<div className="text-pretty font-mono text-muted-foreground mt-2 text-xs">
							<ul className="list-disc list-inside">
								<li className="text-muted-foreground font-mono text-xs mb-2 text-slate-700">
									Built a dynamic&nbsp;
									<a
										href="https://digiprudash.azurewebsites.net"
										target="_blank"
										rel="noreferrer"
										className="underline"
									>
										PERN stack dashboard
									</a>
									&nbsp;secured with single sign-on via Azure Active Directory,
									utilizing Azure Database for PostgreSQL and Azure Container
									Registry for managing Docker containers.
								</li>
								<li className="text-muted-foreground font-mono text-xs mb-2 text-slate-700">
									Developed scalable and efficient serverless backend using
									Azure Functions.
								</li>
							</ul>
						</div>
					</div>
				</section>

				{/* skillset */}
				<section className="flex min-h-0 flex-col gap-y-3">
					<h2 className="text-xl font-bold">Skills</h2>
					<div className="flex flex-wrap gap-1">
						{skillsets.map((skillset) => {
							return (
								<div
									key={skillset}
									className="inline-flex items-center rounded-md border border-transparent px-2 py-0.5 text-xs font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap  bg-primary/80 text-primary-foreground hover:bg-primary/60"
								>
									{skillset}
								</div>
							);
						})}
					</div>
				</section>

				{/* projects */}
				<section className="flex min-h-0 flex-col gap-y-3 print-force-new-page scroll-mb-16">
					<h2 className="text-xl font-bold">Extracurricular</h2>
					<div className="-mx-3 grid grid-cols-1 gap-3 print:grid-cols-3 print:gap-2">
						<div className="rounded-lg bg-card text-card-foreground flex flex-col overflow-hidden border border-muted p-3">
							<div className="flex flex-col space-y-1.5">
								<div className="space-y-1">
									<h3 className="font-semibold tracking-tight text-base">
										<span className="inline-flex items-center gap-1">
											Content Lead, Tantrafiesta
										</span>
									</h3>
									<p className="text-muted-foreground font-mono text-xs">
										Oversaw the strategic efforts of creating messaging for
										Tantrafiesta, college&apos;s annual technical festival.
										Created and delivered promotional emails, brochures,
										newsletters, and social media posts to attract audiences.
									</p>
								</div>
							</div>
						</div>

						<div className="rounded-lg bg-card text-card-foreground flex flex-col overflow-hidden border border-muted p-3">
							<div className="flex flex-col space-y-1.5">
								<div className="space-y-1">
									<h3 className="font-semibold tracking-tight text-base">
										<span className="inline-flex items-center gap-1">
											Web Development Core Team Member, Google Developer Student
											Club IIITN
										</span>
									</h3>
									<p className="text-muted-foreground font-mono text-xs">
										Responsible for organizing hackathons and speaker sessions,
										mentoring over 240 students through Web Development
										Bootcamps, and instilling a developer mindset in emerging
										developers.
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* education */}
				<section className="flex min-h-0 flex-col gap-y-3">
					<h2 className="text-xl font-bold">Education</h2>
					<div className="rounded-lg bg-card text-card-foreground">
						<div className="flex flex-col space-y-1.5">
							<div className="flex items-center justify-between gap-x-2 text-base whitespace-pre-wrap flex-wrap">
								<h3 className="font-semibold leading-none">
									Indian Institute of Information Technology, Nagpur
								</h3>
								<div className="text-sm tabular-nums text-gray-500">
									November, 2020 - May, 2024
								</div>
							</div>
						</div>
						<div className="text-pretty font-mono text-sm text-muted-foreground mt-2">
							Bachelor of Technology in Computer Science and Engineering
						</div>
					</div>
				</section>
			</section>

			{/* <p className="fixed bottom-0 left-0 right-0 hidden border-t border-t-muted bg-white p-1 text-center text-sm text-muted-foreground print:hidden xl:block">
        Press{" "}
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          <span className="text-xs">⌘</span>J
        </kbd>{" "}
        to open the command menu
      </p>
      <button className="items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10 fixed bottom-4 right-4 flex rounded-full shadow-2xl print:hidden xl:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-command my-6 size-6"
        >
          <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"></path>
        </svg>
      </button> */}
		</main>
	);
}
