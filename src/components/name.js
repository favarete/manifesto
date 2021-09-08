import * as React from "react"
import Layout from "./layout"
import Seo from "./seo"

const Name = ({ name, locale }) => (
    <Layout>
        <Seo title={name} />
        <h1>
            {name} & {locale}
        </h1>
    </Layout>
)

export default Name