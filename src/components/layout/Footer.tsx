import Link from 'next/link'
import { HubqlLogo } from '../kit/HubqlLogo'
import { usePathname } from 'next/navigation'
import { cn } from '../util/cn'

const year = new Date().getFullYear()

export const Footer = () => {
    const pathname = usePathname()
    if (!pathname) return null
    const isDocs = pathname.includes('/docs/')

    return (
        <footer className="w-full relative z-50">
            <div
                className={cn(
                    'flex w-full pb-16 bg-background max-w-screen-xl flex-col mx-auto gap-8 pb-4',
                    isDocs && 'max-w-full'
                )}
            >
                <ul className="w-full flex max-xl:gap-4 text-sm h-full items-start justify-between xl:grid grid-cols-5 flex-col">
                    {footerNav?.nav?.map((category, index) => {
                        return (
                            <li
                                key={'footer' + index}
                                className="text-left w-full h-full px-8 py-8"
                            >
                                <div>
                                    <p className="text-white text-lg font-semibold py-1 mb-1 font-orbitron">
                                        {category?.href ? (
                                            <Link
                                                href={category?.href}
                                                className="font-orbitron"
                                            >
                                                {category?.label}
                                            </Link>
                                        ) : (
                                            category?.label
                                        )}
                                    </p>
                                    <div>
                                        <ul>
                                            {category?.nav &&
                                                category.nav.map(
                                                    (link, index) => {
                                                        const isExternal =
                                                            link.isExternal
                                                                ? link.href
                                                                : `/${link.href}`
                                                        return (
                                                            <li
                                                                key={
                                                                    'footer-a-' +
                                                                    index
                                                                }
                                                            >
                                                                <a
                                                                    href={
                                                                        isExternal
                                                                    }
                                                                    className="block text-zinc-900 dark:text-zinc-400 text-base hover:underline dark:hover:text-zinc-50 py-1 h-[48px] lg:h-[32px] truncate  "
                                                                >
                                                                    {
                                                                        link?.label
                                                                    }
                                                                </a>
                                                            </li>
                                                        )
                                                    }
                                                )}
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        )
                    })}
                </ul>

                <div>
                    <div className="flex xl:gap-8 xl:items-center xl:flex-row flex-col-reverse items-start justify-between">
                        <div className="p-8">
                            <div className="flex gap-2 items-center mb-4 xl:mb-0">
                                <HubqlLogo className={'w-[80px] h-[24px]'} />

                                <span className="text-sm text-black dark:text-white">
                                    &copy; {year}
                                </span>
                            </div>
                            <p className=" text-sm my-4 font-orbitron">
                                Your vision - brought to life.
                            </p>

                            <div className="flex gap-4 mt-2 items-center">
                                <a href="https://discord.gg/NjAwH6VkwY">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                        stroke="none"
                                        className="w-5 h-5 opacity-50"
                                        width="100%"
                                        height="100%"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M13.5447 3.01094C12.5249 2.54302 11.4313 2.19828 10.2879 2.00083C10.2671 1.99702 10.2463 2.00654 10.2356 2.02559C10.0949 2.27573 9.93921 2.60206 9.83011 2.85856C8.60028 2.67444 7.3768 2.67444 6.17222 2.85856C6.06311 2.59636 5.90166 2.27573 5.76038 2.02559C5.74966 2.00717 5.72887 1.99765 5.70803 2.00083C4.56527 2.19764 3.47171 2.54239 2.45129 3.01094C2.44246 3.01475 2.43488 3.0211 2.42986 3.02935C0.355594 6.12826 -0.212633 9.151 0.06612 12.1362C0.067381 12.1508 0.0755799 12.1648 0.0869319 12.1737C1.45547 13.1787 2.78114 13.7889 4.08219 14.1933C4.10301 14.1996 4.12507 14.192 4.13832 14.1749C4.44608 13.7546 4.72043 13.3114 4.95565 12.8454C4.96953 12.8181 4.95628 12.7857 4.92791 12.7749C4.49275 12.6099 4.0784 12.4086 3.67982 12.18C3.64829 12.1616 3.64577 12.1165 3.67477 12.095C3.75865 12.0321 3.84255 11.9667 3.92264 11.9007C3.93713 11.8886 3.95732 11.8861 3.97435 11.8937C6.59287 13.0892 9.42771 13.0892 12.0153 11.8937C12.0323 11.8854 12.0525 11.888 12.0677 11.9C12.1478 11.9661 12.2316 12.0321 12.3161 12.095C12.3451 12.1165 12.3433 12.1616 12.3117 12.18C11.9131 12.413 11.4988 12.6099 11.063 12.7743C11.0346 12.7851 11.022 12.8181 11.0359 12.8454C11.2762 13.3108 11.5505 13.7539 11.8526 14.1742C11.8652 14.192 11.8879 14.1996 11.9087 14.1933C13.2161 13.7889 14.5417 13.1787 15.9103 12.1737C15.9223 12.1648 15.9298 12.1515 15.9311 12.1369C16.2647 8.6856 15.3723 5.68765 13.5655 3.02998C13.5611 3.0211 13.5535 3.01475 13.5447 3.01094ZM5.34668 10.3185C4.55833 10.3185 3.90876 9.59478 3.90876 8.70593C3.90876 7.81707 4.54574 7.09331 5.34668 7.09331C6.15393 7.09331 6.79722 7.82342 6.7846 8.70593C6.7846 9.59478 6.14762 10.3185 5.34668 10.3185ZM10.6632 10.3185C9.87481 10.3185 9.22527 9.59478 9.22527 8.70593C9.22527 7.81707 9.86221 7.09331 10.6632 7.09331C11.4704 7.09331 12.1137 7.82342 12.1011 8.70593C12.1011 9.59478 11.4704 10.3185 10.6632 10.3185Z"
                                            fill="currentColor"
                                        ></path>
                                    </svg>
                                </a>

                                <a href="https://github.com/hubql/hubql">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                        stroke="none"
                                        className="w-5 h-5 opacity-50"
                                        width="100%"
                                        height="100%"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M8 0C3.5816 0 0 3.58719 0 8.01357C0 11.5535 2.292 14.5575 5.4712 15.6167C5.8712 15.6903 6.0168 15.4431 6.0168 15.2303C6.0168 15.0407 6.0104 14.5359 6.0064 13.8679C3.7808 14.3519 3.3112 12.7935 3.3112 12.7935C2.948 11.8671 2.4232 11.6207 2.4232 11.6207C1.6968 11.1247 2.4784 11.1343 2.4784 11.1343C3.2808 11.1903 3.7032 11.9599 3.7032 11.9599C4.4168 13.1839 5.576 12.8303 6.0312 12.6255C6.1048 12.1079 6.3112 11.7551 6.54 11.5551C4.764 11.3527 2.896 10.6647 2.896 7.59438C2.896 6.71998 3.208 6.00398 3.7192 5.44398C3.6368 5.24158 3.3624 4.42639 3.7976 3.32399C3.7976 3.32399 4.4696 3.10799 5.9976 4.14479C6.65022 3.9668 7.32355 3.87614 8 3.87519C8.68 3.87839 9.364 3.96719 10.0032 4.14479C11.5304 3.10799 12.2008 3.32319 12.2008 3.32319C12.6376 4.42639 12.3624 5.24158 12.2808 5.44398C12.7928 6.00398 13.1032 6.71998 13.1032 7.59438C13.1032 10.6727 11.232 11.3503 9.4504 11.5487C9.73762 11.7959 9.99282 12.2847 9.99282 13.0327C9.99282 14.1031 9.98322 14.9679 9.98322 15.2303C9.98322 15.4447 10.1272 15.6943 10.5336 15.6159C12.1266 15.0816 13.5115 14.0602 14.4924 12.696C15.4733 11.3318 16.0007 9.69382 16 8.01357C16 3.58719 12.4176 0 8 0Z"
                                            fill="currentColor"
                                        ></path>
                                    </svg>
                                </a>
                                <a href="https://www.linkedin.com/company/hubql/">
                                    <svg
                                        className="w-4 h-4 opacity-50"
                                        fill="#FFFFFF"
                                        height="800px"
                                        width="800px"
                                        version="1.1"
                                        id="Layer_1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 310 310"
                                    >
                                        <g id="XMLID_801_">
                                            <path
                                                id="XMLID_802_"
                                                d="M72.16,99.73H9.927c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5H72.16c2.762,0,5-2.238,5-5V104.73
		C77.16,101.969,74.922,99.73,72.16,99.73z"
                                            />
                                            <path
                                                id="XMLID_803_"
                                                d="M41.066,0.341C18.422,0.341,0,18.743,0,41.362C0,63.991,18.422,82.4,41.066,82.4
		c22.626,0,41.033-18.41,41.033-41.038C82.1,18.743,63.692,0.341,41.066,0.341z"
                                            />
                                            <path
                                                id="XMLID_804_"
                                                d="M230.454,94.761c-24.995,0-43.472,10.745-54.679,22.954V104.73c0-2.761-2.238-5-5-5h-59.599
		c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5h62.097c2.762,0,5-2.238,5-5v-98.918c0-33.333,9.054-46.319,32.29-46.319
		c25.306,0,27.317,20.818,27.317,48.034v97.204c0,2.762,2.238,5,5,5H305c2.762,0,5-2.238,5-5V194.995
		C310,145.43,300.549,94.761,230.454,94.761z"
                                            />
                                        </g>
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <div className="flex flex-col xl:flex-row xl:gap-8 p-8 max-xl:mb-8">
                            {footerNav?.legalNav?.map((category, index) => {
                                return (
                                    <a
                                        key={'footer-a' + index}
                                        href={category?.href}
                                        className="pt-1 flex items-center xl:block w-full xl:w-fit text-zinc-900 dark:text-zinc-400 hover:text-zinc-50 text-base   h-[48px] xl:h-[32px]"
                                    >
                                        {category?.label}
                                    </a>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export const footerNav = {
    __typename: 'GlobalFooter',
    nav: [
        {
            __typename: 'GlobalFooterNav',
            label: 'Services',
            href: '/services',
            nav: [
                {
                    __typename: 'GlobalFooterNavNav',
                    isExternal: null,
                    label: 'Collaborative Web Application',
                    href: 'services/collaborative-web-application',
                },
                {
                    __typename: 'GlobalFooterNavNav',
                    isExternal: null,
                    label: 'Visual & 3D Web Apps',
                    href: 'services/3d-web-application',
                },
                {
                    __typename: 'GlobalFooterNavNav',
                    isExternal: null,
                    label: 'APIs & Documentation',
                    href: 'services/apis',
                },
                {
                    __typename: 'GlobalFooterNavNav',
                    isExternal: null,
                    label: 'Intelligent Automation Systems',
                    href: 'services/intelligent-automation-systems',
                },
                {
                    __typename: 'GlobalFooterNavNav',
                    isExternal: null,
                    label: 'Web Design',
                    href: 'services/web-design',
                },
                {
                    __typename: 'GlobalFooterNavNav',
                    isExternal: null,
                    label: 'Supabase MVPs',
                    href: 'services/supabase-mvp',
                },
            ],
        },
        {
            __typename: 'GlobalFooterNav',
            label: 'Tech Stack',
            href: '/tech-stack',
            nav: [
                {
                    __typename: 'GlobalFooterNavNav',
                    isExternal: null,
                    label: 'Supabase',
                    href: 'supabase',
                },
                {
                    __typename: 'GlobalFooterNavNav',
                    isExternal: null,
                    label: 'n8n',
                    href: 'n8n',
                },
            ],
        },
        {
            __typename: 'GlobalFooterNav',
            label: 'Developers',
            href: null,
            nav: [
                {
                    __typename: 'GlobalFooterNavNav',
                    isExternal: false,
                    label: 'Events',
                    href: 'events',
                },
                {
                    __typename: 'GlobalFooterNavNav',
                    isExternal: false,
                    label: 'Support',
                    href: 'support',
                },
                {
                    __typename: 'GlobalFooterNavNav',
                    isExternal: false,
                    label: 'Glossary',
                    href: 'resources/glossary',
                },
            ],
        },

        {
            __typename: 'GlobalFooterNav',
            label: 'Company',
            href: null,
            nav: [
                {
                    __typename: 'GlobalFooterNavNav',
                    isExternal: false,
                    label: 'About',
                    href: 'about',
                },
                {
                    __typename: 'GlobalFooterNavNav',
                    isExternal: null,
                    label: 'Blog',
                    href: 'blog',
                },

                {
                    __typename: 'GlobalFooterNavNav',
                    isExternal: true,
                    label: 'Contact',
                    href: 'contact',
                },
            ],
        },
    ],
    legalNav: [
        {
            __typename: 'GlobalFooterLegalNav',
            href: '/imprint',
            label: 'Imprint',
        },
        {
            __typename: 'GlobalFooterLegalNav',
            href: '/privacy-policy',
            label: 'Privacy policy',
        },
    ],
    social: {
        __typename: 'GlobalFooterSocial',
        linkedin: null,
        twitter: '',
        github: null,
    },
}
