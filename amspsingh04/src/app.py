## app

from fastapi import FastAPI, Request, UploadFile, File, Form
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from dotenv import load_dotenv
import os
load_dotenv()  # Load environment variables from .env
import requests
from fastapi.middleware.cors import CORSMiddleware



app = FastAPI()
app.add_middleware(
  CORSMiddleware,
  allow_origins=["*"],
  allow_methods=["*"],
  allow_headers=["*"],
)

app.mount("/static", StaticFiles(directory="static"), name="static")
templates = Jinja2Templates(directory="templates")

# Replace with your real Gemini API key
API_KEY = os.getenv("apiKey")
GEMINI_URL = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key={API_KEY}"

@app.get("/", response_class=HTMLResponse)
def index(request: Request):
    return templates.TemplateResponse("index.html", {"request": request, "report": None})

@app.post("/generate-report", response_class=HTMLResponse)
async def generate_report(request: Request, files: list[UploadFile] = File(...)):
    all_code = ""

    for file in files:
        content = await file.read()
        filename = file.filename
        all_code += f"\n# FILE: {filename}\n{content.decode()}\n"

    prompt = f"""
        You are an expert technical writer. Analyze the following codebase and generate a research-style report.

        Include these sections:
        - Abstract
        - Introduction
        - Problem Statement
        - Code Overview
        - Algorithm Explanation
        - Use Cases
        - Limitations
        - Conclusion

        Code:
        {all_code}
    """

    headers = {"Content-Type": "application/json"}
    payload = {
        "contents": [
            {
                "parts": [{"text": prompt}]
            }
        ]
    }

    response = requests.post(GEMINI_URL, headers=headers, json=payload)

    try:
        report_text = response.json()["candidates"][0]["content"]["parts"][0]["text"]
    except Exception as e:
        report_text = f"Error generating report: {response.text}"

    return templates.TemplateResponse("index.html", {"request": request, "report": report_text})
