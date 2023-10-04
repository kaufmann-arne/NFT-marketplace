import { ConnectButton } from "web3uikit"
import Link from "next/link"

export default function Header() {
    return (
        <nav className="py-5 px-20 border-b-2 border-brightorange flex flex-row justify-between items-center">
            <h1 className=" py-6 font-bold text-3xl orange-500 text-brightorange">Demo Marketplace</h1><Link href="https://arnekaufmann.com"><h1 className="text-l text-white cursor-pointer"> by Arne Kaufmann</h1></Link>
            <div className="flex flex-row items-center">
                <Link href="/">
                    <a className="mr-4 p-6 text-white">Home</a>
                </Link>
                <Link href="/sell-nft">
                    <a className="mr-4 p-6 text-white">Sell NFT</a>
                </Link>
                <ConnectButton moralisAuth={false} />
            </div>
        </nav>
    )
}
