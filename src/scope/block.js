function frutas() {
    if (true) {
        var fruta1 = "Manzana"; // function scope
        let fruta2 = "Pera"; // Block scope
        const fruta3 = "Platano" // Block scope
        console.log(fruta2);
        console.log(fruta3);
        // En este caso fruta2 y fruta3 será ocupados dentro de este bloque, el único que podrá ser ocupado fuera de este block es la fruta1 ya que está declarada con var.
    }

    console.log(fruta1);
    // console.log(fruta2);
    // console.log(fruta3);
}

frutas();