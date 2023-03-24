export default function Header() {
    return (
        <header className="text-slate-50">
            <ul className="w-full flex justify-center space-x-4 p-2">
                <a className="hover:brightness-50" href="/">
                    Home
                </a>
                <a className="hover:brightness-50" href="/formulario/1">
                    Formulário
                </a>
            </ul>
        </header>
    );
}
