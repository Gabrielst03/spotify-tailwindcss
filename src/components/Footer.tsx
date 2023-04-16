import { SkipBack, PlayIcon, SkipForward, Volume2, Maximize2, Mic2, MonitorSpeaker } from "lucide-react";
import Image from 'next/image'

export function Footer() {



    return (
        <>
            <footer className='flex items-center justify-between bg-zinc-900 border-t border-zinc-800 p-6'>
                <div className='flex items-center gap-2'>
                    <Image src={'/dengo.jpeg'} width={60} height={60} alt={'Album'} />

                    <div>
                        <h1>Dengo</h1>
                        <p className='text-gray-400 text-xs'>João Gomes</p>
                    </div>
                </div>


                <div className='flex flex-col items-center gap-3'>
                    <div className='flex gap-5 items-center'>
                        <SkipBack className='text-gray-600' />
                        <button className='flex items-center justify-center pl-0.5 w-10 h-10 rounded-full bg-white text-black'>
                            <PlayIcon />
                        </button>
                        <SkipForward className='text-gray-600' />
                    </div>

                    <div className="flex items-center gap-3 text-gray-400">
                        <span className='text-xs'>1:25</span>
                        <div className="flex items-center">
                            <div className="w-56 h-1 bg-white"></div>
                            <div className="w-56 h-1 bg-white/40"></div>

                        </div>
                        <span className='text-xs'>-1:24</span>


                    </div>

                </div>


                <div className="flex items-center gap-2">
                    <Mic2 className="w-5 text-gray-400 hover:text-gray-200 duration-150 cursor-pointer" />
                    <MonitorSpeaker className="text-gray-400 hover:text-gray-200 duration-150 cursor-pointer w-6" />

                    <Volume2 className="text-gray-400 hover:text-gray-200 duration-150 cursor-pointer w-6" />
                    <div className="flex items-center">
                        <input className="range pr-1 border-none accent-white"
                            type="range"
                            min={'0'}
                            max={'100'}
                        />
                    </div>
                    <Maximize2 className="text-gray-400 hover:text-gray-200 duration-150 cursor-pointer w-4" />
                </div>

            </footer>
        </>
    )
}