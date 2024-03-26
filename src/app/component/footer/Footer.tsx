import Heart from '@/public/icon/Heart'
import Lightning from '@/public/icon/Lightning'
import GitHubIcon from '@/public/icon/github-mark'
import Twitter from '@/public/icon/Twitter'
interface FooterProps {
  color?: string
}
const Footer = ({ color = 'bg-white' }: FooterProps) => {
  return (
    <footer id="footer" className={`w-full py-8 text-xs font-normal ${color}`}>
      <div className="flex flex-row justify-center items-center gap-2 mb-3">
        <a
          href="https://github.com/ethereum-optimism/ecosystem-contributions"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon></GitHubIcon>
        </a>
        <a
          href="https://twitter.com/catalyzt_tech"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Twitter></Twitter>
        </a>
      </div>
      <div className="flex flex-row items-center justify-center gap-x-2 text-gray-700">
        {/* <h6 className=" ">© 2024 Optimism</h6>
        <div>|</div> */}
        <div className="flex justify-center items-center">
          <span>Made With</span>
          <span className="mx-1">
            <Heart />
          </span>
          <span>By</span>

          <a
            href="https://twitter.com/catalyzt_tech"
            className="text-[#865CBB] hover:underline flex items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <Lightning />
            </div>
            <div>Catalyzt</div>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
