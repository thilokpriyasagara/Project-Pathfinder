export default async function handler(req, res) {
  res.setHeader('Content-Type', 'application/json');

  if (req.method !== 'POST') {
    return res.status(405).json({ answer: 'Method not allowed.' });
  }

  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    return res.status(200).json({
      answer: '⚠️ GEMINI_API_KEY is not set. Add it in Vercel → Settings → Environment Variables, then redeploy.'
    });
  }

  const { question } = req.body || {};

  if (!question) {
    return res.status(200).json({ answer: 'Please ask a question.' });
  }

  const KNOWLEDGE = `
Sri Lanka Student Guidance:

After O/L:
- A/L streams: Science, Commerce, Arts, Technology
- Vocational: VTA, NAITA, DTET (NVQ 1-4)
- Professional: AAT, ICT certifications

After A/L:
- State University (free based on Z-score)
- Private Universities (SLIIT, NSBM, APIIT, IIT)
- External Degrees (UoC, USJP)
- Vocational (NVQ 5+)
- Professional (CA, ACCA, CIMA)

Other options:
- Study abroad (UK, Australia, Canada, Germany, Malaysia)
- Freelancing (IT, design, marketing)
- Online courses (Coursera, Google, Microsoft)

Careers:
- IT/Data: high demand
- Accounting: high demand
- Engineering, Medicine, Banking also strong
`;

  const prompt = `You are a friendly career guidance assistant for Sri Lankan students.

RULES:
- Use the knowledge base as the main source.
- Keep answers short, clear, and easy to read.
- Avoid long paragraphs.
- Use bullet points or simple sections where helpful.
- Only include relevant information.
- Explain briefly with 1-3 key points or examples when needed.

KNOWLEDGE:
${KNOWLEDGE}

QUESTION:
${question}`;

  const models = [
    'gemini-2.5-flash',
    'gemini-2.0-flash',
    'gemini-1.5-flash'
  ];

  const errors = [];

  for (const model of models) {
    try {
      const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 512,
          }
        })
      });

      if (!response.ok) {
        const errText = await response.text();
        const errMsg = `${model}: HTTP ${response.status} - ${errText.substring(0, 200)}`;
        errors.push(errMsg);
        console.error(errMsg);
        continue;
      }

      const data = await response.json();
      const answer = data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim();

      if (answer) {
        return res.status(200).json({ answer });
      }

      errors.push(`${model}: empty response`);
    } catch (err) {
      errors.push(`${model}: ${err.message}`);
      console.error(`${model} error:`, err.message);
    }
  }

  // All models failed - show the actual errors so user can diagnose
  return res.status(200).json({
    answer: `⚠️ All models failed. Debug info:\n\n${errors.join('\n\n')}\n\nAPI key starts with: ${apiKey.substring(0, 8)}...`
  });
}
