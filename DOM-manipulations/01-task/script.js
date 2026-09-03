function solve(){
    const ulElements = document.querySelectorAll('#numbers li');

    [...ulElements].forEach(el => {
        let value = Number(el.textContent);
        if (value > 0) {
            el.classList.add("positive");
        }else {
            el.classList.add("negative");
        }
    });
}