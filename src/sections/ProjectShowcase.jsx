import { useState, useEffect } from 'react'
import {ChevronLeft, ChevronRight} from 'lucide-react'
import ecomHome from '../assets/images/ecom_home.png'
import ecomAuth from '../assets/images/ecom_auth.png'
import ecomProductPage from '../assets/images/ecom_product_page.png'
import ecomCart from '../assets/images/ecom_cart.png'
import cryptoHome from '../assets/images/crypto_home.png'
import cryptoSortBy from '../assets/images/crypto_sortby.png'
import cryptoIndividualPage from '../assets/images/crypto_individual_page.png'
import kanbanBoard from '../assets/images/kanban_board.png'
import kanbanDragDrop from '../assets/images/kanban_drag_and_drop.png'
import kanbanAddTask from '../assets/images/kanban_add_task.png'

const ProjectShowcase = () => {

    const projects = [
        {
            image:ecomHome,
            description: "Ecommerce Website: Home Page"
        },
        {
            image:ecomAuth,
            description: "Ecommerce Website: Auth Page- Login/Signup"
        },
        {
            image:ecomProductPage,
            description: "Ecommerce Website: Product Page"
        },
        {
            image:ecomCart,
            description: "Ecommerce Website: Cart Page"
        },
        {
            image:cryptoHome,
            description: "Crypto Currency Tracker: Home Page"
        },
        {
            image:cryptoSortBy,
            description: "Crypto Currency Tracker: Sort currencies"
        },
        {
            image:cryptoIndividualPage,
            description: "Crypto Currency Tracker: Individual Currency Page with graph"
        },
        {
            image:kanbanBoard,
            description: "Kanban Board: Drag and Drop task management"
        },
        {
            image:kanbanAddTask,
            description: "Kanban Board: Add new task"
        },
        {
            image:kanbanDragDrop,
            description: "Kanban Board: Drag-drop tasks"
        },

    ]
    const [currentImgIndex, setCurrentImgIndex] = useState(0)

    const prevSlide = () => {
        setCurrentImgIndex((prev) => {
            return prev === 0? projects.length-1: prev-1
        })
    }

    const nextSlide = () => {
        setCurrentImgIndex((prev) => {
            return prev === projects.length-1? 0: prev+1
        })
    }

    useEffect(() => {
        const autoplay = setInterval(() => {
            nextSlide()
        }, 1000)

        return () => clearInterval(autoplay)
    }, [currentImgIndex])


    return ( 
        <div className="container w-full flex flex-col items-center">
            <img src={projects[currentImgIndex].image}  alt='image' className='w-full h-90 duration-300'/>
            <div className='flex gap-4 bg-slideshow-controls w-full justify-between items-center px-2 py-1'>
                <h1 className='text-xs font-secondary italic'>
                    {projects[currentImgIndex].description}
                </h1>
                <div className='flex gap-4  justify-center items-center'>
                    <ChevronLeft onClick={prevSlide}  size={30} className='p-2 cursor-pointer' strokeWidth={4}/>
            <ChevronRight onClick={nextSlide} size={30} className='p-2 cursor-pointer' strokeWidth={4}/>
                </div>
            </div>
        </div>
     );
}
 
export default ProjectShowcase;