import * as React from "react"
import {graphql} from "gatsby"
import Seo from "../components/seo"
import {MDXRenderer} from "gatsby-plugin-mdx";
import {css, StyleSheet} from "aphrodite-jss";
import {Container, Grid} from "@material-ui/core";
import {MDXProvider} from "@mdx-js/react";
import Header from "../components/header";

const components = {
    p: props => <p {...props} className={css(styles.content)}/>
}

const Index = ({data}) => {
    return (
        <Container>
            <Seo title="Home"/>
            <Header path={"/"} />
            <Grid item>
                <MDXProvider components={components}>
                    {data.allFile.nodes.map(({childMdx: node}) => (
                        <>
                            <Grid
                                container
                                item
                                direction="column"
                                alignContent="flex-start"
                                justifyContent="flex-start"
                                alignItems="flex-start"
                            >
                                <Grid item>
                                    <h1 className={css(styles.title)}>
                                        {node.frontmatter.title}
                                    </h1>
                                </Grid>
                                <Grid item>
                                    <p className={css(styles.subInfo)}>
                                        {node.frontmatter.read}
                                    </p>
                                </Grid>
                                <Grid item>
                                    <MDXRenderer>
                                        {node.body}
                                    </MDXRenderer>
                                </Grid>
                                <Grid
                                    container
                                    item
                                    direction="column"
                                    alignContent="flex-start"
                                    justifyContent="flex-start"
                                    alignItems="flex-start"
                                >
                                    <Grid item>
                                        <p className={css(styles.subInfo)}>
                                            {node.frontmatter.release}
                                        </p>
                                    </Grid>
                                    <Grid item>
                                        <p className={css(styles.subInfo)}>
                                            {`${node.frontmatter.version}, ${node.frontmatter.update}`}
                                        </p>
                                    </Grid>
                                    <Grid item>
                                        <p>
                                            <a
                                                href={node.frontmatter.authorLink}
                                                target="_blank"
                                                rel="noreferrer"
                                                className={css(styles.links)}
                                            >
                                                {node.frontmatter.author}
                                            </a>
                                        </p>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </>
                    ))}
                </MDXProvider>
            </Grid>
        </Container>
    )
}

export default Index

export const query = graphql`
    query($locale: String!) {
        allFile(
            filter: {
                sourceInstanceName: { eq: "manifesto" }
                childMdx: {
                    fields: { locale: { eq: $locale } },
                    frontmatter: {version: { eq: "v1.1"}} }
            }
        ) {
            nodes {
                childMdx {
                    frontmatter {
                        title
                        release
                        version
                        update
                        read
                        author
                        authorLink
                    }
                    body
                }
            }
        }
    }
`
const styles = StyleSheet.create({
    title: {
        fontFamily: "Oswald",
        fontSize: "4.4rem",
        margin: ".8rem 0"
    },
    subInfo: {
        fontFamily: "Open Sans",
        fontSize: "0.9rem",
        color: "#6d6d6d",
        margin: ".2rem 0"
    },
    links: {
        fontFamily: "Open Sans",
        fontSize: "0.8rem",
        color: "#585858",
        textDecoration: "none",
        margin: ".2rem 0",
        '&:hover': {
            color: "#969696"
        }
    }
});
