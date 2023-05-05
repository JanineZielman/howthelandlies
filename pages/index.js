import Head from 'next/head'
import Image from 'next/image'
import { createClient } from "../prismicio";
import { PrismicLink, SliceZone, PrismicRichText } from "@prismicio/react";
import { components } from "../slices";

export default function Home({page, settings}) {
  console.log(settings)
  return (
    <>
      <Head>
        <title>{page.data.title}</title>
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