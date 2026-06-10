import type { ReactNode } from "react";

interface TitleProps {
    children : ReactNode
    color?: string
}

const Title = ({children, color = 'light'} : TitleProps) => {
    return(
        <>
            <div>
                <h1 className={'text-uppercase fw-bold mb-5 text-center fs-1 text-'+ color }>
                    { children }
                </h1>
            </div>
        </>
    )
}

export default Title;
