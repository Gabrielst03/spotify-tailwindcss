import Image from "next/image";

import { Mail, Lock } from "lucide-react";

export default function SignIn() {


    return (
        <>
            <main className="h-screen flex flex-col items-center py-24">

                <div className="flex flex-col items-center w-96 py-6 px-6 bg-black">
                    <Image src='/logo.png' width={148} height={148} alt='logo' className="mt-5" />

                    <div className="flex flex-col gap-3 mt-10 w-full">
                        <div className="flex">
                            <input type="text" className="bg-zinc-800 w-full h-12 rounded-l rounded-r-0 outline-none px-3" placeholder="E-mail ou nome de usuário" />
                            <div className="bg-zinc-800 w-14 flex items-center justify-center text-gray-500 h-12 rounded-r">
                                <Mail />
                            </div>
                        </div>
                        <div className="flex">
                            <input type="password" className="bg-zinc-800 w-full h-12 rounded-l rounded-r-0 outline-none px-3" placeholder="Senha" />
                            <div className="bg-zinc-800 w-14 flex items-center justify-center text-gray-500 h-12 rounded-r">
                                <Lock />
                            </div>
                        </div>
                        <a href="" className="text-sm text-gray-400 hover:text-white underline">Redefinir senha</a>


                        <a href="/welcome" className="flex items-center justify-center mt-4 hover:scale-[103%] w-full h-12 text-md font-semibold rounded-full uppercase bg-white text-black">Entrar</a>

                        <div className="flex gap-3 items-center mt-5">
                            <div className="w-full h-[1px] bg-white/30"></div> OU
                            <div className="w-full h-[1px] bg-white/30"></div>
                        </div>

                        <div className="flex items-center px-3 gap-7 mt-5 w-full h-12 rounded-full border font-semibold border-white/50 hover:border-white hover:scale-[101%] cursor-pointer">
                            <Image src='/facebook.png' width={28} height={28} alt='' />
                            Continuar com o Facebook
                        </div>

                        <div className="flex items-center px-3 gap-7 mt-0.5 w-full h-12 rounded-full border font-semibold border-white/50 hover:border-white hover:scale-[101%] cursor-pointer">
                            <Image src='/google.png' width={28} height={28} alt='' />
                            Continuar com o Google
                        </div>

                        <div className="flex items-center px-3 gap-9 mt-0.5 w-full h-12 rounded-full border font-semibold border-white/50 hover:border-white hover:scale-[101%] cursor-pointer">
                            <Image src='/apple.png' width={24} height={24} alt='' />
                            Continuar com a Apple
                        </div>

                        <div className="flex flex-col items-center mt-2">
                            <h1 className="text-zinc-400 font-semibold">Não tem uma conta? <a href="" className="text-white underline">INSCREVA-SE</a></h1>

                        </div>

                    </div>

                </div>

            </main>
        </>
    )
}