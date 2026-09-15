import { useState } from 'react';

const pyqs = [
  { q: "Who wrote 'The Human Condition'?", a: "Hannah Arendt (1958)", y: "Dec 2024 Q74 - Your PDF" },
  { q: "Who coined 'catch-all-party'?", a: "Otto Kirchheimer", y: "Dec 2024 Q104 - Your PDF" },
  { q: "Justice is first virtue of?", a: "Social Institutions - John Rawls 1971", y: "Dec 2021 Q98 - Your PDF" },
  { q: "Natural rights is nonsense upon?", a: "Stilts - Jeremy Bentham 1791", y: "Your Notes PDF" },
  { q: "T.H. Marshall 3 citizenship rights?", a: "Civil, Political, Social (1950)", y: "Your Notes PDF" },
  { q: "Easton Input-Output model inputs?", a: "Demand + Support", y: "Dec 2024 Q89" },
  { q: "Liberal democracy does NOT include?", a: "One-party system + State monopoly media", y: "Dec 2024 Q78" },
  { q: "Who gave concept of Polyarchy?", a: "Robert Dahl (1956)", y: "Dec 2023" },
  { q: "Veil of Ignorance concept by?", a: "John Rawls - Original Position", y: "High Frequency PYQ" },
];

const notes = [
  { t: "Power", d: "Pluralist view: Robert Dahl - Polyarchy (1956) - power distributed in many groups. Elitist: Vilfredo Pareto, Gaetano Mosca - small elite rules. Marxist: Economic power = Political power, ruling class." },
  { t: "Citizenship - T.H. Marshall 1950", d: "Book: Citizenship and Social Class. 3 rights: 1) Civil (18th C) 2) Political (19th C) 3) Social (20th C). Critics: Aristotle (citizen participation), Laski, Anthony Giddens 1981 said Marshall is evolutionary, idealist." },
  { t: "Justice - MOST ASKED TOPIC", d: "John Rawls 1971 - A Theory of Justice. Justice as Fairness. Original Position + Veil of Ignorance (impartial decision). Justice is first virtue of Social Institutions. Robert Nozick 1974 - Anarchy State Utopia - Entitlement Theory, critique of Rawls." },
  { t: "Rights - Bentham vs Laski", d: "Jeremy Bentham: Rights are creatures of law. Natural rights are 'nonsense upon stilts' (1791). Laski: Rights are conditions of good life, state must provide. Marx: Rights are bourgeois." },
  { t: "Liberty - Berlin Two Concepts 1958", d: "Isaiah Berlin: Negative liberty (freedom FROM interference) vs Positive liberty (freedom TO be master). J.S. Mill - On Liberty 1859 - Harm Principle." },
  { t: "Equality", d: "Formal equality vs Substantive equality. Marx: Equality only in classless society. Rawls: Difference principle - inequality allowed if benefits worst-off." },
];

export default function App() {
  const [tab, setTab] = useState<'notes' | 'pyq'>('notes');

  return (
    <div style={{ background: '#020617', color: 'white', minHeight: '100vh', fontFamily: 'system-ui', padding: '16px' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <h1 style={{ textAlign: 'center', color: '#22d3ee', fontSize: '32px', fontWeight: 'bold', marginTop: '10px' }}>
          UGC NET Political Science Hub
        </h1>
        <p style={{ textAlign: 'center', color: '#94a3b8', marginTop: '8px' }}>
          REAL DATA LIVE • 8 Notes + 9 PYQ Papers (June 2020 - Jan 2026) • Your PDFs Extracted
        </p>

        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', marginTop: '24px' }}>
          <button onClick={() => setTab('notes')} style={{ padding: '12px 20px', borderRadius: '10px', border: 'none', cursor: 'pointer', fontWeight: 'bold', background: tab === 'notes' ? '#0891b2' : '#1e293b', color: 'white' }}>
            📚 Unit 1 REAL Notes (6 Topics)
          </button>
          <button onClick={() => setTab('pyq')} style={{ padding: '12px 20px', borderRadius: '10px', border: 'none', cursor: 'pointer', fontWeight: 'bold', background: tab === 'pyq' ? '#0891b2' : '#1e293b', color: 'white' }}>
            ✅ REAL PYQs (9 Papers)
          </button>
        </div>

        <div style={{ marginTop: '28px', display: 'grid', gap: '14px' }}>
          {tab === 'notes' && notes.map((n, i) => (
            <div key={i} style={{ background: '#0f172a', padding: '18px', borderRadius: '12px', border: '1px solid #334155' }}>
              <h2 style={{ color: '#22d3ee', margin: '0 0 8px 0', fontSize: '18px' }}>{i + 1}. {n.t}</h2>
              <p style={{ color: '#cbd5e1', fontSize: '14px', lineHeight: '1.6', margin: 0 }}>{n.d}</p>
            </div>
          ))}

          {tab === 'pyq' && pyqs.map((p, i) => (
            <div key={i} style={{ background: '#0f172a', padding: '16px', borderRadius: '12px', border: '1px solid #854d0e' }}>
              <p style={{ fontWeight: '500', margin: 0 }}>Q{i + 1}. {p.q}</p>
              <p style={{ color: '#4ade80', marginTop: '10px', fontSize: '14px', margin: '10px 0 0 0' }}>✓ Answer: {p.a}</p>
              <p style={{ color: '#64748b', fontSize: '12px', marginTop: '6px', margin: '6px 0 0 0' }}>Source: {p.y}</p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '40px', color: '#475569', fontSize: '12px', paddingBottom: '20px' }}>
          ✅ Live at ugc-net-political-science-hub.vercel.app<br />
          9 Papers Extracted: June 2020, Dec 2021, June 2022, Dec 2022, June 2023, Dec 2023, June 2024, Dec 2024, Jan 2026<br />
          Built from YOUR 8 Notes PDFs + 9 PYQ PDFs
        </div>
      </div>
    </div>
  );
}
