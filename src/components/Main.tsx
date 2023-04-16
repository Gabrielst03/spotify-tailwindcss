import { ChevronLeft, ChevronRight, PlayIcon } from "lucide-react";
import Image from 'next/image'

export default function Main() {
    return (
        <>
            <main className='flex-1 p-6'>
                <div className="flex items-center justify-between gap-5">

                    <div className="flex items-center gap-4">
                        <button className='h-9 w-9 bg-zinc-800 text-white rounded-full flex items-center justify-center'>
                            <ChevronLeft />
                        </button>

                        <button className='opacity-70 h-9 w-9 bg-zinc-800 text-white rounded-full flex items-center justify-center'>
                            <ChevronRight />
                        </button>
                    </div>

                    <a href="http://github.com/gabrielst03" target="_blank" className="flex items-center gap-3 px-3 py-1 bg-zinc-900 rounded-full">
                        <Image src={'/perfil.jpeg'} alt="perfil" width={30} height={30} className="rounded-full border-2 border-emerald-400" />
                        <h1>Gabriel Santana</h1>
                    </a>

                </div>


                <h1 className='font-semibold text-2xl mt-10'>Good Afternoon</h1>


                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4">
                    <div className="flex group items-center gap-4 bg-white/10 rounded-lg overflow-hidden hover:bg-white/20 transition-colors cursor-pointer">
                        <Image src={'/jg.jpeg'} width={104} height={104} alt={'Album'} />
                        <h1 className='font-semibold'>Outra Vida - João Gomes</h1>
                        <button className='items-center justify-center bg-emerald-500 text-zinc-800 w-12 h-12 ml-32 rounded-full flex invisible group-hover:visible hover:scale-105'>
                            <PlayIcon />
                        </button>
                    </div>
                    <div className="flex items-center group gap-4 bg-white/10 rounded-lg overflow-hidden hover:bg-white/20 transition-colors cursor-pointer">
                        <Image src={'/djavan.jpg'} width={104} height={104} alt={'Album'} />
                        <h1 className='font-semibold'>Djavan Esquinas - Djavan</h1>
                        <button className='items-center justify-center bg-emerald-500 text-zinc-800 w-12 h-12 ml-32 rounded-full flex invisible group-hover:visible hover:scale-105'>
                            <PlayIcon />
                        </button>
                    </div>
                    <div className="flex items-center group gap-4 bg-white/10 rounded-lg overflow-hidden hover:bg-white/20 transition-colors cursor-pointer">
                        <Image src={'/fagner.jpg'} width={104} height={104} alt={'Album'} />
                        <h1 className='font-semibold'>Album Vagalume - Fágner</h1>
                        <button className='items-center justify-center bg-emerald-500 text-zinc-800 w-12 h-12 ml-32 rounded-full flex invisible group-hover:visible hover:scale-105'>
                            <PlayIcon />
                        </button>
                    </div>

                    <div className="flex items-center group gap-4 bg-white/10 rounded-lg overflow-hidden hover:bg-white/20 transition-colors cursor-pointer">
                        <Image src={'/acdc.jpg'} width={104} height={104} alt={'Album'} />
                        <h1 className='font-semibold'>Shot In The Dark - AC/DC</h1>
                        <button className='items-center justify-center bg-emerald-500 text-zinc-800 w-12 h-12 ml-32 rounded-full flex invisible group-hover:visible hover:scale-105'>
                            <PlayIcon />
                        </button>
                    </div>
                    <div className="flex items-center group gap-4 bg-white/10 rounded-lg overflow-hidden hover:bg-white/20 transition-colors cursor-pointer">
                        <Image src={'/safadao.jpg'} width={104} height={104} alt={'Album'} />
                        <h1 className='font-semibold'>Ao Vivo em Brasília - Wesley Safadão</h1>
                        <button className='items-center justify-center bg-emerald-500 text-zinc-800 w-12 h-12 ml-32 rounded-full flex invisible group-hover:visible hover:scale-105'>
                            <PlayIcon />
                        </button>
                    </div>
                    <div className="flex items-center group gap-4 bg-white/10 rounded-lg overflow-hidden hover:bg-white/20 transition-colors cursor-pointer">
                        <Image src={'/tierry.jpeg'} width={104} height={104} alt={'Album'} />
                        <h1 className='font-semibold'>Acertou na Mosca - Tierry</h1>
                        <button className='items-center justify-center bg-emerald-500 text-zinc-800 w-12 h-12 ml-32 rounded-full flex invisible group-hover:visible hover:scale-105'>
                            <PlayIcon />
                        </button>
                    </div>
                </div>

                <h1 className='font-semibold text-2xl mt-10 mb-2'>Your most listened mixes</h1>

                <div className="grid grid-cols-3 xl:grid-cols-4 2xl:grid-cols-7 gap-3">
                    <a href="" className="flex flex-col items-center gap-2 p-2 h-80 bg-white/5 transition-colors hover:bg-white/10 rounded-lg">
                        <Image src={'/forro.jpeg'} width={215} height={215} alt={'Album'} className='rounded-lg' />
                        <strong>Mix Forró</strong>
                        <p className='text-gray-500 text-sm text-center'>Luiz Gonzaga, Elba Ramalho, Mastruz com Leite, João Gomes e mais...</p>
                    </a>

                    <a href="" className="flex flex-col items-center gap-2 p-2 h-80 bg-white/5 transition-colors hover:bg-white/10 rounded-lg">
                        <Image src={'/funk.jpeg'} width={215} height={215} alt={'Album'} className='rounded-lg' />
                        <strong>Mix Funk</strong>
                        <p className='text-gray-500 text-sm text-center'>MC Ryan SP, Salvador da Rima, MC Kevin, MC IG e mais...</p>
                    </a>

                    <a href="" className="flex flex-col items-center gap-2 p-2 h-80 bg-white/5 transition-colors hover:bg-white/10 rounded-lg">
                        <Image src={'/samba.jpeg'} width={215} height={215} alt={'Album'} className='rounded-lg' />
                        <strong>Mix Samba</strong>
                        <p className='text-gray-500 text-sm text-center'>Zeca Pagodinho, Maria Betânia, Jorge Aragão, Jorge Ben Jor e mais...</p>
                    </a>

                    <a href="" className="flex flex-col items-center gap-2 p-2 h-80 bg-white/5 transition-colors hover:bg-white/10 rounded-lg">
                        <Image src={'/mpb.jpg'} width={215} height={215} alt={'Album'} className='rounded-lg' />
                        <strong>Mix MPB</strong>
                        <p className='text-gray-500 text-sm text-center'>Cazuza, Djavan, Nando Reis, Geraldo Azevedo e mais...</p>
                    </a>

                    <a href="" className="flex flex-col items-center gap-2 p-2 h-80 bg-white/5 transition-colors hover:bg-white/10 rounded-lg">
                        <Image src={'/rap.jpeg'} width={215} height={215} alt={'Album'} className='rounded-lg' />
                        <strong>Mix Rap Nacional</strong>
                        <p className='text-gray-500 text-sm text-center'>Racionais MCs, Emicida, Sabotage e mais...</p>
                    </a>

                    <a href="" className="flex flex-col items-center gap-2 p-2 h-80 bg-white/5 transition-colors hover:bg-white/10 rounded-lg">
                        <Image src={'/jazzz.jpg'} width={215} height={215} alt={'Album'} className='rounded-lg' />
                        <strong>Mix Jazz</strong>
                        <p className='text-gray-500 text-sm text-center'>Frank Sinatra, Michael Bublé, Nina Simone e mais...</p>
                    </a>

                    <a href="" className="flex flex-col items-center gap-2 p-2 h-80 bg-white/5 transition-colors hover:bg-white/10 rounded-lg">
                        <Image src={'/cartolaa.jpg'} width={215} height={215} alt={'Album'} className='rounded-lg' />
                        <strong>Mix de Cartola</strong>
                        <p className='text-gray-500 text-sm text-center'>Adoniran Barbosa, Zé Keti e Benito Di Paula</p>
                    </a>

                </div>

            </main>
        </>
    )
}