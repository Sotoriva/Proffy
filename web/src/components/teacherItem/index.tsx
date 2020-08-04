import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars2.githubusercontent.com/u/47084547?s=460&u=f1c268f5b07b45624714212062bb1dd307e05b7a&v=4" alt="" />
                <div>
                    <strong>João Sotoriva</strong>
                    <span>Lógica de programação</span>
                </div>
            </header>
            <p>Entusiasta das melhores tecnologias de programação</p>
            <footer>
                <p>
                    Preço/hora
                            <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp" />
                            Entrar em contato
                        </button>
            </footer>
        </article>
    )
}

export default TeacherItem;
