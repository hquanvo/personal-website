import ProjectChildElement from "./ProjectChildElement"

function Projects() {
    return (
        <div class="bg-gradient-to-b from-sky-200 to-blue-300">

            <div class ="w-full text-center text-4xl font-semibold" id = "projects">
                <div>Projects</div>
                <p class = "text-2xl md:text-xl mt-2 font-normal text-slate-700">Here are some projects that I have worked on recently.</p>
            </div>

            <div class = "*:border-solid *:border-4 *:border-neutral-700 *:bg-gradient-to-br from-zinc-100 to-stone-100 *:text-center *:rounded *:w-2/3 *:h-5/6 flex flex-col lg:grid lg:grid-cols-2 lg:grid-rows-2 gap-10 justify-items-center py-6 place-items-center lg:min-h-[60rem]"> 
                <ProjectChildElement path = "./project-snapshots/calculator.png" title = "Calculator" 
                                demo = "https://hquanvo.github.io/calculator/"
                                github = "https://github.com/hquanvo/calculator"
                                desc = "A calculator web app built using JavaScript and styled using HTML and CSS. Allow support for keyboard inputs."
                />
                <ProjectChildElement path = "./project-snapshots/rps.png" title = "Rock-Paper-Scissors" 
                                demo = "https://hquanvo.github.io/Rock-Paper-Scissors/"
                                github = "https://hquanvo.github.io/Rock-Paper-Scissors/"
                                desc = "A Rock-Paper-Scissors game built using JavaScript and styled using HTML and CSS."
                />
                <ProjectChildElement path = "./project-snapshots/etch-a-sketch.png" title = "Etch-A-Sketch" 
                                demo = "https://hquanvo.github.io/etch-a-sketch/"
                                github = "https://github.com/hquanvo/etch-a-sketch"
                                desc = "An Etch-A-Sketch simulator built using JavaScript and styled using HTML and CSS."
                />
                <ProjectChildElement path = "./project-snapshots/tracker.png" title = "Expense Tracker" 
                                demo = ""
                                github = "https://github.com/hquanvo/Simple-Expense-Tracker"
                                desc = "An expense tracking app built using only Java. Java Swing library was utilized to develop the UI."
                />
            </div>
        </div>
    )
}

export default Projects