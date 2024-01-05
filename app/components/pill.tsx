interface IProps {
    text: string;
    alignment?: string;
}

const Pill = (props: IProps) => {

    const alignment: string = props.alignment || 'right';

    return (
        <li 
            className={`bg-teal-800 text-teal-300 rounded-full p-1 px-2.5 text-center text-sm select-none whitespace-nowrap last:mr-0 ${alignment === 'left' ? 'mr-1.5 md:mr-0 md:ml-1.5' : 'mr-1.5'}`}
        > 
            {props.text}
        </li>
    )
}

export default Pill