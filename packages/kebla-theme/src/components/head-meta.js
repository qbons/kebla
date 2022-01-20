import { connect, Head } from "frontity";

const HeadMeta = ({state, libraries}) => {
        const req = state.source.get(state.router.link);
        const meta = req.meta;
        return(
                <Head>
                        {meta.favicon != '' && <link rel="shortcut icon" href={meta.favicon} />}
                        {meta.favicon != '' &&  <link rel="apple-touch-icon" href={meta.favicon} />}
                        {meta.favicon != '' &&  <meta name="msapplication-TileImage" content={meta.favicon} />}
                        {meta.title != '' && <title>{meta.title}</title>}
                        {meta.desc != '' && <meta name="description" content={meta.desc} />}
                        <meta name="robots" content={meta.robots} />
                        {meta.canonical != '' && <link rel="canonical" href={meta.canonical} />}
                        {meta.og_locale != '' && <meta property="og:locale" content={meta.og_locale} />}
                        {meta.og_type != '' && <meta property="og:type" content={meta.og_type} />}
                        {meta.og_title != '' && <meta property="og:title" content={meta.og_title} />}
                        {meta.og_description != '' && <meta property="og:description" content={meta.og_description} />}
                        {meta.og_url != '' && <meta property="og:url" content={meta.og_url} />}
                        {meta.og_site_name != '' && <meta property="og:site_name" content={meta.og_site_name} />}
                        {meta.article_published_time != '' && <meta property="article:published_time" content={meta.article_published_time} />}
                        {meta.article_modified_time != '' && <meta property="article:modified_time" content={meta.article_modified_time} />}
                        {meta.og_image != '' && <meta property="og:image" content={meta.og_image} />}
                        {meta.og_image_width != '' && <meta property="og:image:width" content={meta.og_image_width} />}
                        {meta.og_image_height != '' && <meta property="og:image:height" content={meta.og_image_height} /> }
                        {meta.twitter_card != '' && <meta name="twitter:card" content={meta.twitter_card} />}
                </Head>       
        )
}

export default connect(HeadMeta);