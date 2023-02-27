// This code is a custom _document.js file in Next.js.
// It is used to set the lang attribute on the html element.
// This is useful for accessibility and SEO.
// The lang attribute is set to "en", which is the language of the page.


import { Html, Head, Main, NextScript } from 'next/document'
import { useRouter } from 'next/router';

export default function Document() {

  const router = useRouter();
  router.push('/dashboard');
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
