function Projects() {
    return (
        <>
        <div class ="w-full text-center text-4xl font-semibold" id = "projects">Projects</div>
        <div class = "*:border-solid *:border-4 *:border-neutral-700 *:bg-gradient-to-br from-zinc-100 to-stone-100 *:text-center *:rounded *:w-2/3 *:h-5/6 grid grid-cols-3 grid-rows-3 gap-10 justify-items-center py-6 place-items-center h-[60rem]"> 
            <div class = "hover:">
                <div>
                    <img class = "h-20 w-full object-cover" src="./project-snapshots/calculator.png"></img>
                </div>
                <div class = "p-4 text-left">
                    <div class = "font-semibold text-2xl text-slate-900 font-semibold">Calculator</div>
                    <p class = "truncate font-normal text-slate-500 text-wrap">
                        A calculator web app written using JavaScript and styled using
                        HTML and CSS, with keyboard support.
                    </p>
                    <div class = "flex">
                        <a href="https://hquanvo.github.io/calculator/" class="underline hover:text-blue-300">Demo</a>
                        <a href="https://github.com/hquanvo/calculator" class="ml-4 underline hover:text-blue-300">GitHub</a>
                    </div>
                </div>
            </div>
            <div>Item2</div>
            <div>Item3</div>
            <div>Item4</div>
            <div>Item5</div>
            <div>Item6</div>
            <div>Item7</div>
            <div>Item8</div>
            <div>Item9</div>
        </div>
        </>
    )
}

export default Projects