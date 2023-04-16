import { playlists } from "@/app/data/playlists";
import { Home, Search, Library, Plus, Heart } from "lucide-react";

export function SideBar() {




    return (
        <>
            <aside className='hidden md:flex flex-col w-64 bg-zinc-950 backdrop-blur-lg p-6'>


                <div className='flex items-center gap-1 mb-10'>
                    <span className='w-3 h-3 bg-green-500 rounded-full'></span>
                    <span className='w-3 h-3 bg-amber-500 rounded-full'></span>
                    <span className='w-3 h-3 bg-red-500 rounded-full'></span>
                </div>
                <nav className='flex flex-col gap-4'>

                    <a href="" className='flex items-center gap-4 font-semibold text-sm'>
                        <Home />
                        Home
                    </a>
                    <a href="" className='flex items-center gap-4 font-semibold text-sm'>
                        <Search />
                        Search
                    </a>

                    <a href="" className='flex items-center gap-4 font-semibold text-sm'>
                        <Library />
                        Your Library
                    </a>

                    <div className='mt-9 space-y-5'>

                        <a href="" className="flex items-center gap-3 text-sm font-semibold">
                            <div className='flex items-center justify-center w-7 h-7 bg-white rounded text-zinc-800'>
                                <Plus className='w-4 h-4' />
                            </div>
                            Create Playlist
                        </a>

                        <a href="" className="flex items-center gap-3 text-sm font-semibold">
                            <div className='flex items-center justify-center w-7 h-7 bg-gradient-to-t from-blue-600 to-violet-500 rounded text-white'>
                                <Heart className='w-4 h-4' />
                            </div>
                            Liked Songs
                        </a>


                    </div>

                    <hr className='w-full h-1 opacity-40' />

                    {
                        playlists.map(item => (
                            <a key={item.id} href="" className='text-sm text-zinc-500 hover:text-zinc-100 cursor-default'>{item.title}</a>

                        ))
                    }






                </nav>
            </aside>
        </>
    )
}