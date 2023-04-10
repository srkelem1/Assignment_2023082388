import Link from 'next/link'
export default function Firstpage() {
    return (
        <div>
            <h1>My own page</h1>
            <h2>-2023082388, 정경욱, information system-</h2>
            <ol>
                <li><h4>hobby</h4>
                    <ul><h6>
                        <li>-looking my cat</li>
                        <li>|</li>
                        <li>-single player game</li>
                    </h6></ul>
                </li>
                <li>|</li>
                <li>|</li>
                <li>|</li>
                <li>|</li>
                <li>|</li>
                <li>|</li>
                <li>|</li>
                <li>|</li>
                <li>|</li>
                <li><h4>others</h4>
                    <ul><h6>
                        <li>-my cat's name is Mint.</li>
                        <li>|</li>
                        <li><p>-when I created this page, the page's structure is different with sample.</p>
                        <p>so it was hard for me to make this.</p>
                        </li>
                        <li>|</li>
                        <li>|</li>
                        <li>|</li>
                        <li>|</li>
                    </h6></ul>
                </li>
            </ol>
            <Link href="/">Back to the home</Link>
        </div>
    )
}