import React from 'react';
import ProfileBanner from '../profileBanner/profileBanner';
import ProfilePostsList from '../../containers/profilePostsList'

export default (props) => {
        return (
            <>
            <div className='profile-banner-container'>
                <ProfileBanner />
            </div>
            <div className='profile-posts-container'>
                <ProfilePostsList /> 
            </div>
            </>
        )
    }