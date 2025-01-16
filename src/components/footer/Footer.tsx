import { FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'

function Footer() {

    let data = new Date().getFullYear()

    return (
        <>
            <div className="flex justify-center bg-purple-800 text-white">
                <div className="container flex flex-col items-center py-4">
                    <p className='text-xl font-bold'>
                            Blog Pessoal Generation | Copyright: {data}
                        </p>
                    <p className='text-lg'>Acesse nossas redes sociais</p>
                    <div className='flex gap-2'>
                    <a href="https://www.linkedin.com/in/bruna-robertasilva/">
                        <LinkedinLogo size={48} weight='bold' />
                        </a>
                        <a href="https://www.instagram.com/bru.na.rs/">
                        <InstagramLogo size={48} weight='bold' />
                        </a>
                        <FacebookLogo size={48} weight='bold' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer