import React from 'react'
import InlineLink from '../../inlineLink'

const PubgStatsArticle = () => {
    return (
        <>

            <h4 className='text-lg font-bold mb-5'>
                Client
            </h4>

            <p>
                The PUBG Stats Tracker mobile application is built using React Native with Expo. The app provides players with real-time statistics about their PUBG gameplay, including metrics such as total kills, wins, and matches played.                
            </p>

            <p>
                I originally built the client as a web-based React application, but later decided to create a mobile app using React Native and Expo for experimentation.
            </p>

            <h4 className='text-lg font-bold mb-5'>
                Rate Limits
            </h4>

            <p>
                One of the main challenges I faced during development was handling the PUBG API&apos;s strict rate limiting. To address this, I implemented a backend server that acts as an intermediary between the mobile app and the PUBG API. This server caches player statistics in a MongoDB database, reducing the number of direct requests to the PUBG API and ensuring compliance with its rate limits.
            </p>

            <h4 className='text-lg font-bold mb-5'>
                Server
            </h4>

            <p>
                The server functions as a focused data-aggregation layer for the application. It authenticates with the PUBG API using a secret key, fetches raw player-stat data, and transforms the responses into compact, strongly-typed objects suitable for frontend consumption.
            </p>

            <p>
                Before responding to the client, the processed player stats are persisted in a MongoDB database. Because the <InlineLink href="https://documentation.pubg.com/en/index.html">PUBG API</InlineLink> enforces a <InlineLink href="https://documentation.pubg.com/en/rate-limits.html">rate limit</InlineLink> of 10 requests per minute, the server only issues a new API request if the stored stats are older than two minutes; otherwise, the cached data from MongoDB is returned directly to the client.
            </p>

            <h6>Technologies used:</h6>

            <ul className='list-disc list-inside mb-10'>
                <li>
                    React Native
                </li>
                <li>
                    Expo
                </li>
                <li>
                    Typescript
                </li>
                <li>
                    Express
                </li>
                <li>
                    MongoDB
                </li>
            </ul>

        </>
    )
}

export default PubgStatsArticle