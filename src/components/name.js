import * as React from "react"
import Seo from "./seo"
import {Container} from "@material-ui/core";

const Name = ({ name, locale }) => (
    <Container>
        <Seo title={name} />
        <h1>
            {name} & {locale}
        </h1>
    </Container>
)

export default Name
