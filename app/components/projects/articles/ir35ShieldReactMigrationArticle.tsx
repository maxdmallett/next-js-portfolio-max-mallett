import React from 'react'
import Image from 'next/image'
import InlineLink from '../../inlineLink'

const IR35ShieldReactMigrationArticle = () => {
    return (
        <>

            <figure className="block mb-12">
                <Image
                    src="/images/ir35shieldreact/shield-react-dashboard.png"
                    alt="IR35 Shield Dashboard"
                    width={800}
                    height={450}
                    className='rounded-md border border-zinc-200 shadow-sm'
                />
                <figcaption className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">
                    IR35 Shield Dashboard
                </figcaption>
            </figure>

            <p>
                This project marked the migration of an existing dashboard built with .NET Razor and Vanilla JS on the frontend, to one that uses React and Typescript. The transition aimed to enhance the user experience and leverage the benefits of a modern frontend framework.
            </p>

            <h4 className='text-lg font-bold mb-5'>
                Approach
            </h4>

            <p>
                Elements were migrated within the page incrementally, rather than replacing whole pages. This allowed for a more gradual transition where smaller changes could be pushed to production more frequently, reducing the risk of introducing bugs and preventing stale branches.
            </p>

            <h4 className='text-lg font-bold mb-5'>
                Components
            </h4>

            <h6 className='mb-2'>
                The dashboard comprises of several components, including:
            </h6>

            <ul className='list-disc list-inside mb-10'>
                <li>
                    Navbar
                </li>
                <li>
                    Sidebar
                </li>
                <li>
                    Dropdown menus
                </li>
                <li>
                    Modals
                </li>
                <li>
                    Breadcrumbs
                </li>
                <li>
                    Banners
                </li>
                <li>
                    Toasts
                </li>
                <li>
                    Alerts
                </li>
                <li>
                    Tooltips
                </li>
                <li>
                    Placeholders / skeletons
                </li>
            </ul>

            <h4 className='text-lg font-bold mb-5'>
                Global State Management with Redux
            </h4>

            <p>
                At the start of the migration process, I decided to use React Context to store the global state. As the migration process developed, I soon realised that Redux would be more appropriate for the following purposes - handling a large amount of state, containing complex update logic, and only re-rendering components that depend on the changed state. I swapped out Context for <InlineLink href="https://redux-toolkit.js.org/">Redux Toolkit</InlineLink>, resulting in a much more robust state management solution. 
            </p>

            <p>
                The Redux store comprised of consumables, subscription plan, and user account information.
            </p>

            <h4 className='text-lg font-bold mb-5'>
                Unit tests
            </h4>

            <p>
                I used <InlineLink href="https://jestjs.io/">Jest</InlineLink> and <InlineLink href="https://testing-library.com/docs/react-testing-library/intro/">React Testing Library</InlineLink> to create unit tests for all of the new Typescript components. Components that were dependent on global state were tested inside a redux provider, which allows custom test cases for every state.
            </p>

            <figure className="block mb-12">
                <Image
                    src="/images/ir35shieldreact/shield-react-unit-tests.png"
                    alt="Jest unit tests"
                    width={800}
                    height={772}
                    className='rounded-md border border-zinc-200 shadow-sm'
                />
                <figcaption className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">
                    Jest unit tests
                </figcaption>
            </figure>

            <h4 className='text-lg font-bold mb-5'>
                Handling Forms with React Hook Form
            </h4>

            <p>
                The dashboard includes several different form types. One form functions as a calculator and includes number inputs and radio buttons. Another form is for adding clients and consists of text inputs and an image uploader.
            </p>

            <p>
                I decided to use <InlineLink href="https://react-hook-form.com/">React Hook Form</InlineLink> in this app for the following reasons: registering each input to a property of the model feels robust, the ‘required’ property options for validation offer great flexibility, and the documentation is easy to understand. The handle submit method only fires when validation passes, so you have confidence that posts to the API are only happening when they should.
            </p>

            <h4 className='text-lg font-bold mb-5'>
                Live updates with SignalR
            </h4>

            <p>
                To handle live display updates when consumables are spent, we used <InlineLink href="https://dotnet.microsoft.com/en-us/apps/aspnet/signalr">SignalR</InlineLink> websockets via a Typescript interface. For example, when a credit is spent, the credits hub dispatches a method to update the consumables state in Redux. Every component that makes use of the credits property in Redux is then automatically re-rendered with the new value.
            </p>

            <h4 className='text-lg font-bold mb-5'>
                Outcome
            </h4>

            <p>
                The adoption of React with TypeScript has given us a modern codebase that aligns with industry standards and sets the foundation for future enhancements.
            </p>

            <h6>Technologies Used:</h6>

            <ul className='list-disc list-inside mb-10'>
                <li>
                    React
                </li>
                <li>
                    Typescript
                </li>
                <li>
                    Redux Toolkit
                </li>
                <li>
                    Jest
                </li>
                <li>
                    React Testing Library
                </li>
                <li>
                    React Hook Form
                </li>
                <li>
                    ChartJS
                </li>
                <li>
                    SignalR
                </li>
                <li>
                    SCSS
                </li>
            </ul>

        </>
    )
}

export default IR35ShieldReactMigrationArticle