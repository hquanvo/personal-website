function About() {
    return (
        <div class= "min-h-[64rem] flex justify-center items-center bg-gradient-to-b from-sky-400 to-blue-300" id="about">  
            <div class = "flex flex-col min-h-[28rem] xl:w-3/5 justify-between bg-neutral-200 p-8 rounded-md">
                <div class = "flex justify-center font-semibold text-4xl mb-6 lg:m-4" > About Me</div>
                <div class = "lg:flex h-2/3 justify-around">
                    <div class = "lg:w-72 flex justify-center items-center shrink-0">
                        <img src = "./hqv.jpg" class = ""></img>
                    </div>
                    <div class = "lg:w-3/5 text-2xl md:text-xl *:text-center m-8">
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