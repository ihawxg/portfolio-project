import React from 'react'

export const NavigationDots: React.FC<{ active: string }> = ({ active }) => {
    return (
        <div className='app__navigation'>
            {['home', 'about', 'work', 'skills', 'contact'].map((item, index) =>
                <a
                    style={active === item ? { backgroundColor: '#313BAC' } : {}}
                    className='app__navigation-dot' key={item + index}
                    href={`#${item}`}
                />
            )}
        </div>
    )
}
