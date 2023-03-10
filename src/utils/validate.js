import React from "react";

export function ValidateAccount(Account, Target){
    //Target is a passed array containing objects, later be removed when a DB is formed
    const account = Account.account
    const password = Account.password
    let check = false;
    Target.map(one =>{
        if(account==one.account && password==one.password) check = true;
    })
    return check;
}
