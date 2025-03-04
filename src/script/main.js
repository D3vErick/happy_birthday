// AOS - Animate on scroll library.
AOS.init();

//Função do contador de dias até o evento.
const eventDate = new Date("Oct 18, 2025 14:00:00"); //Data do evento pré definida, 18 de outubro de 2025, às 14:00.
const timeStampEvent = eventDate.getTime();

const countdowm = setInterval(function(){ //Função que monitora a data atual e atualiza o contador a cada 1 segundo.
    const now = new Date();
    const timeStampAtual = now.getTime();

    const eventDistance = timeStampEvent - timeStampAtual; //Variavél que calcula o tempo entre a data do atual e a do evento.

    const dayInMs = 1000 * 60 * 60 * 24; //Calculo de dias.
    const hourInMs = 1000 * 60 * 60; //Calculo de horas.
    const minuteInMs = 1000 * 60; //Calculo de minutos.

    const daysTilTheEvent = Math.floor(eventDistance / dayInMs); //Calculo de dias até o evento.
    const hoursTilTheEvent = Math.floor((eventDistance % dayInMs) / hourInMs); //Calculo de horas até o evento.
    const minutesTillTheEvent = Math.floor((eventDistance % hourInMs) / minuteInMs); //Calculo de minutos até o evento.
    const secondsTillTheEvent = Math.floor((eventDistance % minuteInMs) / 1000); //Calculo de segundos até o evento.
    
    document.getElementById('timer').innerHTML = `${daysTilTheEvent}D ${hoursTilTheEvent}H ${minutesTillTheEvent}M ${secondsTillTheEvent}S`;
    //Contador que atualiza em tempo real.

    if (eventDistance < 0) { //Resposta caso o contador chegue na data estipulada.
        clearInterval(countdowm);
        document.getElementById('timer').innerHTML = 'AGORA!!!!!!'
    }
}, 1000);
