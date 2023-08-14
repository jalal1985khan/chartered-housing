import Head from 'next/head';
const Seo = ({ pageTitle, pageDesc, pageKeyword}) => (
    <>
    
        <title>{pageTitle}</title>
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta
        name="keywords"
        content={pageKeyword  }
      />
      <meta
        name="description"
        content={pageDesc}
      />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
    
    </>

);

export default Seo;