import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <meta charset="UTF-8" />
                <meta name="description" content="Free Web tutorials" />
                <meta name="keywords" content="HTML, CSS, JavaScript" />
                <meta name="author" content="John Doe" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}