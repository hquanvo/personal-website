function NavBar() {
    return (
        <div class = "flex justify-between text-xl bg-sky-400">
        <div class = "flex items-center sm:m-4 md:m-8 p-2 hover:text-neutral-50">
            <a href = "/personal-website/">
            Hoang Quan Vo
            </a>
        </div>
        <div class ="flex items-center justify-end text-slate-900 *:text-center">
            <div class = "basis-4 m-4 hover:text-neutral-50">
                <a href="#about">About</a> 
            </div>
            <div class = "basis-4 m-4 hover:text-neutral-50"> <a href="#skills">Skills</a></div>
            <div class = "basis-4 m-4 hover:text-neutral-50"> <a href="#projects">Projects</a></div> 
        </div>
        </div>
    )
}

export default NavBar