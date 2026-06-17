/* Illustrated Muslim couple — bride in red lehenga, groom in black sherwani */
export default function CoupleIllustration({ width = 320 }: { width?: number }) {
  return (
    <svg
      viewBox="0 0 320 310"
      width={width}
      style={{ maxWidth: '100%' }}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* ── GROOM (left) ── */}
      {/* Shoes */}
      <ellipse cx="108" cy="302" rx="18" ry="5" fill="#1A1A1A"/>
      <ellipse cx="126" cy="305" rx="14" ry="4" fill="#1A1A1A"/>
      {/* Legs / sherwani lower */}
      <path d="M98,260 L100,305 L116,305 L118,260 Z" fill="#1C1C1C"/>
      <path d="M118,260 L120,305 L134,305 L132,260 Z" fill="#222"/>
      {/* Sherwani body */}
      <path d="M88,180 C88,160 98,150 115,148 C132,150 142,160 142,180 L140,265 L90,265 Z" fill="#1C1C1C"/>
      {/* Sherwani collar / buttons */}
      <path d="M105,148 L115,148 L115,200 L105,200 Z" fill="#2A2A2A"/>
      <circle cx="115" cy="158" r="1.5" fill="#C9A84C" opacity="0.8"/>
      <circle cx="115" cy="168" r="1.5" fill="#C9A84C" opacity="0.8"/>
      <circle cx="115" cy="178" r="1.5" fill="#C9A84C" opacity="0.8"/>
      {/* Gold border trim on sherwani */}
      <path d="M88,180 L88,265" stroke="#C9A84C" strokeWidth="0.8" opacity="0.5"/>
      <path d="M142,180 L142,265" stroke="#C9A84C" strokeWidth="0.8" opacity="0.5"/>
      <path d="M88,265 L142,265" stroke="#C9A84C" strokeWidth="0.8" opacity="0.5"/>
      {/* Arms */}
      <path d="M88,180 L76,230 L86,232 L96,185 Z" fill="#1C1C1C"/>
      <path d="M142,180 L154,225 L145,228 L136,185 Z" fill="#1C1C1C"/>
      {/* Hands reaching toward bride */}
      <ellipse cx="151" cy="228" rx="6" ry="4" fill="#C8966C" transform="rotate(-20 151 228)"/>
      {/* Neck */}
      <rect x="109" y="130" width="12" height="20" rx="4" fill="#C8966C"/>
      {/* Head */}
      <ellipse cx="115" cy="118" rx="20" ry="22" fill="#C8966C"/>
      {/* Hair (dark top) */}
      <path d="M95,108 C95,95 100,90 115,88 C130,90 135,95 135,108 Z" fill="#1A1A1A"/>
      {/* Ear */}
      <ellipse cx="95" cy="118" rx="3.5" ry="5" fill="#B88055"/>
      {/* Subtle face: eyes */}
      <ellipse cx="108" cy="116" rx="2.5" ry="2.8" fill="#1A1A1A"/>
      <ellipse cx="122" cy="116" rx="2.5" ry="2.8" fill="#1A1A1A"/>
      {/* Nose */}
      <path d="M114,120 C113,123 115,125 116,125 C117,125 119,123 118,120" fill="none" stroke="#A06840" strokeWidth="0.8"/>
      {/* Subtle smile */}
      <path d="M110,128 C112,131 118,131 120,128" fill="none" stroke="#A06840" strokeWidth="0.9"/>

      {/* ── BRIDE (right) ── */}
      {/* Long trailing lehenga — sweeping to the right */}
      <path d="M195,255 C195,255 170,270 155,285 C148,292 150,305 165,308 C195,314 245,308 260,302 C268,298 262,288 255,284 C240,278 220,268 210,260 Z" fill="#7A1515"/>
      <path d="M195,255 C195,255 170,270 155,285 C148,292 150,305 165,308 C195,314 245,308 260,302" fill="none" stroke="#C9A84C" strokeWidth="1" opacity="0.55"/>
      {/* Gold hem embroidery */}
      <path d="M155,285 C148,292 150,305 165,308 C195,314 245,308 260,302 C268,298 262,288 255,284" fill="#C9A84C" opacity="0.18"/>
      {/* Lehenga main skirt */}
      <path d="M185,185 C175,200 165,230 165,255 C165,270 175,278 195,278 C215,278 225,268 225,255 C225,235 218,210 210,190 Z" fill="#8B1A1A"/>
      {/* Lehenga skirt shading */}
      <path d="M195,185 C193,200 192,230 193,255 C193,268 194,275 195,278" stroke="rgba(0,0,0,0.15)" strokeWidth="2" fill="none"/>
      {/* Gold border on lehenga */}
      <path d="M165,255 C165,270 175,278 195,278 C215,278 225,268 225,255" stroke="#C9A84C" strokeWidth="1.2" fill="none" opacity="0.6"/>
      {/* Lehenga gold patterns */}
      <circle cx="182" cy="230" r="2.2" fill="#C9A84C" opacity="0.4"/>
      <circle cx="208" cy="235" r="2.2" fill="#C9A84C" opacity="0.4"/>
      <circle cx="195" cy="248" r="2.2" fill="#C9A84C" opacity="0.4"/>
      {/* Blouse / choli */}
      <path d="M182,155 C182,148 188,145 195,145 C202,145 208,148 208,155 L210,190 L180,190 Z" fill="#8B1A1A"/>
      {/* Gold blouse border */}
      <path d="M180,188 L210,188" stroke="#C9A84C" strokeWidth="1" opacity="0.65"/>
      <path d="M182,155 L180,188" stroke="#C9A84C" strokeWidth="0.6" opacity="0.45"/>
      <path d="M208,155 L210,188" stroke="#C9A84C" strokeWidth="0.6" opacity="0.45"/>
      {/* Dupatta over head — flowing */}
      <path d="M172,98 C165,105 162,120 168,135 C174,148 182,152 182,155" fill="none" stroke="#8B1A1A" strokeWidth="12" strokeLinecap="round" opacity="0.85"/>
      <path d="M218,98 C225,105 228,120 222,135 C216,148 210,152 208,155" fill="none" stroke="#8B1A1A" strokeWidth="10" strokeLinecap="round" opacity="0.82"/>
      {/* Dupatta flowing behind */}
      <path d="M172,98 C165,92 160,80 162,68 C163,58 170,52 178,54" fill="none" stroke="#8B1A1A" strokeWidth="9" strokeLinecap="round" opacity="0.7"/>
      <path d="M218,98 C225,92 230,80 228,68 C227,58 220,52 212,54" fill="none" stroke="#8B1A1A" strokeWidth="9" strokeLinecap="round" opacity="0.65"/>
      {/* Dupatta trailing end */}
      <path d="M162,68 C155,62 148,60 144,65 C140,72 145,82 155,85" fill="none" stroke="#8B1A1A" strokeWidth="6" strokeLinecap="round" opacity="0.55"/>
      {/* Gold dupatta border */}
      <path d="M172,98 C165,92 160,80 162,68 C155,62 148,60 144,65 C140,72 145,82 155,85" fill="none" stroke="#C9A84C" strokeWidth="1.5" opacity="0.5"/>
      {/* Arms */}
      <path d="M182,160 C175,175 172,195 175,210 L182,210 L185,192 L190,165 Z" fill="#B07848"/>
      <path d="M208,160 C215,175 218,195 215,210 L208,210 L205,192 L200,165 Z" fill="#B07848"/>
      {/* Hands / bangles */}
      <ellipse cx="177" cy="212" rx="5" ry="4" fill="#C8966C"/>
      <ellipse cx="215" cy="210" rx="5" ry="3.5" fill="#C8966C"/>
      {/* Gold bangles */}
      <path d="M173,210 C173,206 181,206 181,210" fill="none" stroke="#C9A84C" strokeWidth="1.2" opacity="0.7"/>
      <path d="M173,213 C173,209 181,209 181,213" fill="none" stroke="#C9A84C" strokeWidth="1.2" opacity="0.55"/>
      {/* Neck */}
      <rect x="190" y="130" width="10" height="16" rx="3" fill="#C8966C"/>
      {/* Necklace */}
      <path d="M188,140 C188,148 195,152 195,152 C195,152 202,148 202,140" fill="none" stroke="#C9A84C" strokeWidth="1.2" opacity="0.65"/>
      <circle cx="195" cy="152" r="2.5" fill="#C9A84C" opacity="0.65"/>
      {/* Head / face */}
      <ellipse cx="195" cy="108" rx="18" ry="21" fill="#C8966C"/>
      {/* Dupatta over head (over hair) */}
      <path d="M176,95 C175,85 180,75 195,72 C210,75 215,85 214,95" fill="#8B1A1A" opacity="0.88"/>
      {/* Maang tikka */}
      <circle cx="195" cy="70" r="3" fill="#C9A84C" opacity="0.75"/>
      <line x1="195" y1="73" x2="195" y2="85" stroke="#C9A84C" strokeWidth="0.8" opacity="0.6"/>
      {/* Earrings */}
      <line x1="178" y1="108" x2="176" y2="122" stroke="#C9A84C" strokeWidth="0.8" opacity="0.65"/>
      <circle cx="176" cy="124" r="3" fill="#C9A84C" opacity="0.65"/>
      {/* Face: eyes with kohl */}
      <ellipse cx="189" cy="107" rx="2.8" ry="3" fill="#1A1A1A"/>
      <ellipse cx="201" cy="107" rx="2.8" ry="3" fill="#1A1A1A"/>
      {/* Eyelashes hint */}
      <path d="M186,104 C187,102 191,102 192,104" fill="none" stroke="#1A1A1A" strokeWidth="0.7"/>
      <path d="M198,104 C199,102 203,102 204,104" fill="none" stroke="#1A1A1A" strokeWidth="0.7"/>
      {/* Nose */}
      <path d="M193,112 C192,115 193,117 195,117 C197,117 198,115 197,112" fill="none" stroke="#A06840" strokeWidth="0.8"/>
      {/* Lips */}
      <path d="M190,121 C192,118 198,118 200,121" fill="#8B2020" opacity="0.7"/>
      <path d="M190,121 C192,124 198,124 200,121" fill="#9B2828" opacity="0.65"/>
    </svg>
  )
}
