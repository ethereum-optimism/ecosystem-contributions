export default function Tooltip({}: {}) {
  return (
    <div className="group relative">
      <div className="group-hover:block hidden absolute -top-6 mx-2">
        <div className="bg-black text-white text-xs rounded py-1 px-4 relative">
          Tooltip left
          <svg
            className="absolute text-black h-2 left-0 ml-3 top-full"
            x="0px"
            y="0px"
            viewBox="0 0 255 255"
          >
            <polygon className="fill-current" points="0,0 127.5,127.5 255,0" />
          </svg>
        </div>
      </div>
      temp
    </div>
  )
}
