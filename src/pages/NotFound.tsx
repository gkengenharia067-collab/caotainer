import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);

    const prevTitle = document.title;
    document.title = "Página não encontrada (404) — Cãotainer Petshop";

    const setMeta = (selector: string, attr: string, value: string) => {
      let el = document.head.querySelector<HTMLMetaElement>(selector);
      const created = !el;
      if (!el) {
        el = document.createElement("meta");
        const [key, val] = selector.replace(/[\[\]"]/g, "").split("=");
        el.setAttribute(key, val);
        document.head.appendChild(el);
      }
      const prev = el.getAttribute(attr);
      el.setAttribute(attr, value);
      return () => {
        if (created) el?.remove();
        else if (prev !== null) el?.setAttribute(attr, prev);
      };
    };

    const desc = "A página que você procura não existe. Volte para a home da Cãotainer Petshop em Campo Grande/MS.";
    const restores = [
      setMeta('meta[name="description"]', "content", desc),
      setMeta('meta[property="og:title"]', "content", "Página não encontrada — Cãotainer Petshop"),
      setMeta('meta[property="og:description"]', "content", desc),
      setMeta('meta[name="twitter:title"]', "content", "Página não encontrada — Cãotainer Petshop"),
      setMeta('meta[name="twitter:description"]', "content", desc),
      setMeta('meta[name="robots"]', "content", "noindex, follow"),
    ];

    return () => {
      document.title = prevTitle;
      restores.forEach((r) => r());
    };
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">Oops! Page not found</p>
        <a href="/" className="text-primary underline hover:text-primary/90">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
