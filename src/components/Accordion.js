import React from 'react';
function Accordion({questions, answers , active, setActive}){
/**
 * function toggle does the follow:
 * It's going to check if active is equal to questions, if it is true will be shown.
 * if it's get false will do the next statement which is going to hide it
 * 
 */
    const toggle = () => {
        if(active === questions){
            setActive("12");
        } 
        else {
            setActive(questions);
        }
    }

    return (
        <div>
            <div className={(active === questions ? "showit" : "") + " container"} onClick={() => toggle()}>
                <h2 className="numbers">{questions}</h2>
                <span className="arrow">
            {(active === questions ? "⏷" : "⏶")}
                </span>
            </div>
            <div className={(active === questions ? "show" : "") + " accordion"}> 
                <p>{answers}</p>
            </div>
        </div>
    )
}


export default Accordion;