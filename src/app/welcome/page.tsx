import Image from 'next/image'
import { Inter, Play } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

import { Home, Search, Library, Plus, Heart, PlayIcon, ChevronLeft, ChevronRight, SkipBack, SkipForward } from 'lucide-react'

import * as Progress from '@radix-ui/react-progress';
import React from 'react';
import { SideBar } from '@/components/SideBar';
import Main from '@/components/Main';
import { Footer } from '@/components/Footer';


export default function Default() {



  return (
    <main className={inter.className}>

      <div className='flex h-screen flex-col'>

        <div className='flex flex-1'>

          <SideBar />


          <Main />

        </div>

        <Footer />

      </div>

    </main>
  )
}
