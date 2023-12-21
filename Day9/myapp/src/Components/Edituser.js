import React from "react";

const Edituser =()=>{
    return (
        <>
        <form>
            <input type="text" id="userame" placeholder="USERNAME"></input>
            <input type="password" id="pass" placeholder="PASSWORD"></input>
            <button type="submit" className="submit-btn">ADD</button>
        </form>
        </>
    )
};
export default Edituser;