import Pill from "./Pill";

interface IPillListProps {
    pills: string[];
}

const PillList = (props: IPillListProps) => {
    return (
        <ul className="flex">
            {
                props.pills.map((pill, index) => {
                    return (
                        <Pill text={pill} key={`pill-${index}`} />
                    )
                })
            }
        </ul>
    )
}

export default PillList