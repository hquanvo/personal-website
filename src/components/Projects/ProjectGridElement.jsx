function ProjectGridElement(props) {
    const imgPath = props.path;
    const projectTitle = props.title;
    const demoLink = props.demo;
    const githubLink = props.github;
    const desc = props.desc;

    const createTitleComponent = () => {
        if (demoLink === "") {
            return (
                <>
                <div class = "flex">
                        <div class = "font-semibold text-2xl text-slate-900 font-semibold">{projectTitle}</div>
                        <div class = "self-end">
                        <a href={githubLink} class="ml-4 underline hover:text-blue-300">GitHub</a>
                        </div>
                </div>
                </>
            )
        }
        return (
            <>
            <div class = "flex">
                        <div class = "font-semibold text-2xl text-slate-900 font-semibold">{projectTitle}</div>
                        <div class = "self-end">
                            <a href={demoLink} class="ml-4 underline hover:text-blue-300">Demo</a>
                        </div>
                        <div class = "self-end">
                        <a href={githubLink} class="ml-4 underline hover:text-blue-300">GitHub</a>
                        </div>
                </div>
            </>
        )
    }
    return (
        <div>
                <div>
                    <img class = "h-40 w-full object-cover border-b-2 border-slate-700" src={imgPath}></img>
                </div>
                <div class = "p-4 text-left *:mb-4">
                    {createTitleComponent()}
                    <p class = "truncate font-normal text-slate-500 text-wrap">
                        {desc}
                    </p>
                </div>
            </div>
    )
}



export default ProjectGridElement;