import "./Box_linkedin.css"
import linkedin from "../imgs/linkedin.png"
function Box_linkedin(){
    return(
        <div className="container">
            <div className="box1">
                <a href="https://www.linkedin.com/in/yonathan-rabinovici-gherman/"><img className="logo_linkedin" src={linkedin} alt="logo_linkedin" /></a>
                <a href="https://www.linkedin.com/in/douglas-montes-875470223/"><img className="logo_linkedin" src={linkedin} alt="logo_linkedin" /></a>
                <a href="https://www.linkedin.com/in/felipenascto/"><img className="logo_linkedin" src={linkedin} alt="logo_linkedin" /></a>
            </div>
            <div className="box2">
            <a href="https://www.linkedin.com/in/felipenascto/"><img className="logo_linkedin" src={linkedin} alt="logo_linkedin" /></a>
            <a href="https://www.linkedin.com/in/douglas-p-monteiro/"><img className="logo_linkedin" src={linkedin} alt="logo_linkedin" /></a>
            <a href="https://www.linkedin.com/in/diego-nunes-tolotto-7b0963156/"><img className="logo_linkedin" src={linkedin} alt="logo_linkedin" /></a>

            </div>
        </div>
    )   

}

export default Box_linkedin;