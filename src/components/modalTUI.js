import React, { useState } from "react"
import TuiTransition from "./tuiTransition"
import { Transition } from "react-transition-group"

export default function ModalTUI() {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <Transition
            in={isOpen}
            timeout={{
                appear: 0,
                enter: 0,
                exit: 200,
            }}
        >
            <div
                data-todo-x-data="{ open: true }"
                data-todo-x-show="open"
                className="fixed bottom-0 inset-x-0 px-4 pb-6 sm:inset-0 sm:p-0 sm:flex sm:items-center sm:justify-center "
            >
                <TuiTransition
                    show={isOpen}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div
                        data-todo-x-show="open"
                        data-todo-x-transition-enter="ease-out duration-300"
                        data-todo-x-transition-enter-start="opacity-0"
                        data-todo-x-transition-enter-end="opacity-100"
                        data-todo-x-transition-leave="ease-in duration-200"
                        data-todo-x-transition-leave-start="opacity-100"
                        data-todo-x-transition-leave-end="opacity-0"
                        className="fixed inset-0 transition-opacity"
                    >
                        <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                    </div>
                </TuiTransition>
                <TuiTransition
                    show={isOpen}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    enterTo="opacity-100 translate-y-0 sm:scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                    leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                    <div
                        data-todo-x-show="open"
                        data-todo-x-transition-enter="ease-out duration-300"
                        data-todo-x-transition-enter-start="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        data-todo-x-transition-enter-end="opacity-100 translate-y-0 sm:scale-100"
                        data-todo-x-transition-leave="ease-in duration-200"
                        data-todo-x-transition-leave-start="opacity-100 translate-y-0 sm:scale-100"
                        data-todo-x-transition-leave-end="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        className="bg-white rounded-lg px-4 pt-5 pb-4 overflow-hidden shadow-xl transform transition-all sm:max-w-sm sm:w-full sm:p-6"
                    >
                        <div>
                            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                                <svg
                                    className="h-6 w-6 text-green-600"
                                    stroke="currentColor"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                            </div>
                            <div className="mt-3 text-center sm:mt-5">
                                <h3 className="text-lg leading-6 font-medium text-gray-900">Payment successful</h3>
                                <div className="mt-2">
                                    <p className="text-sm leading-5 text-gray-500">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet
                                        labore.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-5 sm:mt-6">
                            <span className="flex w-full rounded-md shadow-sm">
                                <button
                                    data-todo-at-click="open = false; setTimeout(() => open = true, 1000)"
                                    onClick={() => {
                                        setIsOpen(false);
                                        setTimeout(() => setIsOpen(true), 1000);
                                    }}
                                    type="button"
                                    className="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-indigo-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                                >
                                    Go back to dashboard
                                </button>
                            </span>
                        </div>
                    </div>
                </TuiTransition>
            </div>
        </Transition>
    );
}