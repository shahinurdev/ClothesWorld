import React from 'react';
import { useLoaderData } from 'react-router-dom';

const EditUserProfile = () => {
    const data = useLoaderData();
    console.log(data);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const age = form.age.value;
        const mobileNumber = form.mobileNumber.value;
        const userData = { name, age, mobileNumber, email: data?.email };
        console.log(userData);

        fetch(`https://serverclothesworld.onrender.com/user/${data?.email}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
        })
        .then((res) => {
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            return res.json();
        })
        .then((data) => console.log(data))
        .catch((error) => console.error('There was a problem with your fetch operation:', error));
    };

    return (
        <>
            <div>
                <h1 className="text-3xl mb-7">Edit Profile</h1>
                <form onSubmit={handleSubmit} className="flex flex-col gap-y-5">
                    <div className="flex flex-col">
                        <label htmlFor="name">User Name</label>
                        <input
                            type="text"
                            name="name"
                            defaultValue={data?.name}
                            className="py-2 px-1 bg-slate-50"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="email">User Email</label>
                        <input
                            type="text"
                            value={data?.email}
                            disabled
                            name="email"
                            className="py-2 px-1 bg-slate-50"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="age">User Age</label>
                        <input
                            type="text"
                            name="age"
                            defaultValue={data?.age}
                            className="py-2 px-1 bg-slate-50"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="mobileNumber">User Mobile</label>
                        <input
                            type="text"
                            name="mobileNumber"
                            defaultValue={data?.mobileNumber}
                            className="py-2 px-1 bg-slate-50"
                        />
                    </div>
                    <div className="flex flex-col">
                        <input
                            type="submit"
                            value="Update Profile"
                            className="py-2 px-1 bg-slate-950 text-white"
                        />
                    </div>
                </form>
            </div>
        </>
    );
};

export default EditUserProfile;
