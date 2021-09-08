import * as React from "react"
import Seo from "../components/seo"
import {useTranslation} from "react-i18next";
import {LocalizedLink} from "gatsby-theme-i18n"
import {Container} from "@material-ui/core";
import Header from "../components/header";

const NotFound = () => {
    const { t } = useTranslation("404");

    return (
        <Container>
            <Seo title={`404 - ${t("notFound")}`}/>
            <Header path={"/404/"} />
            <h1>404</h1>
            <p>{t("notFound")}</p>
            <p>
                <LocalizedLink to="/">
                    {t("return")}
                </LocalizedLink>
            </p>
        </Container>
    )
}

export default NotFound
