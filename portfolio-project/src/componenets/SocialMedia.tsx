import React from 'react'

import { BsTwitter, BsInstagram } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'

export const SocialMedia = () => {
    return (
        <div className='app__social'>
            <div>
                <BsTwitter></BsTwitter>
            </div>
            <div>
                <FaFacebookF></FaFacebookF>
            </div>
            <div>
                <BsInstagram></BsInstagram>
            </div>
        </div>
    )
}
