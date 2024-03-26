'use client'
import { MarkDownData } from '../../(home)/component/Home'

export default function Cpage({ content }: { content: MarkDownData }) {

    const newContent = content.contentHtml

    return (
        <div className="w-full m-5 sm:m-6 md:m-10 lg:w-3/4 flex flex-col">
            <div
                className="render break-words text-gray-500 list-none"
                dangerouslySetInnerHTML={{ __html: newContent }}
            />
        </div>

    )
}
