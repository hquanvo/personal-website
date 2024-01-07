function Skills() {
    return (
        <div class = "flex flex-col min-h-[420px] items-center p-8" id="skills"> 
            <div class = "w-full text-center text-4xl font-semibold" >Skills</div>
            <div class = "flex w-2/3 py-6 justify-between text-2xl">
                <div class = "bg-neutral-100 min-w-60 flex flex-col items-center p-10 shadow-md shadow-blue-800/70 hover:shadow-lg hover:shadow-blue-900">
                    <img class = "size-24 flex justify-center" src = "/binary-code.png"></img>
                    <div class = "py-4 font-semibold">Languages</div>
                    <ul class = "list-outside list-disc text-xl">
                        <li >Java</li>
                        <li class = "mt-3">JavaScript</li>
                        <li class = "mt-3">HTML/CSS</li>
                        <li class = "mt-3">C/C++</li>
                        <li class = "mt-3">R</li>
                        <li class = "mt-3">SQL</li>
                    </ul>
                </div>
                <div class = "bg-neutral-100 min-w-60 flex flex-col items-center p-10 shadow-md shadow-blue-800/70 hover:shadow-lg hover:shadow-blue-900">
                    <img class = "size-24" src = "/framework.png"></img>
                    <div class = "py-4 font-semibold">Frameworks/Libraries</div>
                    <ul class = "list-outside list-disc text-xl">
                        <li >JUnit</li>
                        <li class = "mt-3">React.js</li>
                        <li class = "mt-3">Node.js</li>
                        <li class = "mt-3">Tailwind CSS</li>
                    </ul>
                </div>
                <div class = "bg-neutral-100 min-w-60 flex flex-col items-center p-10 shadow-md shadow-blue-800/70 hover:shadow-lg hover:shadow-blue-900">
                    <img class = "size-24" src = "/tool-box.png"></img>
                    <div class = "py-4 font-semibold">Development Tools</div>
                    <ul class = "list-outside list-disc text-xl">
                        <li >Visual Studio Code</li>
                        <li class = "mt-3">Visual Studio</li>
                        <li class = "mt-3">PyCharm</li>
                        <li class = "mt-3">IntelliJ</li>
                        <li class = "mt-3">JupyterHub</li>
                        <li class = "mt-3">Git</li>
                        <li class = "mt-3">GitHub</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Skills