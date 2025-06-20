import "./globals.css";
import { Header, Footer } from "@/components";
import { constructMetaData } from "@/utils/metadata";
import { ReactLenis } from "lenis/react";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";

export const metadata = constructMetaData();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReactLenis root>
      <html lang="en">
        <body className="bg-bridal-health text-trace-ash">
          <Header />
          {children}
          <Footer />
          <Analytics />
          <Script
            id="fb-pixel"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '518018723905148');
                fbq('track', 'PageView');
              `,
            }}
          />
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              src="https://www.facebook.com/tr?id=518018723905148&ev=PageView&noscript=1"
            />
          </noscript>
        </body>
      </html>
    </ReactLenis>
  );
}
