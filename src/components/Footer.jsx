function Footer() {
    return (
        <div class = "flex flex-col items-center text-center bg-gradient-to-b from-blue-400 to-sky-500"> 
            <div class = "font-semibold text-4xl">Let's Collaborate</div>
            <div class = "h-72 p-16">
                <div class = "text-2xl *:mr-4 flex items-center">
                    <span class = "mr-4">Connect with me through:</span>
                    <a href="https://www.linkedin.com/in/hoang-quan-vo-5a8050217/" class = "hover:underline">
                        <span>
                            <img src = "./icons/linkedin.svg" class = "size-8 inline"></img>
                        </span>
                        <span>LinkedIn</span>
                    </a>
                    <span>•</span>
                    <a href="https://github.com/hquanvo" class = "hover:underline">
                        <span >
                            <img src = "./icons/github.svg" class = "size-8 inline"></img>
                        </span>
                        <span>GitHub</span>
                    </a>
                </div>
                <div class = "mt-8 text-xl *:mr-2">
                    <span>Built with:</span>
                    <a href="https://react.dev/" class = "hover:underline">
                        <span class = "mr-2">
                            <img src = "./icons/react.svg" class = "size-6 inline"></img> 
                        </span>
                        <span>React.js</span>
                    </a>
                    <span>•</span>
                    <a href="https://tailwindcss.com/" class = "hover:underline">
                        <span class = "mr-2">
                            <img src = "./icons/tailwind.svg" class = "size-6 inline"></img> 
                        </span>
                        <span>Tailwind CSS</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer