interface ListIconProps extends React.SVGProps<SVGSVGElement>{
    fill?:string;
};
const ListIcon:React.FC<ListIconProps> = ({ fill="#94A3B8", ...props }) => {


return (

    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M7.5 4.5H21V6H7.5V4.5ZM7.5 18H21V19.5H7.5V18ZM7.5 11.25H21V12.75H7.5V11.25ZM3 11.25H4.5V12.75H3V11.25ZM3 4.5H4.5V6H3V4.5ZM3 18H4.5V19.5H3V18Z" fill={fill}/>
    </svg>

    )

}
export default ListIcon;
