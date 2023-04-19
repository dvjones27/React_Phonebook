import React from 'react'
import ContactForm from './ContactForm';

type Props = {
    id?: string[];
    open: boolean;
    onClose: () => void;
}

const Modal = ( props: Props ) => {
    if ( !props.open ) return (<></>);
    return (
        <div 
            onClick={ props.onClose } 
            className='fixed left-0 top-0 z-[1055] overflow-y-auto overflow-x-hidden outline-none w-full h-full flex overflow-auto  
            justify-center align-middle bg-gray-700 bg-opacity-25'
        >
            <div
                className='max-w-300px w-3/5 fixed flex z-1 mt-10 bg-white shadow-xl rounded'
                onClick={(e) => {
                    e.stopPropagation()
                }}    
            >
                <div className="w-full flex flex-col">
                    <div className="flex flex-row space-apart">
                        <button className="flex justify-center m-3 bg-slate-300 p-2 rounded hover:bg-slate-400 text-black"
                        onClick={props.onClose}>
                            X
                        </button>
                    </div>
                    <div className="flex flex-col items-center text-center m-3 p-2">
                        <ContactForm id={ props.id }/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal
