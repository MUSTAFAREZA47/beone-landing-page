'use client'
import { IconArrowNarrowRight } from '@tabler/icons-react'
import { useState, useRef, useId, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Slide = ({ slide, index, current, handleSlideClick }) => {
    const slideRef = useRef(null)
    const xRef = useRef(0)
    const yRef = useRef(0)
    const frameRef = useRef()

    useEffect(() => {
        const animate = () => {
            if (!slideRef.current) return
            const x = xRef.current
            const y = yRef.current
            slideRef.current.style.setProperty('--x', `${x}px`)
            slideRef.current.style.setProperty('--y', `${y}px`)
            frameRef.current = requestAnimationFrame(animate)
        }
        frameRef.current = requestAnimationFrame(animate)
        return () => {
            if (frameRef.current) {
                cancelAnimationFrame(frameRef.current)
            }
        }
    }, [])

    const handleMouseMove = (event) => {
        const el = slideRef.current
        if (!el) return
        const r = el.getBoundingClientRect()
        xRef.current = event.clientX - (r.left + Math.floor(r.width / 2))
        yRef.current = event.clientY - (r.top + Math.floor(r.height / 2))
    }

    const handleMouseLeave = () => {
        xRef.current = 0
        yRef.current = 0
    }

    const imageLoaded = (event) => {
        event.currentTarget.style.opacity = '1'
    }

    const { src, button, title } = slide

    return (
        <motion.div 
            className="[perspective:1200px] [transform-style:preserve-3d]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <li
                ref={slideRef}
                className="flex flex-1 flex-col items-center justify-center relative text-center text-white opacity-100 transition-all duration-300 ease-in-out w-[85vmin] sm:w-[70vmin] md:w-[60vmin] lg:w-[50vmin] h-[70vmin] sm:h-[80vmin] md:h-[85vmin] lg:h-[90vmin] mx-[2vmin] sm:mx-[3vmin] md:mx-[4vmin] z-10 cursor-pointer"
                onClick={() => handleSlideClick(index)}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                    transform:
                        current !== index
                            ? 'scale(0.95) rotateX(8deg)'
                            : 'scale(1) rotateX(0deg)',
                    transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                    transformOrigin: 'bottom',
                }}
            >
                <div
                    className="absolute top-0 left-0 w-full h-full bg-[#1D1F2F] rounded-[1%] overflow-hidden transition-all duration-150 ease-out shadow-2xl hover:shadow-3xl"
                    style={{
                        transform:
                            current === index
                                ? 'translate3d(calc(var(--x) / 30), calc(var(--y) / 30), 0)'
                                : 'none',
                    }}
                >
                    <img
                        className="absolute inset-0 w-[120%] h-[120%] object-cover opacity-100 transition-opacity duration-600 ease-in-out"
                        style={{
                            opacity: current === index ? 1 : 0.5,
                        }}
                        alt={title}
                        src={src}
                        onLoad={imageLoaded}
                        loading="eager"
                        decoding="sync"
                    />
                </div>
            </li>
        </motion.div>
    )
}

const CarouselControl = ({ type, title, handleClick }) => {
    return (
        <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`w-10 h-10 sm:w-12 sm:h-12 flex items-center mx-2 justify-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300 ${
                type === 'previous' ? 'rotate-180' : ''
            }`}
            // title={title}
            onClick={handleClick}
        >
            <IconArrowNarrowRight className="text-white w-5 h-5 sm:w-6 sm:h-6" />
        </motion.button>
    )
}

export function Carousel({ slides }) {
    const [current, setCurrent] = useState(0)
    const [isAutoPlaying, setIsAutoPlaying] = useState(true)
    const autoPlayRef = useRef()

    useEffect(() => {
        if (isAutoPlaying) {
            autoPlayRef.current = setInterval(() => {
                setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
            }, 5000)
        }
        return () => {
            if (autoPlayRef.current) {
                clearInterval(autoPlayRef.current)
            }
        }
    }, [isAutoPlaying, slides.length])

    const handlePreviousClick = () => {
        setIsAutoPlaying(false)
        const previous = current - 1
        setCurrent(previous < 0 ? slides.length - 1 : previous)
    }

    const handleNextClick = () => {
        setIsAutoPlaying(false)
        const next = current + 1
        setCurrent(next === slides.length ? 0 : next)
    }

    const handleSlideClick = (index) => {
        setIsAutoPlaying(false)
        if (current !== index) {
            setCurrent(index)
        }
    }

    const id = useId()

    return (
        <div
            className="relative w-full max-w-[95vmin] sm:max-w-[90vmin] md:max-w-[85vmin] lg:max-w-[80vmin] h-[60vmin] sm:h-[65vmin] md:h-[70vmin] mx-auto"
            aria-labelledby={`carousel-heading-${id}`}
        >
            <AnimatePresence mode="wait">
                <ul
                    className="absolute flex mx-[-2vmin] sm:mx-[-3vmin] md:mx-[-4vmin] transition-transform duration-1000 ease-in-out"
                    style={{
                        transform: `translateX(-${
                            current * (100 / slides.length)
                        }%)`,
                    }}
                >
                    {slides.map((slide, index) => (
                        <Slide
                            key={index}
                            slide={slide}
                            index={index}
                            current={current}
                            handleSlideClick={handleSlideClick}
                        />
                    ))}
                </ul>
            </AnimatePresence>

            {/* Navigation Controls */}
            <div className="absolute flex justify-center w-full top-[calc(100%+0.5rem)] sm:top-[calc(100%+1rem)]">
                <CarouselControl
                    type="previous"
                    title="Go to previous slide"
                    handleClick={handlePreviousClick}
                />
                <CarouselControl
                    type="next"
                    title="Go to next slide"
                    handleClick={handleNextClick}
                />
            </div>

            {/* Slide Indicators */}
            <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1 sm:space-x-2">
                {slides.map((_, index) => (
                    <motion.button
                        key={index}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => handleSlideClick(index)}
                        className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${
                            current === index
                                ? 'bg-white scale-125'
                                : 'bg-white/50 hover:bg-white/75'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    )
}
