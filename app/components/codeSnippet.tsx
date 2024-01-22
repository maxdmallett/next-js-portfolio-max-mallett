import React from 'react'

interface Props {
    code: string;
    caption: string;
}

const CodeSnippet = (props: Props) => {
    const { code, caption } = props;
    return (
        <figure className="block mb-12">
            <pre className='bg-slate-800 text-slate-300 text-xs rounded-md shadow-sm px-8 py-6 overflow-x-auto'>
                <code>{code}</code>            
            </pre>
            <figcaption className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">
                {caption}
            </figcaption>
        </figure>
    )
}

export default CodeSnippet