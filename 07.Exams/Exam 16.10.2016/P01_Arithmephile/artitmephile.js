function artitmethile(input = []) {

    let maxProduct = Number.NEGATIVE_INFINITY;

    input = input.map(Number).filter(e=>!isNaN(e));

    for (let i = 0; i < input.length; i++) {

        let s = input[i];

        if (s >= 1 && s <= 9) {

            if (input[i+1]!=undefined&&input[i + s]!=undefined) {
                let sectionArr = input.slice(i + 1, i + s + 1);
                let product = sectionArr.reduce((a, b) => a * b)
                
                if (product>=maxProduct) {
                    maxProduct=product;
                }
            }
        }
    }
    console.log(maxProduct);
}

artitmethile(['10', '20', '2', '30', '44', '3', '56', '20', '24']);
artitmethile(['1', '2', '2', '3', '2', '3', '2', '1', '1', ]);
