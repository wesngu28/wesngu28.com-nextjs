import Head from 'next/head'

export default function Metadata() {
    return (
        <Head>
            <title>Wesley Nguyen</title>
            <meta name='description' content="Personal website of Wesley Nguyen, an aspiring developer." />
            <meta charSet="UTF-8" />
            <link rel="shortcut icon" href="/favicons/favicon.ico" />
            <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
            <link rel="manifest" href="/site.webmanifest" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
    )
}