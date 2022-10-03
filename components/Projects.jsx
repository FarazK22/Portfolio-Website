import React from 'react'
import propertyImg from '../public/assets/projects/property.jpg'
import campfireImg from '../public/assets/projects/campfire.jpg'
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl tracking-widest uppercase text-[#121641]'>Projects</p>
            <h2 className='py-4'>What I've Built</h2>
            <div className='grid md:grid-cols-2 gap-8'>
               <ProjectItem title='YelpCamp'
                backgroundImg={campfireImg} 
                projectUrl='/yelpcamp'
                technology='Java'
                />
               <ProjectItem title='Workout Logger'
                backgroundImg={propertyImg} 
                projectUrl='/workoutlogger'
                technology='Java'
                />
                <ProjectItem title='Food Delivery Database'
                backgroundImg={propertyImg} 
                projectUrl='/fooddeliverydb'
                technology='Java'
                />
            </div>

        </div>
    </div>
  )
}

export default Projects