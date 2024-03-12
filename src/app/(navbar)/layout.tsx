import { Suspense } from 'react'
import Navbar from '../component/navbar/Navbar'
import Loading from './loading'

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <Suspense fallback={<Loading />}>
      <div className="">
        <div className="sticky top-0 z-40">
          <Navbar />
        </div>
        {children}
      </div>
    </Suspense>
  )
}
