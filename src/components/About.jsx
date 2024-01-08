function About() {
    return (
        <div class= "min-h-[64rem] flex justify-center items-center bg-gradient-to-b from-sky-500 to-blue-400" id="about">  
            <div class = "flex flex-col min-h-[28rem] w-3/5 justify-between bg-neutral-200 p-8 rounded-md">
                <div class = "flex justify-center font-semibold text-4xl" > About Me</div>
                <div class = "flex h-2/3 justify-around">
                    <div class = "w-72 flex justify-center items-center aspect-square shrink-0">
                        <img src = "./hqv.jpg" class = "size-72"></img>
                    </div>
                    <div class = "w-3/5 text-xl">
                        <p>
                        Hey there, I'm Hoang Quan Vo. I'm currently an undergraduate Computer Science student at 
                        the University of British Columbia. I aim to be a software engineer, but
                        I'm also expanding my skills in game development,
                        machine learning and web development.
                        </p>
                        <br></br>
                        <p>
                        I really love solving difficult questions. Creating complex projects is what drives me to
                        pursue this field. Once I'm hooked on a challenge, there is nothing that could make me stay
                        away from the problem.
                        </p>
                        <p>
                        <br></br>
                        Outside of school, I'm passionate about video games. Some of my favorite genres include
                        role-playing, strategy, puzzle and tower defense.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About