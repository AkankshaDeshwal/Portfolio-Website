import { useState, useEffect } from 'react'
import cryptoImage2 from '../assets/images/crypto_individual_page.png'
import sampleImage from '../assets/images/duck.avif'
import {ChevronLeft, ChevronRight} from 'lucide-react'

const ProjectShowcase = () => {

    const projectImages = [cryptoImage2, sampleImage]
    const [currentImgIndex, setCurrentImgIndex] = useState(0)

    const prevSlide = () => {
        setCurrentImgIndex((prev) => {
            return prev === 0? projectImages.length-1: prev-1
        })
        console.log(projectImages.length)
    }

    const nextSlide = () => {
        setCurrentImgIndex((prev) => {
            return prev === projectImages.length-1? 0: prev+1
        })
        console.log('slide number', currentImgIndex)
    }

    // useEffect(() => {
    //     const autoplay = setInterval(() => {
    //         nextSlide()
    //     }, 3000)

    //     return () => clearInterval(autoplay)
    // }, [currentImgIndex])


    return ( 
        <div className="container w-full flex flex-col items-center">
            <img src={projectImages[currentImgIndex]}  alt='image' className='w-full h-100 duration-300'/>
            <div className='flex gap-4 bg-slideshow-controls w-full justify-between items-center px-2 py-1'>
                <h1 className='text-xs font-secondary italic'>Project Info will come here</h1>
                <div className='flex gap-4  justify-center items-center'>
                    <ChevronLeft onClick={prevSlide}  size={30} className='p-2 cursor-pointer' strokeWidth={4}/>
            <ChevronRight onClick={nextSlide} size={30} className='p-2 cursor-pointer' strokeWidth={4}/>
                </div>
            </div>
        </div>
     );
}
 
export default ProjectShowcase;