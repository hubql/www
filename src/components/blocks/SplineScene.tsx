'use client'

import dynamic from 'next/dynamic'

const Spline = dynamic(
    () => import('@splinetool/react-spline').then((mod) => mod.default),
    {
        ssr: false,
        loading: () => <div className="w-full h-full" />,
    }
)

export const SplineScene = ({ scene }: { scene: string }) => {
    return <Spline scene={scene} />
}
