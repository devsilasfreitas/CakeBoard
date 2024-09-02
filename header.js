const header = document.getElementsByTagName('header')?.[0];

if (header) {
    header.children[1].children[4].innerHTML += `${user.fantasyName}!`;
}
