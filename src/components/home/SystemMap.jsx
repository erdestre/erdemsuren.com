import { useEffect, useState } from "react";

// Hero diagram: the kind of system Erdem builds, as one inline SVG on a dark console card (scales with its box).
// Motion: edges draw in and nodes pop in with CSS (index.css: .map-edge, .map-node), packets travel the routes with
// SMIL <animateMotion>. Packets are rendered only on the client and only without prefers-reduced-motion, so the
// prerendered HTML and the first client render match (no hydration mismatch) and reduced motion gets a still map.

const NODE_H = 44;

const NODES = [
  { id: "rn", x: 40, y: 24, w: 170, label: "React Native", delay: 0.15, dot: "var(--color-signal)" },
  { id: "web", x: 350, y: 24, w: 170, label: "Next.js", delay: 0.25, dot: "var(--color-signal)" },
  { id: "gw", x: 175, y: 118, w: 210, label: "YARP gateway", delay: 0.6, dot: "var(--color-accent-on-ink)" },
  { id: "svc", x: 175, y: 212, w: 210, labelKey: "services", delay: 0.95, dot: "var(--color-accent-on-ink)" },
  { id: "mq", x: 24, y: 306, w: 150, label: "RabbitMQ", delay: 1.3, dot: "var(--color-violet)" },
  { id: "cache", x: 205, y: 306, w: 150, label: "Redis", delay: 1.4, dot: "var(--color-violet)" },
  { id: "db", x: 386, y: 306, w: 150, label: "PostgreSQL", delay: 1.5, dot: "var(--color-violet)" },
];

const EDGES = [
  { d: "M125 68C125 96 230 92 230 118", delay: 0.4 },
  { d: "M435 68C435 96 330 92 330 118", delay: 0.45 },
  { d: "M280 162V212", delay: 0.8 },
  { d: "M230 256C230 284 99 278 99 306", delay: 1.15 },
  { d: "M280 256V306", delay: 1.2 },
  { d: "M330 256C330 284 461 278 461 306", delay: 1.25 },
];

// Packet routes. The straight parts inside a node box are hidden behind the node (packets are drawn first).
const ROUTES = [
  { d: "M125 68C125 96 230 92 230 118L280 162V212L230 256C230 284 99 278 99 306", color: "var(--color-signal)" },
  { d: "M435 68C435 96 330 92 330 118L280 162V212L330 256C330 284 461 278 461 306", color: "var(--color-accent-on-ink)" },
  { d: "M280 140V212L280 256V306", color: "var(--color-signal)" },
];

function useMotionAllowed() {
  const [allowed, setAllowed] = useState(false);
  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setAllowed(!query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);
  return allowed;
}

export default function SystemMap({ title, labels, className }) {
  const motion = useMotionAllowed();

  return (
    <svg viewBox="0 0 560 420" role="img" aria-label={title} className={className}>
      <defs>
        <filter id="map-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="map-lane" x1="0" x2="1">
          <stop offset="0" stopColor="var(--color-signal)" stopOpacity="0.16" />
          <stop offset="1" stopColor="var(--color-accent-on-ink)" stopOpacity="0.08" />
        </linearGradient>
      </defs>

      <g
        fill="none"
        stroke="var(--color-accent-on-ink)"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeOpacity="0.7"
        filter="url(#map-glow)"
      >
        {EDGES.map((edge) => (
          <path key={edge.d} d={edge.d} pathLength="1" className="map-edge" style={{ "--d": `${edge.delay}s` }} />
        ))}
      </g>

      {motion ? (
        <g aria-hidden="true" filter="url(#map-glow)">
          {ROUTES.map((route, index) => (
            <circle key={route.d} r="4.5" fill={route.color} opacity="0">
              <animateMotion
                dur="3.6s"
                begin={`${1.8 + index * 1.2}s`}
                repeatCount="indefinite"
                path={route.d}
                calcMode="linear"
              />
              <animate
                attributeName="opacity"
                values="0;1;1;0"
                keyTimes="0;0.08;0.9;1"
                dur="3.6s"
                begin={`${1.8 + index * 1.2}s`}
                repeatCount="indefinite"
              />
            </circle>
          ))}
        </g>
      ) : null}

      {NODES.map((node) => (
        <g key={node.id} className="map-node" style={{ "--d": `${node.delay}s` }}>
          <rect
            x={node.x}
            y={node.y}
            width={node.w}
            height={NODE_H}
            rx="10"
            fill="var(--color-ink-soft)"
            stroke="var(--color-on-ink)"
            strokeOpacity="0.14"
            strokeWidth="1.5"
          />
          <circle cx={node.x + 18} cy={node.y + NODE_H / 2} r="3.5" fill={node.dot} />
          <text
            x={node.x + 31}
            y={node.y + 28}
            fill="var(--color-on-ink)"
            fontFamily="var(--font-mono)"
            fontSize="15"
            fontWeight="500"
          >
            {node.labelKey ? labels[node.labelKey] : node.label}
          </text>
        </g>
      ))}

      <g className="map-node" style={{ "--d": "1.7s" }}>
        <rect
          x="24"
          y="370"
          width="512"
          height="40"
          rx="10"
          fill="url(#map-lane)"
          stroke="var(--color-signal)"
          strokeOpacity="0.35"
        />
        <text x="44" y="395" fill="var(--color-on-ink)" fontFamily="var(--font-mono)" fontSize="14" fontWeight="500">
          <tspan fill="var(--color-signal)">$</tspan> GitHub Actions → IIS · Cloudflare
        </text>
        <circle className="live-dot" cx="440" cy="390" r="4.5" fill="var(--color-signal)" />
        <text x="453" y="395" fill="var(--color-on-ink-muted)" fontFamily="var(--font-mono)" fontSize="13">
          {labels.deploy}
        </text>
      </g>
    </svg>
  );
}
