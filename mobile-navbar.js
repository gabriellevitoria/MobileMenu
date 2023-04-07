class MobileNavbar{ //poderia estar usando uma função, mas optamos pela classe para organizar melhor os elementos
    constructor(mobileMenu,navList, navLinks){
        this.mobileMenu = document.querySelector(mobileMenu); //parâmetro
        this.navList = document.querySelector(navList); //parâmetro
        this.navLinks = document.querySelectorAll(navLinks); //parâmetro -> usados para selecionar os elementos html
        this.activeClass = "active"; //propriedade usada para definir a classe CSS que será adicionada ao elemento do menu
        
        this.handleClick = this.handleClick.bind(this);
    }

    animateLinks(){
        this.navLinks.forEach((link, index) => {
            
            console.log(index);
            link.style.animation
            ? (link.style.animation = "")
            : (link.style.animation = `navLinkFade 0.5s ease fowards 0.3s`);

        })
    }

    handleClick(){ //método que é chamado quando o botão é clicado

        this.navList.classList.toggle(this.activeClass);/*outro método usado para adicionar ou remover a classe "active" do elemento
        "navlist". Essa classe é usada para mostrar ou ocultar a lista de navegação quando o botão mobileMenu é clicado*/
        
        this.animateLinks(); //metodo apenas para animar os links que acontecerá toda vez que alguém clicar
    }

    addClickEvent(){ //metodo que adiciona evento de click no botão 
        this.mobileMenu.addEventListener("click", this.handleClick); //novo método
    }

    init () /*metodo que inicia a função se o mobile menu existir */{
        if(this.mobileMenu){
            this.addClickEvent();
        }

        return this;
    }
}

const mobileNavbar = new MobileNavbar(
    ".mobile-menu", //argumento
    ".nav-list", //argumento
    ".nav-list li", //argumento

);
mobileNavbar.init(); //metodo chamado para iniciar a função