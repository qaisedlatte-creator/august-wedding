'use client'

/* Full-height botanical border — fixed on both sides of the viewport */
function FlowerCluster({ cx, cy, r = 5, opacity = 0.9 }: { cx: number; cy: number; r?: number; opacity?: number }) {
  const petals = [0, 51, 102, 153, 204, 255, 306]
  return (
    <g opacity={opacity}>
      {petals.map((a, i) => (
        <ellipse
          key={i}
          cx={cx + Math.cos((a * Math.PI) / 180) * r}
          cy={cy + Math.sin((a * Math.PI) / 180) * r}
          rx={r * 0.85}
          ry={r * 0.55}
          transform={`rotate(${a}, ${cx + Math.cos((a * Math.PI) / 180) * r}, ${cy + Math.sin((a * Math.PI) / 180) * r})`}
          fill="#8B1A1A"
        />
      ))}
      <circle cx={cx} cy={cy} r={r * 0.38} fill="#D4AF37" />
    </g>
  )
}

function Branch({ side }: { side: 'left' | 'right' }) {
  const flip = side === 'right'
  return (
    <svg
      viewBox="0 0 110 900"
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        position: 'fixed',
        top: 0,
        [side]: 0,
        width: 'clamp(60px, 8vw, 110px)',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 50,
        transform: flip ? 'scaleX(-1)' : 'none',
      }}
    >
      {/* Main stem */}
      <path d="M10,0 C18,150 25,300 15,450 C5,600 20,750 12,900" fill="none" stroke="#8B1A1A" strokeWidth="1.5" opacity="0.45"/>
      {/* Secondary stems */}
      <path d="M15,80 C35,70 55,65 75,55" fill="none" stroke="#8B1A1A" strokeWidth="0.9" opacity="0.35"/>
      <path d="M18,200 C40,185 62,178 88,168" fill="none" stroke="#8B1A1A" strokeWidth="0.9" opacity="0.35"/>
      <path d="M12,340 C38,325 60,318 90,308" fill="none" stroke="#8B1A1A" strokeWidth="0.9" opacity="0.32"/>
      <path d="M16,480 C40,465 65,460 92,450" fill="none" stroke="#8B1A1A" strokeWidth="0.9" opacity="0.30"/>
      <path d="M13,620 C38,605 62,598 90,590" fill="none" stroke="#8B1A1A" strokeWidth="0.8" opacity="0.28"/>
      <path d="M15,760 C40,745 64,738 92,728" fill="none" stroke="#8B1A1A" strokeWidth="0.8" opacity="0.28"/>
      {/* Tiny leaf vines */}
      <path d="M14,130 C24,118 28,105 20,98" fill="#7A1515" opacity="0.28"/>
      <path d="M16,270 C26,258 30,245 22,238" fill="#7A1515" opacity="0.25"/>
      <path d="M13,410 C23,398 27,385 19,378" fill="#7A1515" opacity="0.23"/>
      <path d="M15,550 C25,538 29,525 21,518" fill="#7A1515" opacity="0.22"/>
      <path d="M12,700 C22,688 26,675 18,668" fill="#7A1515" opacity="0.2"/>
      {/* Flower clusters */}
      <FlowerCluster cx={8}  cy={18}  r={5.5} opacity={0.88}/>
      <FlowerCluster cx={42} cy={38}  r={4.8} opacity={0.82}/>
      <FlowerCluster cx={72} cy={28}  r={4.2} opacity={0.75}/>
      <FlowerCluster cx={88} cy={50}  r={5}   opacity={0.80}/>
      <FlowerCluster cx={20} cy={70}  r={4.5} opacity={0.78}/>
      <FlowerCluster cx={55} cy={62}  r={3.8} opacity={0.70}/>
      <FlowerCluster cx={14} cy={100} r={4}   opacity={0.72}/>
      <FlowerCluster cx={6}  cy={140} r={5.2} opacity={0.85}/>
      <FlowerCluster cx={38} cy={128} r={4.5} opacity={0.78}/>
      <FlowerCluster cx={70} cy={118} r={3.8} opacity={0.70}/>
      <FlowerCluster cx={92} cy={138} r={4.2} opacity={0.72}/>
      <FlowerCluster cx={20} cy={168} r={5}   opacity={0.82}/>
      <FlowerCluster cx={55} cy={158} r={4}   opacity={0.74}/>
      <FlowerCluster cx={8}  cy={200} r={5.5} opacity={0.88}/>
      <FlowerCluster cx={40} cy={190} r={4.5} opacity={0.78}/>
      <FlowerCluster cx={78} cy={178} r={4}   opacity={0.72}/>
      <FlowerCluster cx={95} cy={200} r={4.8} opacity={0.76}/>
      <FlowerCluster cx={18} cy={240} r={4.5} opacity={0.75}/>
      <FlowerCluster cx={52} cy={228} r={3.8} opacity={0.68}/>
      <FlowerCluster cx={10} cy={280} r={5}   opacity={0.82}/>
      <FlowerCluster cx={45} cy={268} r={4.2} opacity={0.74}/>
      <FlowerCluster cx={80} cy={258} r={3.8} opacity={0.68}/>
      <FlowerCluster cx={6}  cy={320} r={5.5} opacity={0.85}/>
      <FlowerCluster cx={38} cy={308} r={4.5} opacity={0.77}/>
      <FlowerCluster cx={72} cy={298} r={4}   opacity={0.70}/>
      <FlowerCluster cx={92} cy={320} r={4.5} opacity={0.73}/>
      <FlowerCluster cx={20} cy={358} r={4.8} opacity={0.78}/>
      <FlowerCluster cx={55} cy={348} r={4}   opacity={0.70}/>
      <FlowerCluster cx={8}  cy={400} r={5.2} opacity={0.85}/>
      <FlowerCluster cx={42} cy={388} r={4.5} opacity={0.76}/>
      <FlowerCluster cx={78} cy={378} r={3.8} opacity={0.68}/>
      <FlowerCluster cx={16} cy={440} r={4.5} opacity={0.74}/>
      <FlowerCluster cx={50} cy={428} r={4}   opacity={0.68}/>
      <FlowerCluster cx={88} cy={440} r={4.2} opacity={0.70}/>
      <FlowerCluster cx={6}  cy={480} r={5}   opacity={0.82}/>
      <FlowerCluster cx={40} cy={468} r={4.3} opacity={0.74}/>
      <FlowerCluster cx={74} cy={460} r={3.8} opacity={0.66}/>
      <FlowerCluster cx={18} cy={520} r={4.5} opacity={0.72}/>
      <FlowerCluster cx={52} cy={508} r={4}   opacity={0.65}/>
      <FlowerCluster cx={90} cy={520} r={4.2} opacity={0.68}/>
      <FlowerCluster cx={8}  cy={560} r={5}   opacity={0.80}/>
      <FlowerCluster cx={44} cy={550} r={4.2} opacity={0.72}/>
      <FlowerCluster cx={76} cy={540} r={3.8} opacity={0.65}/>
      <FlowerCluster cx={14} cy={600} r={4.5} opacity={0.72}/>
      <FlowerCluster cx={48} cy={590} r={4}   opacity={0.65}/>
      <FlowerCluster cx={86} cy={600} r={4.2} opacity={0.67}/>
      <FlowerCluster cx={6}  cy={640} r={5}   opacity={0.80}/>
      <FlowerCluster cx={40} cy={630} r={4.2} opacity={0.72}/>
      <FlowerCluster cx={74} cy={620} r={3.8} opacity={0.64}/>
      <FlowerCluster cx={18} cy={680} r={4.5} opacity={0.70}/>
      <FlowerCluster cx={52} cy={668} r={4}   opacity={0.63}/>
      <FlowerCluster cx={88} cy={680} r={4.2} opacity={0.65}/>
      <FlowerCluster cx={8}  cy={720} r={5}   opacity={0.78}/>
      <FlowerCluster cx={44} cy={710} r={4.2} opacity={0.70}/>
      <FlowerCluster cx={76} cy={700} r={3.8} opacity={0.63}/>
      <FlowerCluster cx={14} cy={760} r={4.5} opacity={0.70}/>
      <FlowerCluster cx={50} cy={750} r={4}   opacity={0.63}/>
      <FlowerCluster cx={88} cy={760} r={4.2} opacity={0.65}/>
      <FlowerCluster cx={6}  cy={800} r={5}   opacity={0.78}/>
      <FlowerCluster cx={40} cy={790} r={4.2} opacity={0.70}/>
      <FlowerCluster cx={74} cy={780} r={3.8} opacity={0.63}/>
      <FlowerCluster cx={18} cy={840} r={4.5} opacity={0.70}/>
      <FlowerCluster cx={52} cy={830} r={4}   opacity={0.62}/>
      <FlowerCluster cx={90} cy={840} r={4.2} opacity={0.64}/>
      <FlowerCluster cx={8}  cy={880} r={5}   opacity={0.76}/>
      <FlowerCluster cx={44} cy={870} r={4}   opacity={0.68}/>
    </svg>
  )
}

export default function BotanicalFrame() {
  return (
    <>
      <Branch side="left" />
      <Branch side="right" />
    </>
  )
}
