interface IProps {
    text: string;
}

const Paragraph = (props: IProps) => {
    return (
        <p className="mb-12 leading-normal">{props.text}</p>
    )
}

export default Paragraph