import Head from 'next/head'
import React, { useState } from 'react'

const contact = () => {
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [phone, setphone] = useState('')
    const [desc, setdesc] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(name, email, phone, desc);
        const data = {name, email, phone, desc}
        fetch("http://localhost:3000/api/postcontact", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        .then(res => res.text())
        .then(data => {
            console.log("Sucess", data);
            alert("Thanks for Connecting Us!")
            setdesc('')
            setemail('')
            setname('')
            setphone('')
        })
    }

    const handleChange = (e) => {
        if (e.target.name == 'name') {
            setname(e.target.value)
        } 
        else if (e.target.name == 'email') {
            setemail(e.target.value)
        } 
        else if (e.target.name == 'phone') {
            setphone(e.target.value)
        } 
        else if (e.target.name == 'desc') {
            setdesc(e.target.value)
        } 
    }
    return (
        <div>
            <Head>
                <title>Contact Page!</title>
            </Head>
            <form className='container' onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Email Name</label>
                    <input type="text" value={name} onChange={handleChange} className="form-control" id="name" name='name' aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="phonenumber" className="form-label">Email Phone Number</label>
                    <input type="number" value={phone} onChange={handleChange} className="form-control" id="phonenumber" name='phone' />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" value={email} onChange={handleChange} className="form-control" id="exampleInputEmail1" name='email' aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Elaborate Your Concern</label>
                    <textarea onChange={handleChange} value={desc} className="form-control" id="desc" placeholder='Write Your concern here' name='desc'></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default contact