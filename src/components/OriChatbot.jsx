import { useState, useRef, useEffect, useCallback } from "react";
import { X, Send, Sparkles, ChevronDown, Loader2, MessageCircle } from "lucide-react";
import { SYSTEM_PROMPT } from "../lib/ospiraKnowledge";

// ─── CONFIG ────────────────────────────────────────────────────────────────────
// API key is read from .env.local (VITE_OPENAI_API_KEY=sk-...).
// Never commit the real key — .env.local is gitignored.
const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY || "";
const MODEL = "gpt-4o-mini";
const MAX_TOKENS = 400;

// ─── QUICK SUGGESTION CHIPS ────────────────────────────────────────────────────
const SUGGESTIONS = [
  "What is Ospira?",
  "What age groups do you work with?",
  "What programmes do you offer?",
  "How does the assessment work?",
  "How is Ospira different from school counselling?",
  "Book a discovery call",
];

// ─── WELCOME MESSAGE ───────────────────────────────────────────────────────────
const WELCOME = {
  role: "assistant",
  id: "welcome",
  content:
    "Hi, I'm **Ori** — Ospira's assistant 👋\n\nI'm here to help you understand how Ospira works, which programme might suit your family, and how to take the next step.\n\nWhat's on your mind?",
};

// ─── MARKDOWN-LITE RENDERER ────────────────────────────────────────────────────
function renderContent(text) {
  // Split on newlines and handle bold, bullet points
  const lines = text.split("\n");
  const elements = [];
  let bulletBuffer = [];
  let keyCounter = 0;

  const flushBullets = () => {
    if (bulletBuffer.length > 0) {
      elements.push(
        <ul key={`ul-${keyCounter++}`} className="mt-1.5 mb-1 space-y-1 pl-4">
          {bulletBuffer.map((b, i) => (
            <li key={i} className="text-[13.5px] leading-relaxed list-disc list-outside">
              {renderInline(b)}
            </li>
          ))}
        </ul>
      );
      bulletBuffer = [];
    }
  };

  lines.forEach((line, i) => {
    const trimmed = line.trim();
    if (trimmed.startsWith("- ") || trimmed.startsWith("• ")) {
      bulletBuffer.push(trimmed.slice(2));
    } else {
      flushBullets();
      if (trimmed === "") {
        if (i > 0) elements.push(<div key={`br-${keyCounter++}`} className="h-1" />);
      } else {
        elements.push(
          <p key={`p-${keyCounter++}`} className="text-[13.5px] leading-relaxed">
            {renderInline(trimmed)}
          </p>
        );
      }
    }
  });
  flushBullets();
  return elements;
}

function renderInline(text) {
  // Bold: **text**
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i} className="font-semibold text-[#23092F]">{part.slice(2, -2)}</strong>;
    }
    return <span key={i}>{part}</span>;
  });
}

