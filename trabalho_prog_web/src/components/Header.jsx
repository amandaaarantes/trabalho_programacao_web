import { Link } from "react-router-dom";
import logo from "../assets/logoPokemon.png"
import { FaRegUserCircle } from "react-icons/fa";
const Header = () => {
    const barra = [
        {nome: "Monte Seu Deck", path:"/"},
        {nome: "Cartas", path:"/"},
        {nome: "Deck Sugeridos", path:"/"},
        {nome: "Meus Decks", path:"/"},
    ];
    const styleHeader = {
        nav: {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "#330659",
            height: "80px",
            width: "100%",
            padding: "0 30px",
            boxSizing: "border-box",
            
        },
        img: {
            height: "50px",
            width:"auto",
        },
        ul:{
            display:"flex",
            flexDirection: "row",
            alignItems:"center",
            listStyle: "none",
            margin: 0,
            padding: 0,
        },
        link:{
            textDecoration:"none",
            color:"#FFFFFF",
            padding: "20px",
            fontWeight: "bold",
            fontFamily: "",
            fontSize: "15px",
        },
        grupo:{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "15px",
        }
    };
    return(
        <nav style={styleHeader.nav}>
            <div>
                <Link to="/">
                    <img  style={styleHeader.img} src={logo} alt="logo do pokémon"/>
                </Link>
            </div>
            <div style={styleHeader.grupo}>
                <ul style={styleHeader.ul}>
                    { 
                        barra.map((item,i) => (
                            <li  key={i}>
                                <Link style={styleHeader.link} to={item.path}>
                                    {item.nome}
                                </Link>

                            </li>
                        ))
                    }
                    
                </ul>
                <button style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                    <FaRegUserCircle size={35} color="#ff007f" />
                </button>
            </div>
            
        </nav>
    )
}

export default Header;