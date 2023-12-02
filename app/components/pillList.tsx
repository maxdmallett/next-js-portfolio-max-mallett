import Pill from "./pill";

interface IPillListProps {
    pills: string[];
}

const PillList = (props: IPillListProps) => {
    return (
        <ul className="flex flex-wrap gap-y-2">
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