import { Link } from "@phosphor-icons/react"

function Navbar() {
    return (
        <>
            <div className='w-full flex justify-center py-4
            			   bg-purple-800 text-white'>
            
                <div className="container flex justify-between text-lg">
                <Link to='/home' className="text-2xl font-bold">Blog Pessoal</Link>

                    <div className='flex gap-4'>
                        Postagens |
                        Temas |
                        Cadastrar tema |
                        Perfil |
                        Sair
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar