export function Header(){
    const user = "Susi Haryati Hutasuhut";

    return(
        <>
        <header className="header">
                <h1>My Favorite Songs</h1>
                <h3>{user ? user : "Tanpa Nama"}</h3>
            </header>
        </>
    )
}