import Head from "next/head";

const BaseLayout = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title || "MAFESYEN"}</title>
      </Head>
      <div className="space-y-8">{children}</div>
    </>
  );
};

export default BaseLayout;
