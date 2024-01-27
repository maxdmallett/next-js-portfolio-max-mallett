import Pill from './pill';

interface IPillListProps {
    pills: string[];
    alignment?: string;
}

const PillList = (props: IPillListProps) => {
    const alignment: string = props.alignment || 'right';

    return (
        <ul
            className={`flex flex-wrap gap-y-2 ${
                alignment === 'left' ? 'md:justify-end' : ''
            }`}
        >
            {props.pills.map((pill, index) => {
                return (
                    <Pill
                        text={pill}
                        key={`pill-${index}`}
                        alignment={alignment}
                    />
                );
            })}
        </ul>
    );
};

export default PillList;
