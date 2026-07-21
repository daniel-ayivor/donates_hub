import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot } from 'lucide-react';

interface Message {
  sender: 'bot' | 'user';
  text: string;
}

interface FAQ {
  keywords: string[];
  answer: string;
}

const FAQS: FAQ[] = [
  {
    keywords: ['donate', 'donation', 'give', 'giving', 'support financially', 'fund'],
    answer:
      "You can support our work through the Donate page. We accept one-time and recurring gifts, and every donation helps fund our WaSH, children's, and community empowerment programs. Visit /donate to get started.",
  },
  {
    keywords: ['volunteer', 'get involved', 'join', 'help out', 'participate'],
    answer:
      "We'd love to have you! Visit our Get Involved page to see current volunteering opportunities, from short-term outreach to longer partnerships with churches and communities.",
  },
  {
    keywords: ['contact', 'phone', 'email', 'reach', 'call', 'number'],
    answer:
      "You can reach us at +233 50 403 7082 or +233 26 284 8837, or email aap@aapghana.org. Our office is on GNAT ST, Sunyani, Bono Region, Ghana.",
  },
  {
    keywords: ['location', 'where', 'address', 'office', 'based'],
    answer:
      "Our operational base is in Sunyani, Bono Region, Ghana. We serve communities across Ghana, Liberia, and Togo.",
  },
  {
    keywords: ['hours', 'open', 'time', 'working hours'],
    answer: 'Our office hours are Mon–Fri, 8:00 AM–5:00 PM, and Sat 9:00 AM–2:00 PM.',
  },
  {
    keywords: ['mission', 'vision', 'about', 'who are you', 'purpose'],
    answer:
      "Africa Assistance Plan is a Christian NGO founded in 1983. Our vision is '...that Africa might be saved,' and our mission is empowering the Church and communities for holistic, child-centered development.",
  },
  {
    keywords: ['wash', 'water', 'sanitation', 'hygiene', 'borehole', 'drilling'],
    answer:
      "Our WaSH program has provided clean water and sanitation to vulnerable communities for over 22 years, including borehole drilling led by our field team.",
  },
  {
    keywords: ['project', 'program', 'initiative', 'activities'],
    answer:
      'We run programs in children & youth development, WaSH, and church/community empowerment. Check out the Impact and Activities pages for details on current and past projects.',
  },
  {
    keywords: ['history', 'founded', 'started', 'when'],
    answer:
      'Africa Assistance Plan was founded in 1983 by Bishop David Donkor, and we\'ve been serving communities across Africa for over 40 years.',
  },
];

const QUICK_REPLIES = ['How do I donate?', 'How can I volunteer?', 'Where are you located?'];

const matchFAQ = (input: string): string | null => {
  const lower = input.toLowerCase();
  let bestMatch: FAQ | null = null;
  let bestScore = 0;

  for (const faq of FAQS) {
    const score = faq.keywords.filter((kw) => lower.includes(kw)).length;
    if (score > bestScore) {
      bestScore = score;
      bestMatch = faq;
    }
  }

  return bestScore > 0 ? bestMatch!.answer : null;
};

const FAQChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: 'bot',
      text: "Hi! 👋 I'm the AAP assistant. Ask me about donating, volunteering, our programs, or how to reach us.",
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;
    const userMsg: Message = { sender: 'user', text };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const answer =
        matchFAQ(text) ||
        "I don't have an answer for that yet — for anything specific, reach us at aap@aapghana.org or +233 50 403 7082, and our team will help directly.";
      setMessages((prev) => [...prev, { sender: 'bot', text: answer }]);
      setIsTyping(false);
    }, 600);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  return (
    <>
      {/* Floating toggle button */}
      <motion.button
        onClick={() => setIsOpen((v) => !v)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-[9998] bg-brand-blue text-white p-4 rounded-full shadow-xl hover:bg-blue-700 transition-colors"
        aria-label="Open FAQ chat"
      >
        <AnimatePresence mode="wait" initial={false}>
          {isOpen ? (
            <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <X className="h-6 w-6" />
            </motion.span>
          ) : (
            <motion.span key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
              <MessageCircle className="h-6 w-6" />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-24 right-6 z-[9998] w-[92vw] max-w-sm h-[70vh] max-h-[520px] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-brand-blue px-4 py-4 flex items-center gap-3">
              <div className="bg-white/15 p-2 rounded-full">
                <Bot className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="text-white font-bold text-sm">AAP Assistant</h3>
                <p className="text-blue-100 text-xs">Ask me a quick question</p>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-gray-50">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div
                    className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-brand-gold text-brand-blue font-medium rounded-br-sm'
                        : 'bg-white text-gray-700 border border-gray-200 rounded-bl-sm'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white border border-gray-200 rounded-2xl rounded-bl-sm px-4 py-3 flex gap-1">
                    {[0, 1, 2].map((d) => (
                      <motion.span
                        key={d}
                        className="w-1.5 h-1.5 bg-gray-400 rounded-full"
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 1, repeat: Infinity, delay: d * 0.15 }}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Quick replies — only shown before the user's first message */}
              {messages.length === 1 && (
                <div className="flex flex-wrap gap-2 pt-1">
                  {QUICK_REPLIES.map((q) => (
                    <button
                      key={q}
                      onClick={() => sendMessage(q)}
                      className="text-xs bg-white border border-gray-300 text-gray-700 px-3 py-1.5 rounded-full hover:border-brand-gold hover:text-brand-blue transition-colors"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              )}
              <div ref={endRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="p-3 border-t border-gray-200 bg-white flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your question..."
                className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-full focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 outline-none"
              />
              <button
                type="submit"
                aria-label="Send message"
                className="bg-brand-blue text-white p-2.5 rounded-full hover:bg-blue-700 transition-colors disabled:opacity-50"
                disabled={!input.trim()}
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FAQChatbot;