import Head from 'next/head'
import Image from 'next/image'
import { createClient } from "../prismicio";
import { PrismicLink, SliceZone } from "@prismicio/react";
import { components } from "../slices";

export default function Home({page, settings}) {
  console.log(page)
  return (
    <>
      <Head>
        <title>{page.data.title}</title>
      </Head>
      <main className={` `}>
        <h1 className="marquee">
          <span>{page.data.title} {page.data.title} {page.data.title}</span>
        </h1>
        <div className='hero'>
          <video controls muted autoPlay loop>
            <source src={page.data.video.url} type="video/mp4"/>
          </video>
        </div>
        <div className="content">
          <SliceZone slices={page.data.slices} components={components} />
        </div>
      </main>
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