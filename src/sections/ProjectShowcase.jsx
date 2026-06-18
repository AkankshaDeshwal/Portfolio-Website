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

    useEffect(() => {
        const autoplay = setInterval(() => {
            nextSlide()
        }, 1000)

        return () => clearInterval(autoplay)
    }, [currentImgIndex])


    return ( 
        <div className="container w-ful">
            <img src={projectImages[currentImgIndex]}  alt='image'/>
            <ChevronLeft onClick={prevSlide}/>
            <ChevronRight onClick={nextSlide}/>
        </div>
     );
}
 
export default ProjectShowcase;