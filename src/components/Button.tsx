import { MouseEventHandler, ReactElement } from "react"

//Descreve o que o botão precisa para funcionar
interface IButtonProps {
    children: ReactElement | string //O elemento que é mostrado dentro do botão
    onClick: (e: React.MouseEvent<HTMLElement>) => any //O que acontece quando se clica no botão
}

export function Button({ children, onClick }: IButtonProps) {
    return (
        <button onClick={onClick} className="w-56 flex justify-center">
            {children}
        </button>
    )
}