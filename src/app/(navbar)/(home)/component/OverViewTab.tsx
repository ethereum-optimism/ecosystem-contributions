'use client'
import { LoadMarkDownType } from './Home'

interface OverViewTabProps {
  overViewData: LoadMarkDownType
}
export default function OverViewTab({ overViewData }: OverViewTabProps) {
  return (
    <div className="animate-slideup">
      <div
        className="render"
        dangerouslySetInnerHTML={{ __html: overViewData.contentHtml }}
      />
    </div>
  )
}
