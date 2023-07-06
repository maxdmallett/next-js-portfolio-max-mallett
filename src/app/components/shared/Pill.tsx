interface IProps {
    text: string;
}

const Pill = (props: IProps) => {
    return (
        <li 
            className='bg-teal-800 text-teal-300 rounded-full p-1 px-2.5 text-center text-sm select-none mr-1.5 whitespace-nowrap'
        > 
            {props.text}
        </li>
    )
}

export default Pill