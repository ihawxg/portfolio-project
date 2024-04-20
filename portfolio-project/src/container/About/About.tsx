import React, { ImgHTMLAttributes, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { urlFor, client } from '../../client'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'
import './About.scss'

interface abouts {
  title: string
  description: string
  imgUrl: string | SanityImageSource
}

export const About = () => {

  const [abouts, setAbouts] = useState<abouts[]>([])

  useEffect(() => {
    const query = '*[_type == "abouts"]'
    client.fetch(query)
      .then((data) => {
        setAbouts(data)
      })
  }, []);

  return (
    <div>
      <h2 className='head-text'>I Know That <span>Good Design</span> <br /> means <span>Good Business</span></h2>
      <div className='app__profiles'>
        {abouts.map((about, index) =>
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className='app__profile-item'
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl).url()} alt={about.title} />
            <h2 className='bold-text' style={{ marginTop: 20 }}>{about.title}</h2>
            <p className='p-text' style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        )}
      </div>
    </div>
  )
}