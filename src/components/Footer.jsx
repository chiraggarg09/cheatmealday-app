import React from "react";

function Footer() {
    var year = new Date().getFullYear();

    return <footer>
    <p>Copyright {year} Maicon Rodrigues</p>
    </footer>
}

export default Footer;