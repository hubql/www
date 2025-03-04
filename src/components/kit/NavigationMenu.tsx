import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu'
import clsx from 'clsx'
import * as React from 'react'

const NavigationMenu = React.forwardRef<
    React.ElementRef<typeof NavigationMenuPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>
>(({ className, children, ...props }, ref) => (
    <NavigationMenuPrimitive.Root
        ref={ref}
        className={clsx(
            'relative z-10 flex max-w-max flex-1 items-center justify-center',
            className
        )}
        {...props}
    >
        {children}
        <NavigationMenuViewport />
    </NavigationMenuPrimitive.Root>
))
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName

const NavigationMenuList = React.forwardRef<
    React.ElementRef<typeof NavigationMenuPrimitive.List>,
    React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>
>(({ className, ...props }, ref) => (
    <NavigationMenuPrimitive.List
        ref={ref}
        className={clsx(
            'group flex flex-1 list-none items-center justify-center space-x-1',
            className
        )}
        {...props}
    />
))
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName

const NavigationMenuItem = NavigationMenuPrimitive.Item

const navigationMenuTriggerStyle =
    'group inline-flex h-10 w-max items-center justify-center rounded-sm bg-transparent px-4 py-2 text-sm   font-normal transition-colors  text-black dark:text-white hover:bg-zinc-100 hover:text-black dark:hover:bg-zinc-900/70 dark:hover:text-white dark:focus:bg-black dark:focus:text-white dark:focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-zinc-100 data-[state=open]:bg-zinc-100 dark:data-[active]:bg-zinc-900 dark:data-[state=open]:bg-zinc-900'
const NavigationMenuTrigger = React.forwardRef<
    React.ElementRef<typeof NavigationMenuPrimitive.Trigger>,
    React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
    <NavigationMenuPrimitive.Trigger
        ref={ref}
        className={clsx(navigationMenuTriggerStyle, 'group', className)}
        {...props}
    >
        {children}
    </NavigationMenuPrimitive.Trigger>
))
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName

const NavigationMenuContent = React.forwardRef<
    React.ElementRef<typeof NavigationMenuPrimitive.Content>,
    React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
    <NavigationMenuPrimitive.Content
        ref={ref}
        className={clsx(
            'left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ',
            className
        )}
        {...props}
    />
))
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName

const NavigationMenuLink = NavigationMenuPrimitive.Link

const NavigationMenuViewport = React.forwardRef<
    React.ElementRef<typeof NavigationMenuPrimitive.Viewport>,
    React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>
>(({ className, ...props }, ref) => (
    <div className={clsx('absolute left-0 top-full flex justify-center')}>
        <NavigationMenuPrimitive.Viewport
            className={clsx(
                'origin-top-center relative text-black dark:text-white bg-zinc-100 dark:bg-black border-zinc-200 dark:border-zinc-700  mt-1 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-sm border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]',
                className
            )}
            ref={ref}
            {...props}
        />
    </div>
))
NavigationMenuViewport.displayName =
    NavigationMenuPrimitive.Viewport.displayName

const NavigationMenuIndicator = React.forwardRef<
    React.ElementRef<typeof NavigationMenuPrimitive.Indicator>,
    React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Indicator>
>(({ className, ...props }, ref) => (
    <NavigationMenuPrimitive.Indicator
        ref={ref}
        className={clsx(
            'top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in',
            className
        )}
        {...props}
    >
        <div className="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" />
    </NavigationMenuPrimitive.Indicator>
))
NavigationMenuIndicator.displayName =
    NavigationMenuPrimitive.Indicator.displayName

export {
    navigationMenuTriggerStyle,
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuContent,
    NavigationMenuTrigger,
    NavigationMenuLink,
    NavigationMenuIndicator,
    NavigationMenuViewport,
}
