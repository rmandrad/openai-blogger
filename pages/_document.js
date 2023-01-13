import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta property="og:title" content="OpenAI Blogger" key="title"/>
        <meta property="og:description" content="Rudy Andram" key="description"/>
        <meta
          property="og:image"
          content="https://miro.medium.com/max/4800/1*qPao_uBbHlzHIzOL7ejI8w.png"
        />
        <meta name="twitter:card" content="summary_large_image"></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
