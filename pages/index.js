import Head from 'next/head'
import { createClient } from "../prismicio";
import { SliceZone, PrismicRichText } from "@prismicio/react";
import { components } from "../slices";

export default function Home({page, settings}) {

  return (
    <>
      <Head>
        <title>{page.data.title}</title>
        <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.4/jquery.min.js" integrity="sha512-pumBsjNRGGqkPzKHndZMaAG+bir374sORyzM3uulLV14lN5LyykqNk8eEeUlUkB3U0M4FApyaHraT65ihJhDpQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
      </Head>
      <main className={` `}>
        <h1 className="marquee">
          <span>{page.data.title} &nbsp; {page.data.title} &nbsp; {page.data.title}</span>
        </h1>
        <div className='hero'>
          <video muted autoPlay loop playsInline>
            <source src={page.data.video.url} type="video/mp4"/>
          </video>
        </div>
        <div className="content">
          <SliceZone slices={page.data.slices} components={components} />
        </div>
      </main>
      <footer>
        <PrismicRichText field={settings.data.footer}/>
      </footer>
    </>
  )
}


export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  const page = await client.getSingle("home");
  const settings = await client.getSingle("settings");

  return {
    props: {
      page,
      settings,
    },
  };
}