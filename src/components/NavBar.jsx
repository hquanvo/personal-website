function NavBar() {
    return (
        <div class ="flex flex-row  justify-end text-xl bg-sky-500 text-slate-900">
            <div class = "basis-4 m-4 p-2 border-4 rounded-full hover:bg-blue-500 hover:text-neutral-50">
                <a href="#about">About</a> 
            </div>
            <div class = "basis-4 m-4 p-2 border-4 rounded-full hover:bg-blue-500 hover:text-neutral-50"> <a href="#skills">Skills</a></div>
            <div class = "basis-4 m-4 p-2 border-4 rounded-full hover:bg-blue-500 hover:text-neutral-50"> <a href="#projects">Projects</a></div> 
        </div>
    )
}

export default NavBar