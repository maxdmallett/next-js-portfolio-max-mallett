import React from 'react'

const InlineLink = (props: React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>) => {
    return (
        <a href={props.href} target='_blank' className='font-medium text-teal-500 hover:underline'>{props.children}</a>
    )
}

export default InlineLink