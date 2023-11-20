import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

export const Footer = () => {
    return (
        <div style={{ background: "var(--dark-2)", padding:"40px 0" }} className="w-100 ">
            <div className="w-90 auto footer_wrapper">
                <div className="flex column gap-2">
                    <h4 className="fs-14 text-extra-bold">Communities</h4>
                    <ul className="flex column gap-1 text-grey text-bold fs-14">
                        <li>About</li>
                        <li>Jobs</li>
                        <li>For the record</li>
                    </ul>
                </div>
                <div className="flex column gap-2">
                    <h4 className="fs-14 text-extra-bold">Company</h4>
                    <ul className="flex column gap-1 text-grey text-bold fs-14">
                        <li>For Artists</li>
                        <li>For Developers</li>
                        <li>Advertising</li>
                        <li>Investors</li>
                        <li>Vendors</li>
                    </ul>
                </div>
                <div className="flex column gap-2">
                    <h4 className="fs-14 text-extra-bold">Useful Links</h4>
                    <ul className="flex column gap-1 text-grey text-bold fs-14">
                        <li>Support</li>
                        <li>Free Mobile App</li>
                    </ul>
                </div>
                <div className="flex item-start justify-end gap-2">
                    <div className="icons icon2 flex item-center justify-center">
                        <FaInstagram fontSize={"20px"} />
                    </div>
                    <div className="icons icon2 flex item-center justify-center">
                        <FaTwitter fontSize={"20px"} />
                    </div>
                    <div className="icons icon2 flex item-center justify-center">
                        <FaFacebook fontSize={"20px"} />
                    </div>
                </div>
            </div>
            <div className="w-90 auto fs-12 text-grey text-light">
                @2023 Spotify EddyCodeVerse
            </div>
        </div>
    )
}