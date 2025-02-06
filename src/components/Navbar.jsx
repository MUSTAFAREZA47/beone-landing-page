'use client'

import { useState } from 'react'
import { Dialog, DialogPanel, PopoverGroup } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

export default function Example() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="bg-gray-900 text-white">
            <nav
                aria-label="Global"
                className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
            >
                <div className="flex lg:flex-1">
                    <a href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">Money Machine X</span>
                        <img
                            alt="Logo"
                            src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=400"
                            className="h-8 w-auto"
                        />
                    </a>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="text-white"
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon aria-hidden="true" className="size-6" />
                    </button>
                </div>
                <PopoverGroup className="hidden lg:flex lg:gap-x-12">
                    <a
                        href="#"
                        className="text-sm font-semibold hover:text-gray-400"
                    >
                        Home
                    </a>
                    <a
                        href="#"
                        className="text-sm font-semibold hover:text-gray-400"
                    >
                        Features
                    </a>
                    <a
                        href="#"
                        className="text-sm font-semibold hover:text-gray-400"
                    >
                        Pricing
                    </a>
                    <a
                        href="#"
                        className="text-sm font-semibold hover:text-gray-400"
                    >
                        Contact
                    </a>
                </PopoverGroup>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <a
                        href="#"
                        className="text-sm font-semibold hover:text-gray-400"
                    >
                        DM Us <span aria-hidden="true">&rarr;</span>
                    </a>
                </div>
            </nav>
            <Dialog
                open={mobileMenuOpen}
                onClose={setMobileMenuOpen}
                className="lg:hidden"
            >
                <div className="fixed inset-0 z-10 bg-black/50" />
                <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full bg-gray-900 p-6 sm:max-w-sm">
                    <div className="flex items-center justify-between">
                        <a href="#" className="text-white">
                            Money Machine X
                        </a>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-white"
                        >
                            <XMarkIcon aria-hidden="true" className="size-6" />
                        </button>
                    </div>
                    <div className="mt-6">
                        <a
                            href="#"
                            className="block py-2 text-white hover:text-gray-400"
                        >
                            Features
                        </a>
                        <a
                            href="#"
                            className="block py-2 text-white hover:text-gray-400"
                        >
                            Pricing
                        </a>
                        <a
                            href="#"
                            className="block py-2 text-white hover:text-gray-400"
                        >
                            Contact
                        </a>
                        <a
                            href="#"
                            className="block py-2 text-white hover:text-gray-400"
                        >
                            Log in
                        </a>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    )
}
