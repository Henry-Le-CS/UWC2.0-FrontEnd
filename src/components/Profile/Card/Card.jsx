import React from "react";
import "./Card.css"
let userAvt = "https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-6/273478257_1291705351356294_4541559117734448310_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=wdXUjUKzfX0AX_nO4Zp&_nc_ht=scontent.fsgn8-4.fna&oh=00_AfA4cXg_7riA8ZFy-z9JixHvMLGG-iWky4hhXZQ2lxFoFg&oe=6426CA88"

/*
    It should display (Image, Job title, User ID) (Name, gender, Day of birth,  Email, phone number)
 */
function Card(){
    return(
        <div className="card--container">
            <div className="card--title">
                    <img src={userAvt}></img>
                    <h3 className="card--job">Back officer</h3>
                    <h3 className="card--id">ID: 2153342</h3>
            </div>
            <div className="card--info">
                <h3>Name: <span> Le Trong Hieu</span></h3>
                <h3>Gender: <span>Male</span></h3>
                <h3>Day of birth: <span>25/09/2003</span></h3>
                <h3>Email: <span>hieu.le2509@hcmut.edu.vn</span></h3>
                <h3>Phone: <span>0123456789</span></h3>
            </div>
        </div>
    )
}

export default Card;