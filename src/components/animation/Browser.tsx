import { TypewriterEffectSmooth } from './Typewriter'

export const Browser = () => {
    const words = [
        {
            text: 'https://cloud.hubql.com',
        },
    ]

    return (
        <div className="w-full lg:w-10/12 flex items-center justify-start pl-2 pr-4 py-2 rounded-full border border-neutral-700 gap-4">
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-neutral-800">
                <TuneIcon className="w-5 h-4.5" />
            </div>
            <div className="flex-1">
                <a
                    href="https://cloud.hubql.com"
                    target="_blank"
                    className=" text-base"
                >
                    <TypewriterEffectSmooth words={words} />{' '}
                </a>
            </div>
            <StarIcon className="w-5 h-5" />
        </div>
    )
}

const TuneIcon = ({ className }: { className?: string }) => {
    return (
        <svg
            width="14"
            height="13"
            viewBox="0 0 14 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.33341 3.11111C2.76297 3.11111 3.11119 2.76289 3.11119 2.33333C3.11119 1.90378 2.76297 1.55556 2.33341 1.55556C1.90386 1.55556 1.55563 1.90378 1.55563 2.33333C1.55563 2.76289 1.90386 3.11111 2.33341 3.11111ZM2.33341 4.66667C3.62208 4.66667 4.66674 3.622 4.66674 2.33333C4.66674 1.04467 3.62208 0 2.33341 0C1.04475 0 7.74445e-05 1.04467 7.74445e-05 2.33333C7.74445e-05 3.622 1.04475 4.66667 2.33341 4.66667Z"
                fill="white"
            />
            <path
                d="M14 3.11105L6.22222 3.11105V1.55549L14 1.55549V3.11105ZM7.77778 10.8888L6.79956e-08 10.8888L0 9.33327L7.77778 9.33327V10.8888Z"
                fill="#E8EAED"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.6667 10.8888C12.0962 10.8888 12.4444 10.5406 12.4444 10.111C12.4444 9.68149 12.0962 9.33327 11.6667 9.33327C11.2371 9.33327 10.8889 9.68149 10.8889 10.111C10.8889 10.5406 11.2371 10.8888 11.6667 10.8888ZM11.6667 12.4444C12.9553 12.4444 14 11.3997 14 10.111C14 8.82238 12.9553 7.77771 11.6667 7.77771C10.378 7.77771 9.33333 8.82238 9.33333 10.111C9.33333 11.3997 10.378 12.4444 11.6667 12.4444Z"
                fill="white"
            />
        </svg>
    )
}

const StarIcon = ({ className }: { className?: string }) => {
    return (
        <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                d="M6.85 15.325L10 13.425L13.15 15.35L12.325 11.75L15.1 9.35L11.45 9.025L10 5.625L8.55 9L4.9 9.325L7.675 11.75L6.85 15.325ZM3.825 19.5L5.45 12.475L0 7.75L7.2 7.125L10 0.5L12.8 7.125L20 7.75L14.55 12.475L16.175 19.5L10 15.775L3.825 19.5Z"
                fill="#E8EAED"
            />
        </svg>
    )
}
