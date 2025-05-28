import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserProfile, updateUserProfile } from '../services/api';
import { selectUser } from '../store/slices/userSlice';

const Profile = () => {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);
    const [userInfo, setUserInfo] = useState({
        name: '',
        email: '',
        address: '',
    });

    useEffect(() => {
        if (user) {
            setUserInfo({
                name: user.name,
                email: user.email,
                address: user.address,
            });
        }
    }, [user]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserInfo({
            ...userInfo,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateUserProfile(userInfo));
    };

    return (
        <div className="profile">
            <h2>User Profile</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={userInfo.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={userInfo.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Address:</label>
                    <input
                        type="text"
                        name="address"
                        value={userInfo.address}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Update Profile</button>
            </form>
        </div>
    );
};

export default Profile;