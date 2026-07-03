import Button from "../components/Button";
import GetInTouchButton from "../components/GetInTouchButton";
import RESUME from '../../public/AKANKSHA_DESHWAL_RESUME2026.pdf'

const Hero = ({scrollToLog}) => {
    return ( 
        <div>
            {/* Name */}
            <div>
                <span className="text-xl text-foreground text font-semibold">Akanksha Deshwal</span>, <span className="text-md italic text-muted">Software Engineer</span>
            </div>

            {/* Short Intro */}
            <p className="mt-4 text-muted font-secondary text-sm">I'm a software engineer with a background in entrepreneurship and a curiosity for how technology works beneath the surface.<br /> <br />
Today, I build modern web applications with JavaScript and React, with a strong focus on writing clean, maintainable code and building user-friendly applications. I'm constantly learning, questioning, and exploring not just how to build software, but also understanding the core concepts of technologies behind the code.</p>

{/* CTA */}
<div className="mt-2 font-primary text-foreground text-md">
    Read my <Button btnText='Project Log' btnHandler={scrollToLog} />, <a href={RESUME} download="AKANKSHA_DESHWAL_RESUME.pdf"><Button btnText='Download Resume' /></a> or <GetInTouchButton/>.
</div>
        </div>
     );
}
 
export default Hero;