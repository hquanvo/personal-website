function NavBar() {
    return (
        <div class = "flex justify-between text-xl bg-sky-500">
        <div class = "flex items-center sm:m-4 md:m-8 p-2 hover:text-neutral-50">
            <a href = "/">
            Hoang Quan Vo
            </a>
        </div>
        <div class ="flex flex-row  justify-end bg-sky-500 text-slate-900">
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