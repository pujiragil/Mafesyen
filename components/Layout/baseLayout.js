import Head from "next/head";

export default function BaseLayout({ title, children }) {
  return (
    <div className="container mx-auto">
      <Head>
        <title>{title || "MAFESYEN"}</title>
      </Head>
      {children}
    </div>
  )
}