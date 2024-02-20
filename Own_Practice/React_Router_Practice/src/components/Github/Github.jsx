import React, { useState } from 'react';
import axios from 'axios';

const Github = () => {
    const [username, setUsername] = useState('');
    const [userData, setUserData] = useState(null);

    const fetchUserData = async () => {
        try {
            const response = await fetch(`https://api.github.com/users/${username}`);

            if (!response.ok) {
                throw new Error(`GitHub API request failed with status: ${response.status}`);
            }

            const userData = await response.json();
            setUserData(userData);
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };

    return (

        <>
            <div className=' py-4'>

                <div className="input-box">

                    <label htmlFor="username" className='flex justify-center text-xl font-semibold text-orange-700'>Write Github Username</label>
                    <div className=" mt-2 flex justify-center">
                        <input
                            placeholder="eg 'hafizasad419'"
                            id='username'
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}

                            className='indent-1 border-[1px] py-2 px-6 border-orange-700 rounded mx-2'
                        />

                        <button onClick={fetchUserData} className='px-6 py-2 bg-orange-700 rounded'>Get Info</button>
                    </div>
                </div>

                {userData && (
                    <div className="wrapper md:flex md:justify-center">
                        <div className='flex flex-col md:flex-row md:justify-between md:w-[60vw] bg-orange-700 items-center mx-14 my-6 rounded-xl  '>
                            <div className="  img-container md:px-14 my-4 md:m-0">
                                <img src={userData.avatar_url} alt="Brock Lesnar" className='w-[120px] h-[120px] md:w-[200px] md:h-[150px] bg-white' style={{ borderRadius: "50%" }} />
                            </div>

                            <div className="text-container bg-slate-800 text-white py-6 px-4 rounded-bl-xl  rounded-br-xl md:rounded-br-xl md:rounded-tr-xl md:rounded-bl-none   md:py-12 md:w-[50vw] md:h-auto">
                                <h1 className='uppercase text-orange-700 font-bold text-2xl'>{userData.name}</h1>

                                <p className='text-lg font-semibold md:my-4'><span className='text-white'>{userData.name}</span> Is from<span className='text-white'> {userData.location}</span> and he has <span className='text-white'>{userData.public_repos} </span>Repositories.</p>

                                <p className='text-white font-semibold my-4'>{userData.bio}</p>

                            </div>

                        </div>
                    </div>

                )}




            </div>




        </>


    );
};

export default Github;
