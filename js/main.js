const main = document.getElementById('main-body')
const about = document.getElementById('about')
const work = document.getElementById('work')
const skill = document.getElementById('skill')
const contact = document.getElementById('contact')


const aboutDetails = ()=>{

    const mainDiv = document.createElement('div')
    const aboutContent = `
        <div class="about-details" id="work">
            <h3>
                <span>I</span>M
                <br />
                MOHAMMAD<span> SOMON SIKDER</span>
            </h3>
            <p>
                I'm a <span>Full Stack Web Developer</span> with a focus on the
                <span>MERN</span> stack, but still exploring other technologies and
                frameworks that catch my interest! if you're looking for a developer
                to add to your team, I'd love to hear from you!
            </p>
            <div>
                <a href="../images/1 CV of Somon.pdf" download>
                <button class='download-btn'>Download CV</button>
                </a>
            </div>

        </div>
    
    `
    mainDiv.innerHTML = aboutContent
    main.appendChild(mainDiv)

}

const workDetails =()=>{
    const mainDiv = document.createElement('div')
    const workContent = `
        <div class='work-section'>
            <h2 class='title-work'>Work</h2>
            <div class="work-container">
                <div class="work-img">
                    <img src="images/work1.png" alt="">
                    <div class="work-link">
                        <a target='_blank' href="https://somonsikder.github.io/bootstrap-website/" class="work-link-name">Visit Website</a>
                    </div>
                </div>
                <div class="work-img">
                    <img src="images/work2.png" alt="">
                    <div class="work-link">
                        <a target='_blank' href="https://somonsikder.github.io/simple-banking-website-js/main.html" class="work-link-name">Visit Website</a>
                    </div>
                </div>
                <div class="work-img">
                    <img src="images/work3.png" alt="">

                    <div class="work-link">
                        <a target='_blank' href="https://determined-kepler-022561.netlify.app/" class="work-link-name">Visit Website</a>
                    </div>
                </div>
                <div class="work-img">
                    <img src="images/work4.png" alt="">
                    <div class="work-link">
                        <a target='_blank' href="https://somonsikder.github.io/colorFood/" class="work-link-name">Visit Website</a>
                    </div>
                </div>
                <div class="work-img">
                    <img src="images/work5.png" alt="">
                    <div class="work-link">
                        <a target='_blank' href="https://affectionate-feynman-432c76.netlify.app/" class="work-link-name">Visit Website</a>
                    </div>
                </div>
                <div class="work-img">
                    <img src="images/work6.png" alt="">
                    <div class="work-link">
                        <a target='_blank' href="https://somonsikder.github.io/penguin-fashion-tailwind/" class="work-link-name">Visit Website</a>
                    </div>
                </div>
                
            </div>
        </div>
        
    
    `
    mainDiv.innerHTML = workContent
    main.appendChild(mainDiv)
}

const skillsDetails = () =>{
    const mainDiv = document.createElement('div')
    const skillsContent = `
        <div class='progress-section'>
            <div class='progress-title'>
                <h2>Skills</h2>
            </div>
            <div class='progress-item'>
                <div class='progress-info'>
                    <img class='icon' src='../icon/html.svg' alt=''/>
                    <div class='progress-bar'></div>
                </div>
                <small class='progress-num'>90%</small>
            </div>
            <div class='progress-item'>
                <div class='progress-info'>
                    <img class='icon' src='../icon/css.svg' alt=''/>
                    <div class='progress-bar-css'></div>
                </div>
                <small class='progress-num'>80%</small>
            </div>
            <div class='progress-item'>
                <div class='progress-info'>
                    <img class='icon' src='../icon/bootstrap-4.svg' alt=''/>
                    <div class='progress-bar-css'></div>
                </div>
                <small class='progress-num'>80%</small> 
            </div>
            <div class='progress-item'>
                <div class='progress-info'>
                    <img class='icon' src='../icon/tailwind-css.svg' alt=''/>
                    <div class='progress-bar-css'></div>
                </div>
                <small class='progress-num'>80%</small> 
            </div>
            <div class='progress-item'>
                <div class='progress-info'>
                    <img class='icon' src='../icon/js.svg' alt=''/>
                    <div class='progress-bar-js'></div>
                </div>
                <small class='progress-num'>60%</small>
            </div>
            <div class='progress-item'>
                <div class='progress-info'>
                    <img class='icon' src='../icon/react-js.svg' alt=''/>
                    <div class='progress-bar-other'></div>
                </div>
                <small class='progress-num'>55%</small>
            </div>
            <div class='progress-item'>
                <div class='progress-info'>
                    <img class='icon' src='../icon/node-js.svg' alt=''/>
                    <div class='progress-bar-other'></div>
                </div>
                <small class='progress-num'>55%</small>
            </div>
            <div class='progress-item'>
                <div class='progress-info'>
                    <img class='icon' src='../icon/mongodb-icon.svg' alt=''/>
                    <div class='progress-bar-other'></div>
                </div>
                <small class='progress-num'>55%</small>
            </div>                                   
        </div>
    
    `
    mainDiv.innerHTML = skillsContent
    main.appendChild(mainDiv)
}

const contactDetails = () =>{
    const mainDiv = document.createElement('div')
    const skillsContent = `
        <div class="contact-section">
            
            <div class="input-area">
                <h2 class="title">Contact Me</h2>
                <div class="inputBox">
                    <input type="text" required>
                    <p>Your Name</p>
                </div>

                <div class="inputBox">
                    <input type="email" required>
                    <p>Email</p>
                </div>

                <div class="inputBox">
                    <textarea name="" id="" cols="30" rows="10" required></textarea>
                    <p>Message</p>
                </div>

                <input type="submit" value="Send">
            </div>
            
        </div>
    
    `
    mainDiv.innerHTML = skillsContent
    main.appendChild(mainDiv)
}

const nav = ["about", "work","skill","contact"]
for(const li of nav){
    const a = document.getElementById(li)
    a.addEventListener('click', ()=>{
        a.classList.add('active') 
    })
}

// added eventListener
about.addEventListener('click', (e)=>{
    main.innerHTML = ''
    e.preventDefault()
    aboutDetails()
})
work.addEventListener('click', (e)=>{
    main.innerHTML = ''
    e.preventDefault()
    workDetails()

})
skill.addEventListener('click', (e)=>{
    main.innerHTML = ''
    e.preventDefault()
    skillsDetails()
})

contact.addEventListener('click', (e)=>{
    main.innerHTML = ''
    e.preventDefault()
    contactDetails()
    contact
})

// about section alwys be swon

aboutDetails()


// ==================