// ─── TYPING INDICATOR ──────────────────────────────────────────────────────────
function TypingIndicator() {
  return (
    <div className="flex items-end gap-2.5 mb-3">
      <div className="flex-shrink-0 w-7 h-7 rounded-full bg-gradient-to-br from-[#4A1A6B] to-[#C87E4F] flex items-center justify-center shadow-sm">
        <Sparkles className="w-3.5 h-3.5 text-white" />
      </div>
      <div className="bg-white border border-[#ECE2E6] rounded-2xl rounded-bl-sm px-4 py-3 shadow-sm">
        <div className="flex gap-1 items-center h-4">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="block w-1.5 h-1.5 rounded-full bg-[#4A1A6B]/40 animate-bounce"
              style={{ animationDelay: `${i * 0.15}s`, animationDuration: "0.9s" }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── MESSAGE BUBBLE ───────────────────────────────────────────────────────────
function MessageBubble({ msg, isNew }) {
  const isUser = msg.role === "user";
  return (
    <div
      className={`flex items-end gap-2.5 mb-3 ${isUser ? "flex-row-reverse" : ""} ${
        isNew ? "animate-[fadeSlideUp_0.25s_ease-out]" : ""
      }`}
    >
      {!isUser && (
        <div className="flex-shrink-0 w-7 h-7 rounded-full bg-gradient-to-br from-[#4A1A6B] to-[#C87E4F] flex items-center justify-center shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-white" />
        </div>
      )}
      <div
        className={`max-w-[82%] rounded-2xl px-4 py-3 shadow-sm ${
          isUser
            ? "bg-[#4A1A6B] text-white rounded-br-sm"
            : "bg-white border border-[#ECE2E6] text-[#23092F] rounded-bl-sm"
        }`}
      >
        {isUser ? (
          <p className="text-[13.5px] leading-relaxed text-white">{msg.content}</p>
        ) : (
          <div className="space-y-0.5">{renderContent(msg.content)}</div>
        )}
      </div>
    </div>
  );
}

// ─── MAIN CHATBOT COMPONENT ───────────────────────────────────────────────────
export function OriChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([WELCOME]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const [newMsgIds, setNewMsgIds] = useState(new Set(["welcome"]));
  const [unread, setUnread] = useState(0);

  const bottomRef = useRef(null);
  const inputRef = useRef(null);
  const msgIdCounter = useRef(1);

  const scrollToBottom = useCallback(() => {
    setTimeout(() => bottomRef.current?.scrollIntoView({ behavior: "smooth" }), 60);
  }, []);

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setTimeout(() => inputRef.current?.focus(), 150);
      setUnread(0);
    }
  }, [isOpen, scrollToBottom]);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading, scrollToBottom]);

  const sendMessage = useCallback(
    async (text) => {
      const content = text?.trim() || input.trim();
      if (!content || isLoading) return;

      setInput("");
      setError(null);
      setShowSuggestions(false);

      const userMsgId = `u-${msgIdCounter.current++}`;
      const userMsg = { role: "user", id: userMsgId, content };
      setMessages((prev) => [...prev, userMsg]);
      setNewMsgIds((prev) => new Set([...prev, userMsgId]));
      setIsLoading(true);

      // Build OpenAI messages array (exclude our synthetic id field)
      const historyForApi = [...messages, userMsg]
        .filter((m) => m.id !== "welcome" || m.role === "assistant")
        .map(({ role, content }) => ({ role, content }));

      try {
        const res = await fetch("https://api.openai.com/v1/chat/completions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${OPENAI_API_KEY}`,
          },
          body: JSON.stringify({
            model: MODEL,
            max_tokens: MAX_TOKENS,
            temperature: 0.5,
            messages: [
              { role: "system", content: SYSTEM_PROMPT },
              ...historyForApi,
            ],
          }),
        });

        if (!res.ok) {
          const errData = await res.json().catch(() => ({}));
          throw new Error(errData?.error?.message || `API error ${res.status}`);
        }

        const data = await res.json();
        const reply = data.choices?.[0]?.message?.content?.trim() || "Sorry, I didn't get a response. Please try again.";
        const assistantId = `a-${msgIdCounter.current++}`;
        setMessages((prev) => [...prev, { role: "assistant", id: assistantId, content: reply }]);
        setNewMsgIds((prev) => new Set([...prev, assistantId]));
        if (!isOpen) setUnread((c) => c + 1);
      } catch (err) {
        setError(err.message || "Something went wrong. Please try again.");
      } finally {
        setIsLoading(false);
      }
    },
    [input, isLoading, messages, isOpen]
  );

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* ── Floating Bubble Button ── */}
      <button
        id="ori-chatbot-trigger"
        onClick={() => setIsOpen((v) => !v)}
        aria-label="Chat with Ori"
        className={`fixed bottom-5 right-5 z-[9998] flex items-center justify-center w-14 h-14 rounded-full shadow-[0_8px_28px_-4px_rgba(74,26,107,0.55)] transition-all duration-300 hover:scale-110 active:scale-95 ${
          isOpen
            ? "bg-[#23092F] rotate-0"
            : "bg-gradient-to-br from-[#4A1A6B] to-[#7B2FA3] rotate-0"
        }`}
      >
        <span className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${isOpen ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}>
          <X className="w-5 h-5 text-white" />
        </span>
        <span className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${isOpen ? "opacity-0 scale-75" : "opacity-100 scale-100"}`}>
          <MessageCircle className="w-6 h-6 text-white" />
        </span>
        {unread > 0 && !isOpen && (
          <span className="absolute -top-1 -right-1 flex items-center justify-center w-5 h-5 rounded-full bg-[#ED196A] text-[10px] font-bold text-white shadow">
            {unread}
          </span>
        )}
      </button>

      {/* ── Chat Window ── */}
      <div
        id="ori-chatbot-window"
        className={`fixed bottom-24 right-5 z-[9997] flex flex-col rounded-2xl overflow-hidden shadow-[0_24px_64px_-8px_rgba(35,9,47,0.28)] border border-[#ECE2E6] bg-[#FAFAFA] transition-all duration-[350ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] origin-bottom-right ${
          isOpen
            ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
            : "opacity-0 scale-90 translate-y-4 pointer-events-none"
        }`}
        style={{ width: "min(380px, calc(100vw - 24px))", height: "min(560px, calc(100svh - 110px))" }}
        aria-hidden={!isOpen}
        role="dialog"
        aria-label="Ori — Ospira Chat Assistant"
      >
        {/* Header */}
        <div className="flex items-center gap-3 px-4 py-3.5 bg-gradient-to-r from-[#23092F] to-[#4A1A6B] shrink-0">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#C87E4F] to-[#FFD105] flex items-center justify-center shadow-sm shrink-0">
            <Sparkles className="w-4.5 h-4.5 text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-display text-[15px] font-semibold text-white leading-none">Ori</p>
            <p className="text-[11px] text-white/60 mt-0.5 font-sans">Ospira Assistant · Usually instant</p>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1.5 rounded-lg text-white/50 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close chat"
          >
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-4 pt-4 pb-2 space-y-0 scroll-smooth" style={{ scrollbarWidth: "thin", scrollbarColor: "#ECE2E6 transparent" }}>
          {messages.map((msg) => (
            <MessageBubble key={msg.id} msg={msg} isNew={newMsgIds.has(msg.id)} />
          ))}
          {isLoading && <TypingIndicator />}
          {error && (
            <div className="mb-3 rounded-xl bg-red-50 border border-red-200 px-4 py-2.5">
              <p className="text-[12.5px] text-red-600">{error}</p>
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        {/* Suggestions */}
        {showSuggestions && messages.length <= 1 && (
          <div className="px-3 pb-1 flex flex-wrap gap-1.5 shrink-0">
            {SUGGESTIONS.map((s) => (
              <button
                key={s}
                onClick={() => sendMessage(s)}
                className="text-[11.5px] font-medium text-[#4A1A6B] bg-[#F4EAF5] hover:bg-[#E8D5F0] border border-[#D0A8E8]/50 rounded-full px-3 py-1.5 transition-colors duration-150 whitespace-nowrap"
              >
                {s}
              </button>
            ))}
          </div>
        )}

        {/* Input area */}
        <div className="px-3 pb-3 pt-2 bg-white border-t border-[#ECE2E6] shrink-0">
          <div className="flex items-end gap-2 rounded-xl border border-[#ECE2E6] bg-[#FAFAFA] px-3 py-2 focus-within:border-[#4A1A6B]/50 focus-within:shadow-[0_0_0_3px_rgba(74,26,107,0.08)] transition-all duration-200">
            <textarea
              ref={inputRef}
              id="ori-chat-input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              rows={1}
              placeholder="Ask me anything about Ospira…"
              disabled={isLoading}
              className="flex-1 resize-none bg-transparent text-[13.5px] text-[#23092F] placeholder:text-[#9E84A0] outline-none font-sans leading-relaxed max-h-24 overflow-y-auto disabled:opacity-60"
              style={{ fieldSizing: "content" }}
            />
            <button
              onClick={() => sendMessage()}
              disabled={!input.trim() || isLoading}
              aria-label="Send message"
              className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-lg bg-[#4A1A6B] text-white shadow-sm transition-all duration-200 hover:bg-[#381254] disabled:opacity-40 disabled:cursor-not-allowed active:scale-95"
            >
              {isLoading ? (
                <Loader2 className="w-3.5 h-3.5 animate-spin" />
              ) : (
                <Send className="w-3.5 h-3.5" />
              )}
            </button>
          </div>
          <p className="text-center text-[10px] text-[#9E84A0] mt-1.5 font-sans">
            Ori can make mistakes. For important matters, speak to our team.
          </p>
        </div>
      </div>

      {/* Animation keyframes */}
      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
}
