import Head from "next/dist/shared/lib/head";

import Header from "./Header";

const Layout = (props) => {
    return (
        <>
            <Head>
                <title>{props.title}</title>
            </Head>

            <Header />
            <main className="container px-2 md:px-20 mt-20">
                {props.children}
            </main>
        </>
    )
}

export default Layout;