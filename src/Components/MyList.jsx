export function MyList() {

    const Song = [
        {
            id:1,
            namaPenyanyi : "Ryu Sun-jae",
            namaLagu : "Sudden Shower",
            namaBand : "Eclipse",
            img : "./eclipse.jpeg",
        },

        {
            id:2,
            namaPenyanyi : "Jay",
            namaLagu : "Bite me",
            namaBand : "Enhypen",
            img : "./enhypen.webp",
        },

        {
            id:3,
            namaPenyanyi : "Chanyeol",
            namaLagu : "Monster",
            namaBand : "EXO",
            img : "./exo.jpg",
        },

        {
            id:4,
            namaPenyanyi : "Lisa",
            namaLagu : "Ice Cream",
            namaBand : "Blackpink",
            img : "./blackpink.webp",
        },

        {
            id:5,
            namaPenyanyi : "Kwon Jung-yeol.",
            namaLagu : "Spring Snow",
            namaBand : "10cm",
            img : "./10cm.jpg"
        }

    ]

    const handleClick = (lagu) =>{
        alert(`Nama Penyanyi:${lagu.namaPenyanyi}\n Nama Lagu : ${lagu.namaLagu}\n Nama Band : ${lagu.namaBand}`);
    }
        
    return(
        <div className="content">
        {Song.map((lagu) => (
                    <div key={lagu.id} className="musik">
                        <img src={lagu.img} alt={lagu.namaBand} className="gambar" />
                        <p>{lagu.namaBand}</p>
                       <button onClick={() => handleClick(lagu)}>Lihat Selengkapnya</button> 
                    </div>
                ))}     

        </div>
    )

}
