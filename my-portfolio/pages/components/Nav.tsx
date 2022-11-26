import Image from "next/image";

function Nav() {
    return(
        <nav className="p-5 bg-white shadow">
            <div>
                <span className="text-2xl font-Roboto font-bold">
                    <Image className="inline" src="/images/MarnikMaesLogo.png" alt="Picture of the author" width={100} height={100}/> Portfolio Marnik Maes
                </span>
            </div>

        </nav>
    );  
};

export default Nav;