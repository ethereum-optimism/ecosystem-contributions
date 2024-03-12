import './Checkbox.css'
interface CheckBoxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  sizeCheckbox?: string
}

export default function Checkbox({
  label,
  sizeCheckbox = 'min-w-[20px] min-h-[20px]',
  ...props
}: CheckBoxProps) {
  return (
    <div className="flex z-10">
      <label className="mcui-checkbox">
        <input type="checkbox" {...props} />
        <div className={sizeCheckbox}>
          <svg className="mcui-check" viewBox="-2 -2 35 35" aria-hidden="true">
            <polyline points="7.57 15.87 12.62 21.07 23.43 9.93" />
          </svg>
        </div>
        <h6 className="pl-1 pb-1 text-sm font-normal text-gray-900">{label}</h6>
      </label>
    </div>
  )
}

{
  /* <label className="mcui-checkbox">
    <input type="checkbox"
    {...props}
    />
    <div>
        <svg className="mcui-check" viewBox="-2 -2 35 35" aria-hidden="true">
        <polyline points="7.57 15.87 12.62 21.07 23.43 9.93" />
        </svg>
    </div>
    <h6 className="text-sm font-normal text-gray-900">{label}</h6>
</label> */
}
