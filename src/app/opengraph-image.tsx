import { ImageResponse } from 'next/og';

export const dynamic = 'force-static';
export const alt = 'HelpAll Skills — Coaching & Mentorat Tech pour développeurs francophones';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          background:
            'linear-gradient(135deg, #0f172a 0%, #1e3a8a 45%, #581c87 100%)',
          color: 'white',
          fontFamily: 'sans-serif',
          padding: '64px 80px',
          position: 'relative',
        }}
      >
        {/* Glow orbs */}
        <div
          style={{
            position: 'absolute',
            top: '-200px',
            right: '-150px',
            width: '500px',
            height: '500px',
            borderRadius: '9999px',
            background: 'radial-gradient(circle, rgba(10,185,166,0.45) 0%, rgba(10,185,166,0) 70%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-250px',
            left: '-200px',
            width: '600px',
            height: '600px',
            borderRadius: '9999px',
            background: 'radial-gradient(circle, rgba(96,165,250,0.4) 0%, rgba(96,165,250,0) 70%)',
          }}
        />

        {/* Top row : brand + flag */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            zIndex: 10,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div
              style={{
                width: '56px',
                height: '56px',
                borderRadius: '14px',
                background: 'linear-gradient(135deg, #0AB9A6 0%, #3B82F6 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '32px',
                fontWeight: 900,
              }}
            >
              H
            </div>
            <div style={{ fontSize: '28px', fontWeight: 800, letterSpacing: '-0.5px' }}>
              HelpAll Skills
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              background: 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.2)',
              padding: '10px 20px',
              borderRadius: '9999px',
              fontSize: '20px',
              fontWeight: 600,
            }}
          >
            🇧🇯 Afrique francophone
          </div>
        </div>

        {/* Spacer */}
        <div style={{ flex: 1, display: 'flex' }} />

        {/* Headline */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            zIndex: 10,
            marginBottom: '40px',
          }}
        >
          <div
            style={{
              fontSize: '76px',
              fontWeight: 900,
              lineHeight: 1.05,
              letterSpacing: '-2px',
              marginBottom: '20px',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <span>Coaching &amp; Mentorat</span>
            <span
              style={{
                background: 'linear-gradient(90deg, #0AB9A6 0%, #60A5FA 50%, #C084FC 100%)',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              Tech sur mesure.
            </span>
          </div>
          <div
            style={{
              fontSize: '28px',
              color: 'rgba(255,255,255,0.7)',
              fontWeight: 400,
              maxWidth: '900px',
            }}
          >
            Trouve l&apos;accompagnement qui te correspond en 2 minutes.
          </div>
        </div>

        {/* Offer cards row */}
        <div
          style={{
            display: 'flex',
            gap: '20px',
            zIndex: 10,
          }}
        >
          {[
            { icon: '⚡', name: 'Coaching Express', price: '5 000', unit: 'FCFA' },
            { icon: '📈', name: 'Mentorat Light', price: '13 500', unit: 'FCFA/mois' },
            { icon: '🚀', name: 'Mentorat Pro', price: '25 000', unit: 'FCFA/mois' },
          ].map((o) => (
            <div
              key={o.name}
              style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.15)',
                borderRadius: '20px',
                padding: '20px 24px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                <span style={{ fontSize: '28px' }}>{o.icon}</span>
                <span style={{ fontSize: '20px', fontWeight: 700 }}>{o.name}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                <span
                  style={{
                    fontSize: '34px',
                    fontWeight: 900,
                    background: 'linear-gradient(90deg, #0AB9A6, #60A5FA)',
                    backgroundClip: 'text',
                    color: 'transparent',
                  }}
                >
                  {o.price}
                </span>
                <span style={{ fontSize: '16px', color: 'rgba(255,255,255,0.6)', fontWeight: 600 }}>
                  {o.unit}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Footer line */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: '32px',
            fontSize: '18px',
            color: 'rgba(255,255,255,0.55)',
            zIndex: 10,
          }}
        >
          <span>🔒 Paiement Mobile Money sécurisé via Chariow</span>
          <span style={{ fontWeight: 700, color: 'rgba(255,255,255,0.85)' }}>
            helpallskills.com
          </span>
        </div>
      </div>
    ),
    { ...size },
  );
}
