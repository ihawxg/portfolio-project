import React from 'react'
import { motion } from 'framer-motion'
import about1 from '../../assets/about01.png'
import about2 from '../../assets/about02.png'
import about3 from '../../assets/about03.png'
import about4 from '../../assets/about04.png'

import './About.scss'

const abouts = [
  { title: 'Web Development', description: 'I Am a good web developer', imgUrl: about1 },
  { title: 'Web Design', description: 'I Am a good web developer', imgUrl: about2 },
  { title: 'UI/UX', description: 'I Am a good web developer', imgUrl: about3 },
  { title: 'Web Animations', description: 'I Am a good web developer', imgUrl: about4 },
]

export const About = () => {
  return (
    <div>
      <h2 className='head-text'>I Know That
        <span>Good Design</span>
        <br />
        means
        <span>Good Business</span>
      </h2>
      <div className='app__profiles'>
        {abouts.map((about, index) =>
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className='app__profile-item'
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className='bold-text' style={{ marginTop: 20 }}>{about.title}</h2>
            <p className='p-text' style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        )}
      </div>
    </div>
  )
}