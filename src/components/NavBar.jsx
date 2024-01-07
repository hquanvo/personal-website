function NavBar() {
    return (
        <div class ="flex flex-row  justify-end text-xl bg-sky-500 ">
            <div class = "basis-4 m-4">
                <a href="#about">About</a> 
            </div>
            <div class = "basis-4 m-4"> <a href="#skills">Skills</a></div>
            <div class = "basis-4 m-4"> <a>Projects</a></div> 
        </div>
    )
}

export default NavBar