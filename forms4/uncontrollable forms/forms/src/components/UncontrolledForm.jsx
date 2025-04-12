import { useState } from "react"


const wait = (time) => {
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve('Wait is over!')
        },time)
    })
}

export default function UncontrolledForm (){
    const [pending,setPending] = useState(false);
    const  submitHandaler = async (e) => {
    //disable button
    setPending(true);

    e.preventDefault();
        const formData = new FormData(e.currentTarget)
        const username  = formData.get('username');
        const password  = formData.get('password');
        //call Rest API

        await wait(1500);
        console.log('response here ')
        
        //enable button 
        setPending(false);
    }

    return(
        <>
        <form onSubmit={submitHandaler}>
            <div>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" name="username" placeholder="Ivn"/>

            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password"/>
            </div>
            <input type="submit" disabled={pending}/>
        </form>
        </>
    )
}