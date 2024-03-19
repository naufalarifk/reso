import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react/jsx-runtime"
import { IcSearch } from "@/assets/icons";
import { Input } from "@/components";

interface TokenListProps {
    isOpen: boolean;
    closeModal: () => void;
}


export const TokenList = ({ isOpen, closeModal }: TokenListProps) => {
    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative" onClose={closeModal}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0   bg-black/50 " />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full   items-center justify-center p-4">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full max-w-md transform overflow-hidden  relative bg-[#2a2627ef] border-soft/15 rounded-lg border  p-6  shadow-xl transition-all">
                                <Dialog.Title
                                    as="h3"
                                    className="text-lg font-semibold leading-6 text-center text-white"
                                >
                                    Token List
                                </Dialog.Title>
                                <div>
                                    <div className="flex items-center space-x-2 border rounded-lg px-2 mt-2">
                                        <IcSearch className="text-white dark:text-white" />
                                        <Input className="bg-transparent text-white placeholder:text-white" placeholder="Search" type="text" />
                                    </div>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}