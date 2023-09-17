import Image from 'next/image'


const Footer = () => {
    return (
        <div className="footer w-full fixed bottom-0">

            <div className="wrapper py-10 flex gap-10 justify-center items-center">
                <a href="https://github.com/Wguiden" target='_blank' rel="noreferrer">
                    <Image src="/logos/github2.png" alt="" className="w-10 cursor-pointer max-w-none" height="30px" width="30px"/>
                </a>
                <a href="https://www.linkedin.com/in/warren-guiden-94730416a/" target='_blank' rel="noreferrer">
                    <Image src="/logos/linkedin.png" alt="" className="w-10 cursor-pointer max-w-none" height="30px" width="30px"/>
                </a>
            </div>

        </div>

    )
}

export default Footer;
