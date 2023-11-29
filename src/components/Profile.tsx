import profilePx from '@/assets/profilePx.png'
import Image from 'next/image'

export default function Profile() {
  return (
    <div id="profile" className="my-32 flex max-w-screen-lg justify-between">
      <div>
        <h3 className="text-green">Ola, meu nome é</h3>
        <h1 className="text-white">Gustavo Campos</h1>
        <p>
          sou um desenvolvedor fullstack apaixonado por tecnologia. Meu objetivo
          é criar interfaces de usuário bonitas e funcionais. Estou sempre
          aberto a novas oportunidades e desafios.
        </p>
        <button>hi@yourname.com</button>
      </div>
      <div>
        <div className="overflow-hidden rounded-full border bg-slate-200">
          <Image
            src={profilePx}
            width={250}
            height={250}
            alt={'Imagem do author'}
          />
        </div>
      </div>
    </div>
  )
}
