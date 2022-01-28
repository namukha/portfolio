import React, { useState, useEffect } from 'react';

const Content = () => {
    const [name, setName] = useState()
    const [major, setMajor] = useState()
    const [description, setDescription] = useState()

    useEffect(() => {
        fetch("http://localhost:3000/name")
            .then(res => res.text())
            .then(name => setName(name))

        fetch("http://localhost:3000/major")
            .then(res => res.text())
            .then(major => setMajor(major))

        fetch("http://localhost:3000/description")
            .then(res => res.text())
            .then(description => setDescription(description))

    }, [])

    return (
        <>
            <div className="header">
                <img src="http://localhost:3000/static/logo.svg" />
            </div>
            <div className='content'>
                <div className="head">
                    <h2>Hi, I am {name}</h2>
                    <h2>{major} based in UB.</h2>
                </div>
                <div className='body'>
                    {description}
                    <p>For collaboration or questions: <br/>namuun@gmail.com</p>
                </div>
            </div>
            <div className="icons">
                <img style={{ width: "40px" }} src="/img/fb.svg" />
                <img style={{ width: "40px" }} src="/img/twitter.svg" />
                <img style={{ width: "40px" }} src="/img/pin.svg" />
                <img style={{ width: "40px" }} src="/img/ig.svg" />
            </div>
        </>

    )
}

export default Content;