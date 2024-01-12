// Get profile data from Github using RESTAPi and return back the projects with relevant infos.
import React, { useState, useEffect } from 'react';

import EnhancedTable from '../../Components/Table';

const GitAuto = () =>{
    const [reposList, setReposList] = useState([]);

    useEffect(()=>{
        const fetchData = async() =>{
            try {
                await fetch('https://api.github.com/users/Sahhimanshu7/repos')
                .then(response => response.json())
                .then(data =>{
                    const items = data.map((arraySingleItem) =>{
                        return (
                                arraySingleItem
                            );
                    })
                    setReposList(items);
                })
                .catch(error =>{
                    console.log(error);
                })
            } catch (error) {
                console.log(`Error! Couldn't get git repos.`);
            }
        }
        fetchData();
    })
    return (
        <EnhancedTable list={reposList}/>
    )
}

export default GitAuto;