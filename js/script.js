
        // Slider automático
        document.addEventListener('DOMContentLoaded', function() {
            const slides = document.querySelectorAll('.slide');
            const dots = document.querySelectorAll('.slider-dot');
            let currentSlide = 0;
            
            function showSlide(n) {
                slides.forEach(slide => slide.classList.remove('active'));
                dots.forEach(dot => dot.classList.remove('active'));
                
                currentSlide = (n + slides.length) % slides.length;
                
                slides[currentSlide].classList.add('active');
                dots[currentSlide].classList.add('active');
            }
            
            function nextSlide() {
                showSlide(currentSlide + 1);
            }
            
            // Configurar controles del slider
            dots.forEach((dot, index) => {
                dot.addEventListener('click', () => {
                    showSlide(index);
                });
            });
            
            // Menú móvil
            const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
            const mainMenu = document.querySelector('.main-menu');
            
            mobileMenuBtn.addEventListener('click', () => {
                mainMenu.classList.toggle('active');
            });
            
            // Animaciones al hacer scroll
            const animateElements = document.querySelectorAll('.animate-fadeIn');
            
            function checkScroll() {
                animateElements.forEach(element => {
                    const elementTop = element.getBoundingClientRect().top;
                    const windowHeight = window.innerHeight;
                    
                    if (elementTop < windowHeight - 100) {
                        element.style.opacity = '1';
                        element.style.transform = 'translateY(0)';
                    }
                });
            }
            
            // Chatbot
            const chatbotToggle = document.getElementById('chatbotToggle');
            const chatbotWindow = document.getElementById('chatbotWindow');
            const chatbotClose = document.getElementById('chatbotClose');
            const chatbotMessages = document.getElementById('chatbotMessages');
            const chatbotInput = document.getElementById('chatbotInput');
            const chatbotSend = document.getElementById('chatbotSend');
            
            chatbotToggle.addEventListener('click', () => {
                chatbotWindow.style.display = 'flex';
            });
            
            chatbotClose.addEventListener('click', () => {
                chatbotWindow.style.display = 'none';
            });
            
            function addMessage(text, isUser) {
                const messageDiv = document.createElement('div');
                messageDiv.classList.add('message');
                messageDiv.classList.add(isUser ? 'user-message' : 'bot-message');
                messageDiv.textContent = text;
                chatbotMessages.appendChild(messageDiv);
                chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
            }
            
            function processMessage(message) {
                const lowerMessage = message.toLowerCase();
                
                if (lowerMessage.includes('hola') || lowerMessage.includes('buenos días') || lowerMessage.includes('buenas tardes')) {
                    return '¡Hola! ¿En qué puedo ayudarte? Puedo proporcionarte información sobre nuestros programas, admisión, horarios de atención, etc.';
                } else if (lowerMessage.includes('programa') || lowerMessage.includes('carrera') || lowerMessage.includes('estudiar')) {
                    return 'Ofrecemos varios programas: Contabilidad General, Auditoría Financiera, Tributación, Costos y Presupuestos, y diversos Diplomados. ¿Te interesa alguno en particular?';
                } else if (lowerMessage.includes('admisión') || lowerMessage.includes('inscripción') || lowerMessage.includes('ingreso')) {
                    return 'El proceso de admisión incluye: 1) Llenar formulario en línea, 2) Presentar documentación requerida, 3) Entrevista personal. ¿Te gustaría conocer los requisitos específicos?';
                } else if (lowerMessage.includes('horario') || lowerMessage.includes('atención') || lowerMessage.includes('abierto')) {
                    return 'Nuestro horario de atención es de lunes a viernes de 8:00 a 18:00 y sábados de 8:00 a 12:00. También puedes contactarnos al +591 2 2773555.';
                } else if (lowerMessage.includes('costo') || lowerMessage.includes('precio') || lowerMessage.includes('pago')) {
                    return 'Los costos varían según el programa. Te recomiendo contactar a nuestra área de admisiones para obtener información detallada sobre aranceles y formas de pago.';
                } else if (lowerMessage.includes('gracias') || lowerMessage.includes('bye') || lowerMessage.includes('chao')) {
                    return '¡De nada! Estoy aquí para ayudarte cuando lo necesites. ¡Que tengas un excelente día!';
                } else {
                    return 'Lo siento, no tengo información sobre eso. Te recomiendo contactar a nuestro personal al +591 2 2773555 para asistencia más específica.';
                }
            }
            
            function sendMessage() {
                const message = chatbotInput.value.trim();
                if (message) {
                    addMessage(message, true);
                    chatbotInput.value = '';
                    
                    // Simular tiempo de respuesta
                    setTimeout(() => {
                        const response = processMessage(message);
                        addMessage(response, false);
                    }, 1000);
                }
            }
            
            chatbotSend.addEventListener('click', sendMessage);
            
            chatbotInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    sendMessage();
                }
            });
            
            // Formulario de contacto
            const contactForm = document.getElementById('contactForm');
            
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.');
                contactForm.reset();
            });
            
            // Inicializar
            setInterval(nextSlide, 5000);
            window.addEventListener('scroll', checkScroll);
            checkScroll(); // Verificar elementos visibles al cargar la página
        });
    