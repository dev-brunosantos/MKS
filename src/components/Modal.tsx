import { MouseEventHandler } from "react";
import Image from 'next/image';
import { IoMdClose } from 'react-icons/io';
import { ModalComponent } from "@/styles/ModalStyles";

interface ModalComponent {
    img: any,
    display: string,
    funcao: MouseEventHandler
}

export const Modal = ({ img, display, funcao }: ModalComponent) => {
    return (
        <ModalComponent style={{display: display}}>
            <IoMdClose size={40} onClick={funcao}
                style={{
                    position: 'absolute',
                    top: '0.5rem',
                    right: '1rem'
                }}
            />

            <Image src={img} alt="" width= {300} height= {350} />
        </ModalComponent>

    )
}