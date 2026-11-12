// Insira somente números com DDI + DDD + número, por exemplo: 5541999999999
const WHATSAPP_NUMBER = '554191995889';
const EMAIL = 'contato@studiobasevisual.com.br';
function contact(service='um projeto') {
 let message;
 if(service==='formulario') message='Olá, Suzane! Conheci a Studio Base Visual pelo site e gostaria de solicitar o formulário estratégico para meu projeto de identidade visual.';
 else if(service==='caneca exclusiva') message='Olá, Suzane! Conheci suas coleções pelo site e gostaria de conversar sobre uma caneca com ilustração exclusiva.';
 else if(service.startsWith('a caneca ')) message=`Olá, Suzane! Vi ${service} no site e gostaria de consultar as possibilidades de personalização e o orçamento.`;
 else message=`Olá, Suzane! Conheci a Studio Base Visual pelo site e gostaria de conversar sobre ${service}.`;
 if(WHATSAPP_NUMBER) window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,'_blank','noopener,noreferrer');
 else window.location.href=`mailto:${EMAIL}?subject=${encodeURIComponent('Contato — Studio Base Visual')}&body=${encodeURIComponent(message)}`;
}

const menu=document.querySelector('.menu'),links=document.querySelector('.links');if(menu){menu.addEventListener('click',()=>{const isOpen=links.classList.toggle('open');menu.setAttribute('aria-expanded',String(isOpen))});links.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{links.classList.remove('open');menu.setAttribute('aria-expanded','false')}))}

// Footer copyright year (one shared implementation for all pages)
document.querySelectorAll('.current-year').forEach(el => { el.textContent = new Date().getFullYear(); });
