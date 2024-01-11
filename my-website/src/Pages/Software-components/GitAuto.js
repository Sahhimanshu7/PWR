// Get profile data from Github using RESTAPi and return back the projects with relevant infos.
import React, { useState, useEffect } from 'react';

const GitAuto = () =>{
    const [reposList, setReposList] = useState([]);

    useEffect(()=>{
        const fetchData = async() =>{
            try {
                await fetch('https://api.github.com/users/Sahhimanshu7/repos')
                .then(response => response.json())
                .then(data =>{
                    
                })
            } catch (error) {
                console.log(`Error! Couldn't get git repos.`);
            }
        }
        fetchData();
    })
    // getGitData();
    return(
        <p>Hello From GitAuto</p>
    )
}

export default GitAuto;