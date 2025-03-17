import Link from "next/Link";

export default function Home() {
    return (
        <main className="flex mt-10">
            <div className="flex flex-col mx-auto gap-4">
                <div className="text-3xl mx-auto">Hello world!</div>
                <Link className="mx-auto" href={"/dashboard"}>
                    <button className="bg-amber-50 py-1 px-3">Ir para o <b>Dashboard</b></button>
                </Link>
            </div>
        </main>
    );
}
