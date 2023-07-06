interface SectionHeadingProps {
    title: string;
}

const SectionHeading = (props: SectionHeadingProps) => {
    return (
        <div className="text-center mb-20">
            <div className="flex justify-center align-middle items-center">
                <Divider />
                <h2 className="inline-block text-white font-bold text-3xl">{props.title}</h2>
                <Divider />
            </div>
        </div>
    )
}

const Divider = () => {
    return (
        <div className="w-32 h-px bg-white opacity-20 mx-8"></div>
    )
}

export default SectionHeading