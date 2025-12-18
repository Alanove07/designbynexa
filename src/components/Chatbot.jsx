import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: 'Hello! How can I help you today?',
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputText, setInputText] = useState('');

  const quickReplies = [
    { text: 'Services', value: 'services' },
    { text: 'Pricing', value: 'pricing' },
    { text: 'Portfolio', value: 'portfolio' },
    { text: 'Contact', value: 'contact' },
  ];

  const responses = {
    services: 'We offer Logo & Branding, Posters & Promotional Design, Illustrations & Portraits, Social Media Creatives, Brand Identity Packages, and UI/UX Design. Which service interests you?',
    pricing: 'Our pricing varies based on project scope and requirements. Please contact us directly for a custom quote tailored to your needs!',
    portfolio: 'You can view our portfolio by scrolling up to the Portfolio section or clicking "View Portfolio" in the header. Want me to take you there?',
    contact: 'You can reach us via:\n• WhatsApp: Instant chat\n• Email: contact@nexadesigns.com\n• Or use the contact form above!',
    default: 'Thanks for your message! For detailed inquiries, please use the contact form or reach out via WhatsApp. We typically respond within 24 hours.',
  };

  const handleSend = (messageText = inputText) => {
    if (!messageText.trim()) return;

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      text: messageText,
      sender: 'user',
      timestamp: new Date(),
    };
    setMessages([...messages, userMessage]);
    setInputText('');

    // Generate bot response
    setTimeout(() => {
      const botResponse = generateResponse(messageText.toLowerCase());
      const botMessage = {
        id: messages.length + 2,
        text: botResponse,
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botMessage]);
    }, 500);
  };

  const generateResponse = (input) => {
    if (input.includes('service') || input.includes('what do you')) {
      return responses.services;
    } else if (input.includes('price') || input.includes('cost') || input.includes('pricing')) {
      return responses.pricing;
    } else if (input.includes('portfolio') || input.includes('work') || input.includes('project')) {
      return responses.portfolio;
    } else if (input.includes('contact') || input.includes('reach') || input.includes('email')) {
      return responses.contact;
    } else {
      return responses.default;
    }
  };

  const handleQuickReply = (value) => {
    handleSend(quickReplies.find(r => r.value === value)?.text || '');
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: 'spring' }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full shadow-lg shadow-primary-500/50 flex items-center justify-center z-40 hover:scale-110 transition-transform group"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.svg
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </motion.svg>
          ) : (
            <motion.svg
              key="chat"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              className="w-6 h-6 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
            </motion.svg>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 w-96 h-[500px] glass rounded-2xl shadow-2xl z-40 flex flex-col overflow-hidden border border-white/10"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary-500 to-primary-600 p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <img src="/Img/Nexa-Logo-Transparent.png" alt="Nexa" className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-white">Nexa Assistant</h3>
                <p className="text-xs text-white/80">Online • Typically replies instantly</p>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-dark-card">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] px-4 py-2 rounded-2xl ${message.sender === 'user'
                        ? 'bg-primary-500 text-white rounded-br-sm'
                        : 'bg-white/10 text-gray-100 rounded-bl-sm'
                      }`}
                  >
                    <p className="text-sm whitespace-pre-line">{message.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Replies */}
            {messages.length === 1 && (
              <div className="px-4 py-2 bg-dark-card border-t border-white/10">
                <div className="flex flex-wrap gap-2">
                  {quickReplies.map((reply) => (
                    <button
                      key={reply.value}
                      onClick={() => handleQuickReply(reply.value)}
                      className="px-3 py-1 bg-white/5 hover:bg-white/10 rounded-full text-xs transition-colors"
                    >
                      {reply.text}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 bg-dark-bg border-t border-white/10">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="flex gap-2"
              >
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Type a message..."
                  className="flex-1 px-4 py-2 bg-dark-card border border-white/10 rounded-full text-sm outline-none focus:border-primary-500 transition-colors"
                />
                <button
                  type="submit"
                  className="w-10 h-10 bg-primary-500 hover:bg-primary-600 rounded-full flex items-center justify-center transition-colors"
                >
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
