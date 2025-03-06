import Image from 'next/image'
import { cn } from '../util/cn'

export const TrustedBy = () => {
    const companies = [
        {
            name: 'RevitPay',
            logo: '/revitpay-logo.png',
            filter: 'contrast-[0%] saturate-0 brightness-100',
        },
        {
            name: 'Rocket Connect',
            logo: '/rocket-connect-logo.png',
            filter: 'contrast-[100%] saturate-0 brightness-[50%]',
        },
        {
            name: 'Soon, your team?',
            logo: '/green-mess.png',
            filter: ' saturate-0 brightness-100',
        },
    ]
    return (
        <div className="w-full border-t border-neutral-800">
            <h2 className="text-xl text-center font-semibold pt-6 pb-4 px-4">
                Trusted by developers at innovative companies around the world
            </h2>
            <div className="grid grid-cols-3 divide-x divide-neutral-800 border-y border-neutral-800">
                {companies.map((item, index) => (
                    <div
                        key={index}
                        className="flex items-center justify-center p-2"
                    >
                        <div className="relative w-full aspect-video h-16">
                            <Image
                                title={item.name}
                                className={cn(item.filter, 'p-2')}
                                src={item.logo}
                                alt={item.name}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                style={{
                                    objectFit: 'contain',
                                }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
