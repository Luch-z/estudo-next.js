import Link from "next/Link";
import Button from "../components/Button";
import styles from "../components/Button.module.css";

export default function Home() {
    return (
        <main className="flex mt-10">
            <div className="flex flex-col mx-auto gap-4">
                <div className="text-3xl mx-auto">Hello world!</div>
                <Link className="mx-auto" href={"/dashboard"}>
                    <Button></Button>
                </Link>
            </div>
        </main>
    );
}
