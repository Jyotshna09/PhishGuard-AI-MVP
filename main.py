from fastapi import FastAPI
from pydantic import BaseModel
from urllib.parse import urlparse

app = FastAPI()

# In-memory storage for reported phishing
reported_items = []

class ScanRequest(BaseModel):
    url: str
    text: str


def ai_explain(risk, reasons):
    return f"This page is marked {risk} because: " + ", ".join(reasons)


@app.post("/analyze")
def analyze(req: ScanRequest):
    text = req.text.lower()
    parsed = urlparse(req.url)

    domain = parsed.netloc.lower()
    path = parsed.path.lower()

    risk = "Safe"
    reasons = []

    # Urgent language detection
    if any(word in text for word in ["urgent", "immediately", "verify"]):
        risk = "Suspicious"
        reasons.append("Urgent language detected")

    # Suspicious words in domain
    if any(word in domain for word in ["login", "secure", "verify", "account"]):
        risk = "Dangerous"
        reasons.append("Suspicious domain pattern")

    # Suspicious words in URL path
    if any(word in path for word in ["login", "verify", "secure"]):
        risk = "Dangerous"
        reasons.append("Sensitive login page detected")

    if not reasons:
        reasons.append("No obvious phishing signals")

    return {
        "risk": risk,
        "reason": ai_explain(risk, reasons)
    }


@app.post("/report")
def report(req: ScanRequest):
    reported_items.append({
        "url": req.url,
        "text_sample": req.text[:200]
    })
    return {"status": "reported"}
