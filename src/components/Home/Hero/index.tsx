'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import BuyCrypto from './buy-form'
import SellCrypto from './sell-form'
import CardSlider from './slider'
import { useEffect, useRef, useState, useCallback } from 'react'
import { Icon } from '@iconify/react/dist/iconify.js'

const Hero = () => {
  const [isBuying, setIsBuyingOpen] = useState(false)
  const [isSelling, setIsSellingOpen] = useState(false)
  const BuyRef = useRef<HTMLDivElement>(null)
  const SellRef = useRef<HTMLDivElement>(null)

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (BuyRef.current && !BuyRef.current.contains(event.target as Node)) {
        setIsBuyingOpen(false)
      }
      if (SellRef.current && !SellRef.current.contains(event.target as Node)) {
        setIsSellingOpen(false)
      }
    },
    [BuyRef, SellRef]
  )

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [handleClickOutside])

  useEffect(() => {
    document.body.style.overflow = isBuying || isSelling ? 'hidden' : ''
  }, [isBuying, isSelling])

  const leftAnimation = {
    initial: { x: '-100%', opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: '-100%', opacity: 0 },
    transition: { duration: 0.6 },
  }

  const rightAnimation = {
    initial: { x: '100%', opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: '100%', opacity: 0 },
    transition: { duration: 0.6 },
  }

  return (
    <section
      className='relative md:pt-40 md:pb-28 py-20 overflow-hidden z-1'
      id='main-banner'>
      <div className='container px-4'>
        <div className='grid grid-cols-12'>
          <motion.div {...leftAnimation} className='col-span-12'>
            <div className='flex gap-6 items-center justify-center mb-5 mt-24'>
              <Image
                src='/images/icons/icon-bag.svg'
                alt='icon'
                width={40}
                height={40}
              />
              <p className='text-white sm:text-28 text-18 mb-0'>
                Crypto On The <span className='text-primary'>Go</span>
              </p>
            </div>
            <h1 className='font-medium lg:text-76 md:text-70 text-54 text-center text-white mb-10'>
              Building Robust Foundations for  <span className='text-primary'>Decentralized {' '}</span> 
              <span className='text-primary'>Networks!</span>
            </h1>
            <div className='flex items-center justify-center gap-8'>
              <button
                className='bg-primary border border-primary rounded-lg text-21 font-medium hover:bg-transparent hover:text-primary text-darkmode py-2 px-7 z-50'
                onClick={() => setIsBuyingOpen(true)}>
                Our Role & Expertise
              </button>
              <button
                className='bg-transparent border border-primary rounded-lg text-21 font-medium hover:bg-primary hover:text-darkmode text-primary py-2 px-7'
                onClick={() => setIsSellingOpen(true)}>
                Start a Collaboration
              </button>
            </div>
          </motion.div>
          <motion.div
            {...rightAnimation}
            className='col-span-7  hidden'>
            <div className='ml-20 -mr-64'>
              <Image
                src='/images/hero/banner-image.png'
                alt='Banner'
                width={1150}
                height={1150}
              />
            </div>
          </motion.div>
        </div>
        {/* <CardSlider /> */}
      </div>
      <div className='absolute w-50 h-50 bg-linear-to-bl from-tealGreen from-50% to-charcoalGray to-60% blur-400 rounded-full -top-64 -right-14 -z-1'></div>

    </section>
  )
}

export default Hero
