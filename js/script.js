$(document).ready(function() {

    // Toggle chatbot
    $('#chatbotToggle').click(function() {
        $('#chatbotBox').toggle();
    });

    // Close chatbot
    $('#closeChatbot').click(function() {
        $('#chatbotBox').hide();
    });

    // Click en enviar
    $('#sendMessage').click(function() {
        sendMessage();
    });

    // Función principal adaptada para SELECT
    function sendMessage() {
        const userMessage = $('#chatInput').val();  
        if (userMessage === '') return;

        // 🔹 Redirección a WhatsApp
        if (userMessage === "whatsapp") {
            window.open(
                "https://wa.me/59177767670?text=Hola,%20deseo%20más%20información",
                "_blank"
            );
            return;
        }

        // 🔹 Mostrar mensaje del usuario
        $('#chatbotBody').append(`
            <div class="message user-message">${userMessage}</div>
        `);

        autoScrollChat();

        // Reset selección
        $('#chatInput').val("");

        // 🔹 Respuesta del bot
        setTimeout(() => {
            let botResponse = '';

            if (userMessage.includes('inscripción')) {
                botResponse = 'Para inscribirte en la carrera de Contabilidad General puedes completar el formulario o visitarnos.';
            } 
            else if (userMessage.includes('costo')) {
                botResponse = 'Los costos varían según la modalidad. Puedes llamar al (591-2) 2834933.';
            } 
            else if (userMessage.includes('horario')) {
                botResponse = 'Tenemos turnos mañana y noche, según disponibilidad.';
            } 
            else if (userMessage.includes('requisitos')) {
                botResponse = 'Requisitos: título de bachiller, CI, fotografías tamaño carnet y formulario.';
            } 
            else {
                botResponse = 'Gracias por tu consulta. ¿Deseas más información?';
            }

            $('#chatbotBody').append(`
                <div class="message bot-message">${botResponse}</div>
            `);

            autoScrollChat();

        }, 800);
    }

    // 🔹 Función de autoscroll (scroll siempre hacia el final)
    function autoScrollChat() {
        const chat = $('#chatbotBody');
        chat.scrollTop(chat[0].scrollHeight);
    }

});
const text = "Formamos profesionales capaces de gestionar la información financiera de las organizaciones con ética y responsabilidad";
const p = document.getElementById("text");
let index = 0;

function typeWriter() {
    if (index < text.length) {
        p.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 60); // velocidad en ms (50 ms = 0.05s por letra)
    }
}

// Inicia el efecto
typeWriter();