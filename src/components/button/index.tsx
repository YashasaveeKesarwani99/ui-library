import React, { ComponentProps } from 'react'

type ButtonProps = ComponentProps<"button">;

const Button:React.FC<ButtonProps> = ({...props}:ButtonProps) => {

    return(
        <button className='text-blue-500' {...props}/>
    )
}

export default Button