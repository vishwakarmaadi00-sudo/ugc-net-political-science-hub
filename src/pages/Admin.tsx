import { useState } from "react"
import { supabase } from "../lib/supabase"

export default function Admin() {
  const [unitId, setUnitId] = useState(1)
  const [year, setYear] = useState(2023)
  const [question, setQuestion] = useState("")
  const [optA, setOptA] = useState("")
  const [optB, setOptB] = useState("")
  const [optC, setOptC] = useState("")
  const [optD, setOptD] = useState("")
  const [correct, setCorrect] = useState("A")
  const [explanation, setExplanation] = useState("")
  const [msg, setMsg] = useState("")

  const handleSave = async () => {
    const { error } = await supabase.from("pyqs").insert({
      unit_id: unitId,
      year: year,
      question: question,
      options: { A: optA, B: optB, C: optC, D: optD },
      correct_answer: correct,
      explanation: explanation
    })
    if (error) setMsg("❌ Error: " + error.message)
    else {
      setMsg("✅ PYQ Saved! Add next one.")
      setQuestion(""); setOptA(""); setOptB(""); setOptC(""); setOptD("")
    }
  }

  return (
    <div className="p-6 max-w-2xl mx-auto min-h-screen bg-white text-black">
      <h1 className="text-2xl font-bold mb-4">Admin - Add PYQ</h1>
      <div className="space-y-3">
        <select value={unitId} onChange={e=>setUnitId(Number(e.target.value))} className="border p-2 w-full rounded">
          {[1,2,3,4,5,6,7,8,9,10].map(i=> <option key={i} value={i}>Unit {i}</option>)}
        </select>
        <input type="number" value={year} onChange={e=>setYear(Number(e.target.value))} className="border p-2 w-full rounded" placeholder="Year" />
        <textarea value={question} onChange={e=>setQuestion(e.target.value)} className="border p-2 w-full h-24 rounded" placeholder="Question text" />
        <input value={optA} onChange={e=>setOptA(e.target.value)} className="border p-2 w-full rounded" placeholder="Option A" />
        <input value={optB} onChange={e=>setOptB(e.target.value)} className="border p-2 w-full rounded" placeholder="Option B" />
        <input value={optC} onChange={e=>setOptC(e.target.value)} className="border p-2 w-full rounded" placeholder="Option C" />
        <input value={optD} onChange={e=>setOptD(e.target.value)} className="border p-2 w-full rounded" placeholder="Option D" />
        <select value={correct} onChange={e=>setCorrect(e.target.value)} className="border p-2 w-full rounded">
          <option value="A">Correct: A</option>
          <option value="B">Correct: B</option>
          <option value="C">Correct: C</option>
          <option value="D">Correct: D</option>
        </select>
        <textarea value={explanation} onChange={e=>setExplanation(e.target.value)} className="border p-2 w-full rounded" placeholder="Explanation" />
        <button onClick={handleSave} className="bg-black text-white p-3 w-full rounded font-bold">Save PYQ</button>
        {msg && <p className="font-bold text-center p-2 bg-gray-100 rounded">{msg}</p>}
      </div>
    </div>
  )
}
