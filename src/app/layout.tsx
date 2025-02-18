import { LeftBar } from "../components/left-bar";
import { RightBar } from "../components/right-bar";
import "./globals.css";

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="mx-auto flex max-w-screen-md justify-between xsm:max-w-screen-xsm lg:max-w-screen-lg xl:max-w-screen-xl xxl:max-w-screen-xxl">
          <div className="px-2 xsm:px-4 xxl:px-8">
            <LeftBar />
          </div>
          <div className="flex-1 border-x-[1px] border-border_gray lg:min-w-[600px]">
            {children}
            {modal}
          </div>
          <div className="ml-4 hidden flex-1 md:ml-8 lg:flex">
            <RightBar />
          </div>
        </div>
      </body>
    </html>
  );
}
