import * as React from "react"
import {css, StyleSheet} from "aphrodite-jss";
import {Grid} from "@material-ui/core";
import {StaticImage} from "gatsby-plugin-image";
import {LocalizedLink, useLocalization} from "gatsby-theme-i18n";

const Header = ({path}) => {
    const {locale, config} = useLocalization()
    const langs = []

    config.forEach(lang => {
        if (lang.code !== locale) {
            langs.push(
                <LocalizedLink
                    key={lang.hrefLang}
                    to={path}
                    language={lang.code}
                    className={css(styles.links)}
                >
                    {lang.localName}
                </LocalizedLink>
            )
        }
    })

    return (
        <Grid
            container
            className={css(styles.container)}
            direction="column"
            justifyContent="center"
            alignItems="center"
        >
            <Grid
                container
                item
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                className={css(styles.header)}
                lg={12}
            >
                <Grid item>
                    <p className={css(styles.links)}>
                        {langs}
                    </p>
                </Grid>
                <Grid item>
                    <StaticImage
                        src="../../.images/logo.png"
                        width={25}
                        quality={95}
                        formats={["auto", "webp", "avif"]}
                        alt="Lidimist Icon"
                    />
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        width: "100%"
    },
    content: {
        fontFamily: "Open Sans",
        fontSize: "1.0rem",
    },
    header: {
        margin: ".8rem 0",
        borderBottom: "0.1rem solid #d0d0d0"
    },
    links: {
        fontFamily: "Open Sans",
        fontSize: "0.8rem",
        color: "#585858",
        textDecoration: "none",
        '&:hover': {
            color: "#969696"
        }
    }
});
